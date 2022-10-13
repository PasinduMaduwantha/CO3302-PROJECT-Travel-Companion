import "./Cancel.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import React,{useState} from 'react'
import axios from 'axios'

const Cancel = () => {
  const [id, setId] = useState(null)
  const [filter, setFilter] = useState(null)
  
  const all = async () => {
    const res = await axios.get("/cancel/getall")
    const getAll = await axios.get("/cancel/getallreservations")
    console.log(getAll.data)
    setFilter(getAll.data)
  const data = res.data
    setId(res.data)
    
    //map data
    const mapped = data.map((item) => {
      return {
        // id: item._id,
        cancelID : item.cancelID,
      }
    })

    // console.log("filter",mapped)
}

  console.log(id)

  const remove = (id) => {
    console.log("remove id",id)
    axios.delete(`/cancel/delete/${id}`)
    .then(res => {
      console.log("deleted",res)
    })
  }

  var d;
  return (
    <div className="list">
      <Sidebar />
  
      <div className="listContainer">
        <Navbar />
        <button style={{ width: "100px"}} onClick={all}>Refresh</button>
       <div style={{marginBottom:"10px"}}>
            <h3 >Reservation Details</h3>
            {filter? filter.map(({_id,name,startDate,endDate,destination,noOfRooms,adults,child,amount }) => (
              <p  key={_id}> <h4 style={{color:"ActiveBorder"}}>Hotel Name : {name}</h4>
                <br />Reservation Id : { _id}
                <br />Start Date: {startDate}
                <br />End Date: {endDate}
                <br />Destination :{destination}
                <br />Number Of Rooms : {noOfRooms}
                <br />Number Of Adults : {adults}
                <br />Number Of Children : {child}
                <br />Amount : {amount}<br />
                <hr/>
              </p>
          
            )): null}
          </div>
        <h3 style={{ color: "red" }}>Cancel Requests</h3>
        {id ? id.map(({ _id, cancelId }) => (
          <div className="listItem">
            <span className="listTitle">{cancelId}</span>
            <br></br>
            <button style={{width:"150px",background:"red"}} onClick={() => remove(cancelId)}>Delete</button>
          </div>
        )) : null} 
      </div>
    </div>
    )
}

export default Cancel;
