import { colors } from "@material-ui/core";
import React from "react";

import useStyles from "./styles";

const About = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>About</h1>
      <p className={classes.container}>
        Tourism is on the increase all over the world. According to the World
        Tourism Organization, the number of foreign tourists rise by 6% in year,
        with an anticipated rise of 3–4% in even in covid pandemic season.
        People don't require travel companies as intermediaries any longer,
        thanks to a variety of online travel agencies, self-service booking
        portals. Another reason, why modern visitors want to design their own
        travel plans. Those who refer to plan using global platforms that allow
        for personal connections. Rather than hiring the assistance of a
        third-party travel service. The mentioned trends suggest that visitors
        are in serious need of innovative technological tools that will help
        them organize their trips and connect with local communities. So, I
        consider these habits when I decide to create a travel planner system.
      </p>
      <p className={classes.container}>
        It is just as difficult as it is pleasurable and enjoyable to plan a
        trip. There are so many things to remember: what to carry, airplane
        tickets, hotel and vehicle bookings, check-in and leaving times,
        confirmation numbers, addresses etcetera. When attempting to retain all
        of this information in perfect order, preparations become a complicated
        thing. This messy part of the trip planning process may be handled by
        Travel Companion app. Having all of the relevant information in one
        location. whenever you need it, it may be a useful tool.
      </p>
      <h1>Contact</h1>
      <p className={classes.container}>
        Telephone : 077123456 <br></br>email : travelcompanion@gmail.com
      </p>
    </div>
  );
};

export default About;
