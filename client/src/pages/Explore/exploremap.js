import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlaceData, getWeatherData } from "./api/mapAPI";
import Header from "./components/Header/Header.js";
import List from "./components/List/List.js";
import Maps from "./components/Maps/Maps.js";

const Explore = () => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  const [WeatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);
    setFilteredPlaces(filtered);
  }, [rating]);

  // useEffect(() => {
  //   if (bounds) {
  //     setIsLoading(true);

  //     // getWeatherData(coordinates.lat, coordinates.lng).then((data) =>
  //     //   setWeatherData(data)
  //     // );

  //     getPlaceData(type, bounds.sw, bounds.ne).then((data) => {
  //       setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
  //       console.log(
  //         "data",
  //         data.filter((place) => place.name && place.num_reviews > 0)
  //       );
  //       setFilteredPlaces([]);
  //       setRating("");
  //       setIsLoading(false);
  //     });
  //   }
  // }, [bounds, type]);

  useEffect(() => {
    if (bounds) setIsLoading(true);

    getPlaceData(type, bounds.sw, bounds.ne).then((data) => {
      setPlaces(
        data
          ? data.filter((place) => place.name && place.num_reviews > 0)
          : data
      );
      //data? ... because data is undefined @ initial stage
      setFilteredPlaces([]);
      setRating("");
      setIsLoading(false);
    });
  }, [bounds, type]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  };

  return (
    <>
      <CssBaseline />
      <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            isLoading={isLoading}
            childClicked={childClicked}
            places={filteredPlaces.length ? filteredPlaces : places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Maps
            setChildClicked={setChildClicked}
            setBounds={setBounds}
            setCoords={setCoordinates}
            coords={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            weatherData={WeatherData}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default Explore;
