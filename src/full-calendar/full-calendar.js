import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

const defaultOptions = {
  plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
  initialView: "dayGridMonth",
  headerToolbar: {
    left: "prev, next today",
    center: "title",
    right: "dayGridMonth, timeGridWeek, listWeek",
  },
};

export function setUpFullCalendar(element, options = defaultOptions) {
  const calendar = new Calendar(element, options);

  calendar.render();
}
