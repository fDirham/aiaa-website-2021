import React, { useState } from "react";
import { calendarEvent } from "utilities/types";
import EventsBlock from "./EventsBlock";
import styles from "./EventsList.module.scss";

const dummmyEvents: calendarEvent[] = [
  {
    title: "First Event",
    day: "Wednesday",
    date: "July 24th",
    timeStart: "6pm",
    timeEnd: "7pm",
    location: "Geisel 10th floor",
    link: "google.com",
  },
  {
    title: "Event 2",
    day: "Tuesday",
    date: "July 25th",
    timeStart: "4pm",
    timeEnd: "9pm",
    location: "Remote",
    link: "google.com",
    linkText: "Zoom link",
  },
  {
    title: "3rd Event",
    day: "Monday",
    date: "Aug 30th",
    timeStart: "1am",
    timeEnd: "9pm",
    location: "Mars",
  },
];

export default function EventsList() {
  const [events, setEvents] = useState<calendarEvent[]>(dummmyEvents);

  return (
    <div className={styles.container}>
      {events.length &&
        events.map((calEvent) => {
          return <EventsBlock key={calEvent.title} calendarEvent={calEvent} />;
        })}
    </div>
  );
}
