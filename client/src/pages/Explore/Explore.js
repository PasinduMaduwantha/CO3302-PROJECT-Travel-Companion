import ExploreIcon from "@mui/icons-material/Explore";
import React from "react";
import "./Explore.css";
import Map from "./map";
import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/Footer";
import Explore from "./exploremap";
// import Header from "./components/Header/Header";

function Home() {
  return (
    <div>
      <div className="container">
        <SideBar />
        <Navbar />
      </div>
      {/* <div className="iconContainer">
        <ExploreIcon
          style={{ fontSize: "60px", marginLeft: "10rem", color: "white" }}
        />
        <h1>Explore your world</h1>
      </div> */}
      {/* <Header /> */}
      <Explore />
      {/* <Map /> */}
      <Footer />
    </div>
  );
}

export default Home;
