import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import PropertyList from "../../components/propertyList/PropertyList";
import "./Plan.css";
import SideBar from "../../components/sidebar/sidebar";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";

const Plan = () => {
  return (
    <div>
      <div className="container">
        <SideBar />
        <NavBar />
      </div>
      <div className="iconContainer">
        <DepartureBoardIcon style={{ fontSize: "40px", marginTop:"1rem",marginLeft: "10rem", color: "white" }} />
        <h1>Plan your trip</h1>
      </div>
      <Header/>
      <div className="homeContainer">
        {/* <Featured/> */}
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
      </div>
      <Footer/>
      </div>
  );
};

export default Plan;


