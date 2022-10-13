import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import useStyle from "./styles";

const Header = ({ onLoad, onPlaceChanged }) => {
  const classes = useStyle();

  return (
    <div className="iconContainer">
      <ExploreIcon
        style={{ fontSize: "60px", marginLeft: "10rem", color: "white" }}
      />
      <h1>Explore</h1>
      {/* <AppBar className={classes.appbar}>
        {
          <Toolbar className={classes.toolbar}>
            
            <Box display="flex">
               <Typography variant="h6" className={classes.title}>
              Explore new places
            </Typography> 
              <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <div className={classes.search}>
                  <div className={classes.SearchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </div>
              </Autocomplete>
            </Box>
          </Toolbar>
        }
      </AppBar> */}
    </div>
  );
};
export default Header;
