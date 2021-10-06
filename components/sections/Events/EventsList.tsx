import React, { useState } from "react";
import styles from "./EventsList.module.scss";

type calendarEvent = {
  title: string;
  day: string;
  date: string;
  timeStart: string;
  timeEnd: string;
  location: string;
  link?: string;
  linkText?: string;
};

const dummmyEvents: calendarEvent[] = [
  {
    title: "First event ever",
    day: "Wednesday",
    date: "July 24th",
    timeStart: "6pm",
    timeEnd: "7pm",
    location: "Your mom",
    link: "google.com",
    linkText: "GOOGLE",
  },
  {
    title: "Event 2",
    day: "Tuesday",
    date: "July 25th",
    timeStart: "4pm",
    timeEnd: "9pm",
    location: "Your dads ass",
    link: "google.com",
    linkText: "ph",
  },
  {
    title: "Final Event",
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

type EventsBlockProps = {
  calendarEvent: calendarEvent;
};
function EventsBlock({ calendarEvent }: EventsBlockProps) {
  return (
    <div className={styles.blockContainer}>
      <h3 className={styles.title}>{calendarEvent.title}</h3>
      <p className={styles.textDate}>
        {calendarEvent.day +
          ", " +
          calendarEvent.date +
          " @ " +
          calendarEvent.timeStart +
          " - " +
          calendarEvent.timeEnd}
      </p>
      <p className={styles.textLocation}>{calendarEvent.location}</p>
      {calendarEvent.link && (
        <a className={styles.textLink} href={calendarEvent.link}>
          {calendarEvent.linkText || "Learn more"}
        </a>
      )}
    </div>
  );
}
