import React from "react";
import EventIcon from "@mui/icons-material/Event";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import TimelineIcon from "@mui/icons-material/Timeline";

export const SidebarData = [
  {
    title: "Login",
    path: "/auth",
    icon: <LoginIcon />,
    cName: "nav-text",
  },
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
    cName: "nav-text",
  },
  {
    title: "Explore",
    path: "/explore",
    icon: <ExploreIcon />,
    cName: "nav-text",
  },
  {
    title: "Plan",
    path: "/plan",
    icon: <DepartureBoardIcon />,
    cName: "nav-text",
  },
  {
    title: "TimeLine",
    path: "/timeline",
    icon: <TimelineIcon />,
    cName: "nav-text",
  },
  {
    title: "Reminders",
    path: "/reminders",
    icon: <EventIcon />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <ContactSupportIcon />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <LogoutIcon />,
    cName: "nav-text",
  },
];
