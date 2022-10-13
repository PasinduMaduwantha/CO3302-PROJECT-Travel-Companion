import React, { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { gapi } from "gapi-script";
import axios from "axios";
import Icon from "./icon";
import { signin, signup } from "../../actions/auth";
import { AUTH } from "../../constants/actionTypes";
import useStyles from "./styles";
import Input from "./Input";
import { AuthContext } from "../../../../context/AuthContext";
import { CleanHands } from "@mui/icons-material";

const initialState = {
  username: "",
  email: "",
  country: "",
  img: "",
  city: "",
  phone: "",
  password: "",
  isAdmin: false,
};

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  // const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignup) {
      validatePhone(form.phone);
      if (form.password == form.confirmPassword) {
        console.log("event on submit:", form);
        const newUser = {
          username: form.username,
          email: form.email,
          country: form.country,
          img: "",
          city: form.city,
          phone: form.phone,
          password: form.password,
          isAdmin: false,
        };

        const res = await axios.post("/auth/register", newUser);
        // dispatch(signup(form, history));
      } else {
        alert("password not match");
      }
    } else {
      e.preventDefault();
      // dispatch({ type: "LOGIN_START" });
      try {
        const res = await axios.post("/auth/login", form);
        localStorage.setItem("user", JSON.stringify(res.data.details));
        // dispatch(signin(form, history));
        navigate("/");
      } catch (err) {
        console.log("username or password is incorrect");
        // dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      }
    }
  };

  const googleSuccess = async (res) => {
    console.log(res.profileObj);
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      localStorage.setItem("user", JSON.stringify(result));
      // dispatch({ type: AUTH, data: { result, token } });
      history("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = (error) => console.log(error);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const clientId =
    "811036077273-md6b7anjjp53sultht21julkgc79jne0.apps.googleusercontent.com";
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  function validatePhone(num) {
    // regex pattern for phone number
    const re = /^\(?([0-9]{3})\)?([0-9]{3})?([0-9]{4})$/g;
    // check if the phone number is valid
    let result = num.match(re);
    if (result) {
      console.log("The number is valid.");
    } else {
      let num = prompt("Enter your phone number in 10 digits format:");
      validatePhone(num);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={0}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? "Sign up" : "Sign in"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  type={"name"}
                  name="username"
                  label="User Name"
                  handleChange={handleChange}
                  autoFocus
                />
                <Input
                  type={"country"}
                  accept="image/*"
                  name="country"
                  label="Country"
                  handleChange={handleChange}
                />

                <Input
                  type="file"
                  name="img"
                  label={"Choose file to upload as your profile picture"}
                  handleChange={handleChange}
                />
                <Input
                  type={"city"}
                  name="city"
                  label="City"
                  handleChange={handleChange}
                />
                <Input
                  name="phone"
                  label="Phone"
                  id="phone"
                  handleChange={handleChange}
                  type="tel"
                />
              </>
            )}

            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId={clientId}
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy={"single_host_origin"}
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;
