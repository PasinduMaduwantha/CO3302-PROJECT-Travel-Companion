import "./datatable.scss";
import  {DataGrid}  from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import Single from "../../pages/single/Single";

const Datatable = ({columns}) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState();
  const [admin, setAdmin] = useState();
  const { data, loading, error } = useFetch(`/${path}`);


  useEffect(() => {
    if (path === "users") {
      data && setList(data.filter((item) => item.isAdmin === false));
    } else {
      setList(data);
      
     }
  }, [data]);

  const handleDelete = async (id) => {
    try {
      console.log(`/${path}/${id}`);
      const res = await axios.delete(`/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {}
  };



  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {

        return (
          <div className="cellAction" >
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
        </div>
        
      <DataGrid
        className="datagrid"
        rows={list?list:[]}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={row => row._id}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
