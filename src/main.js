import "../styles/style.css";
import { setUpFullCalendar } from "./full-calendar/full-calendar.js";

document.addEventListener("DOMContentLoaded", function () {
  const calendarContainer = document.getElementById("calendar");

  setUpFullCalendar(calendarContainer);
});
