import React, { useState } from "react";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import CalendarState from "./context/CalendarContext";
import TaskForm from "./components/TaskForm";
import "./CalenderList.css";

function CalendarList() {
  return (
    <div>
      <CalendarState>
        <Header />
        <Calendar />
        <TaskForm />
      </CalendarState>
    </div>
  );
}

export default CalendarList;
