import React from "react";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SideBar from "../../components/sidebar/sidebar";
import EventIcon from "@mui/icons-material/Event";
import CalendarList from "./Reminders/Calendar/CalenderList.js";
import "./Reminders.css";

function Home() {
  return (
    <div>
      <div className="container">
        <SideBar />
        <NavBar />
      </div>
      <div className="iconContainer">
        <EventIcon
          style={{ fontSize: "60px", marginLeft: "10rem", color: "white" }}
        />
        <h1>Reminders</h1>
      </div>
      <div className="remContainer">
        <CalendarList />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
