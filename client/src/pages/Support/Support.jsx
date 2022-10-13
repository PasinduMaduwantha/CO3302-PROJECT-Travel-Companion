import React from "react";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SideBar from "../../components/sidebar/sidebar";
import "./Support.css";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
function Support() {
  return (
    <div>
      <div className="container">
        <SideBar />
        <NavBar />
      </div>
      <div className="iconContainer">
        <ContactSupportIcon style={{ fontSize: "40px", marginTop:"1rem",marginLeft: "10rem", color: "white" }} />
        <h1>Support</h1>
      </div>
      <div>
      <h2>About</h2>
      <p className="supcontainer">
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
      <p className="supcontainer">
        It is just as difficult as it is pleasurable and enjoyable to plan a
        trip. There are so many things to remember: what to carry, airplane
        tickets, hotel and vehicle bookings, check-in and leaving times,
        confirmation numbers, addresses etcetera. When attempting to retain all
        of this information in perfect order, preparations become a complicated
        thing. This messy part of the trip planning process may be handled by
        Travel Companion app. Having all of the relevant information in one
        location. whenever you need it, it may be a useful tool.
      </p>
      <h2>Contact</h2>
      <p className="supcontainer">
        Telephone : 077123456 <br></br>email : travelcompanion@gmail.com
      </p>
    </div>
        <Footer/>
    </div>
  );
}

export default Support;
