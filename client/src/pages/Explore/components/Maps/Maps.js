import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyle from "./styles";
import mapStyles from "./mapStyles";

const Maps = ({
  coords,
  places,
  setCoords,
  setBounds,
  setChildClicked,
  weatherData,
}) => {
  const isDesktop = useMediaQuery("(max-width:600px)");
  const classes = useStyle();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDwbkLHst1GBcuXUpS096GNnmTxrcv0mnY" }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  variant="subtitle2"
                  className={classes.typography}
                  gutterBottom
                >
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.linguahouse.com%2Flinguafiles%2Fmd5%2Fd01dfa8621f83289155a3be0970fb0cb&imgrefurl=https%3A%2F%2Fwww.linguahouse.com%2Fru%2Flearning-english%2Fgeneral-english%2Fat-the-restaurant&tbnid=sTvbxgz8DZNqkM&vet=12ahUKEwjVk_Dljfr1AhUNcxoKHWkKDD8QMygHegUIARDeAQ..i&docid=BJb0GmvR_d9ngM&w=1000&h=667&q=restaurants&ved=2ahUKEwjVk_Dljfr1AhUNcxoKHWkKDD8QMygHegUIARDeAQ"
                  }
                  alt={place.name}
                />
                {/* <Rating
                    name="read-only"
                    size="small"
                    value={Number(place.rating)}
                    readOnly
                  /> */}
              </Paper>
            )}
          </div>
        ))}
        {/* {weatherData?.list?.length && weatherData.list.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" />
          </div>
        ))} */}
      </GoogleMapReact>
    </div>
  );
};
export default Maps;
