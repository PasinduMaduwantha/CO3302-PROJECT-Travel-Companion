import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";
import axios from "axios";
import { Place } from "@material-ui/icons";

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected) {
    console.log("selected", selected);
    const ref = refProp?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    // console.log("ref", ref);
  }
  const classes = useStyles();

  const userDetails = JSON.parse(localStorage.getItem("user"));

  const store = async () => {
    const newStore = {
      user: userDetails._id || userDetails.googleId,
      name: place.name,
      address: place.address,
      category: place.category.name,
      description: place.description,
      phone: place.phone,
    };
    const res = await axios.post("/store", newStore);
    console.log("res:", res);
    console.log("place name", place);
  };

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.linguahouse.com%2Flinguafiles%2Fmd5%2Fd01dfa8621f83289155a3be0970fb0cb&imgrefurl=https%3A%2F%2Fwww.linguahouse.com%2Fru%2Flearning-english%2Fgeneral-english%2Fat-the-restaurant&tbnid=sTvbxgz8DZNqkM&vet=12ahUKEwjVk_Dljfr1AhUNcxoKHWkKDD8QMygHegUIARDeAQ..i&docid=BJb0GmvR_d9ngM&w=1000&h=667&q=restaurants&ved=2ahUKEwjVk_Dljfr1AhUNcxoKHWkKDD8QMygHegUIARDeAQ"
        }
        title={place.name}
      />

      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>

        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend">
            {place.num_reviews} Review{place.num_reviews > 1 && "s"}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle">Ranking</Typography>
          <Typography gutterBottom variant="subtitle2">
            {place.ranking}
          </Typography>
        </Box>

        {place?.awards?.map((award) => (
          <Box
            my={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <img src={award.images.small} alt={award.display_name} />
          </Box>
        ))}

        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} margin="5px 5px 0" />
        ))}
        {place?.address && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon /> {place.address}
          </Typography>
        )}

        {place?.phone && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>

      <CardActions>
        <Button size="small" color="primary" onClick={() => store()}>
          Travel Companion
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            window.open(place.website, "_blank");
          }}
        >
          Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
