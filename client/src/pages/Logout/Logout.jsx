import React, { useState, useEffect }  from "react";
import { Button } from "@material-ui/core";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actionType from "../home/constants/actionTypes";
import './Logout.css';

const Logout=() =>{
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const dispatch = useDispatch();
  const history = useNavigate();
  
    const logout = () => {
      dispatch({ type: actionType.LOGOUT });
      history("/auth");
      setUser(null);
    };
  return (
    <Button variant="contained" color="secondary" onClick={logout} className='logout'>
      Logout
    </Button>
  );
}

export default Logout;
