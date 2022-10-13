import React, { useState,useEffect } from "react";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SideBar from "../../components/sidebar/sidebar";
import "./TimeLine.css";
import TimelineIcon from "@mui/icons-material/Timeline";
import { Chrono } from "react-chrono";
import axios from 'axios';
import { RefreshOutlined } from "@material-ui/icons";

const TimeLine = () => {
  
  const [check, setCheck] = useState(null)
  const [store,setStore] = useState(null)

  const userDetails = JSON.parse(localStorage.getItem('user'));
  const id = userDetails._id || userDetails.googleId

    const getData = async () => { 
      const res = await axios.get(`/reserve/getreservation/${id}`);
      const restore = await axios.get(`/store/getstore/${id}`);
      setCheck(res.data)
      setStore(restore.data)

    }

  const showData = () => {
    getData()
  }

  const items = [
  
    
    {
      // title: results,
      cardTitle: "",
      // cardSubtitle:
      //   "car",
      // cardDetailedText:
      //   "Men of the British Expeditionary Force (BEF) wade out to..",
      // media: {
        //   type: "IMAGE",
        //   source: {
          //     url: "http://someurl/image.jpg",
          //   },
          // },
        },
  ];
  
      
  const cards = () => {showData()}

  
  const cancel = async (id) => {
    console.log(id)
    const cancelItems = 
      {
        "cancelId" : id
      }
    const res = await axios.post(`/cancel`,cancelItems);
  }

  return (
    <dv className="reports">
      <div className="container">
        <SideBar />
        <NavBar />
      </div>
      <div className="iconContainer">
        <TimelineIcon
          style={{
            fontSize: "40px",
            marginTop: "1rem",
            marginLeft: "10rem",
            color: "white",
          }}
        />
        <h1>TimeLine</h1>
      </div>
      <div style={{ width: "100%", height: "600%", marginLeft: "150px" }}>
        {/* <Chrono items={items} /> */}
        <button onClick={cards} style={{color:""}}><RefreshOutlined/></button>
         <Chrono>
          
          <div>
            <h3>Reservation Details</h3>
            {check? check.map(({_id,name,startDate,endDate,destination,noOfRooms,adults,child,amount }) => (
              <p key={_id}> <h4>Hotel Name : {name}</h4>
                <br />Reservation Id : { _id}
                <br />Start Date: {startDate}
                <br />End Date: {endDate}
                <br />Destination :{destination}
                <br />Number Of Rooms : {noOfRooms}
                <br />Number Of Adults : {adults}
                <br />Number Of Children : {child}
                <br />Amount : {amount}<br />
                <button onClick={()=>{cancel(_id)}}>Cancel</button>
                <hr/>
              </p>
          
            )): null}
          </div>
        </Chrono>
        <Chrono>
          <div>
          <h3>Checked Places</h3>
            {
              store ? store.map(({ _id, name, address, description, phone }) => (
                
                <p key={_id}><h4>{name}</h4>
                  <br />Address : {address}
                  <br />Description : {description}
                  <br />Phone : {phone}
                  <hr/>
                </p>
                
              )) : null}
            </div>
          </Chrono>
       
      </div>
      <Footer />
    </dv>
  );
};

export default TimeLine;
