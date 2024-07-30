"use client";

//css
import styled from "styled-components";

//components
import Home from "../page";

//calendar
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from '@fullcalendar/list'

const CalendarContainner = styled.main`
  .fc .fc-col-header-cell-cushion {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fc-theme-standard td {
    max-height: 10px;
  }

  width: 100%;
  min-height: 100vh;
`;

const Calendar = () => {
  return (
    <Home>
      <CalendarContainner>
        <FullCalendar
          plugins={[dayGridPlugin, listPlugin]}
          initialView="dayGridMonth"
          titleFormat={{ month: "short", year: "numeric" }}
          headerToolbar={{
            start: "prevYear,nextYear",
            center: "title",
            end: "today prev,next",
          }}
          contentHeight={100}
          height={800}
          navLinks={true}
          weekNumbers={true}
        />
      </CalendarContainner>
    </Home>
  );
};

export default Calendar;
