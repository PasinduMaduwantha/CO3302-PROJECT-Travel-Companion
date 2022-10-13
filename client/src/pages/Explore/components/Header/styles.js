import { makeStyles } from "@material-ui/core/styles";
import { alpha } from "@material-ui/core";
export default makeStyles((theme) => ({
  appbar: {
    position: "static",
    backgroundColor: "#2f3f55",
    marginLeft: "10rem",
    alignItems: "right",
    width: "20rem",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: "calc(1em+${theme.spacing(4)}px)",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
