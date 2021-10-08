import React from "react";
import { eventDateFormatter } from "utilities/functions";
import { calendarEvent } from "utilities/types";
import styles from "./EventsBlock.module.scss";

type EventsBlockProps = {
  calendarEvent: calendarEvent;
};
export default function EventsBlock({ calendarEvent }: EventsBlockProps) {
  const { day, date } = eventDateFormatter(calendarEvent.date);
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{calendarEvent.title}</h3>
      <p className={styles.textDate}>
        {day +
          ", " +
          date +
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
