import React from "react";
import styles from "./Events.module.scss";
import EventsList from "./EventsList";
import EventsImages from "./EventsImages";

export default function Events() {
  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <div className={styles.containerText}>
          <h2>Upcoming Events</h2>
          <EventsList />
        </div>
        <div className={styles.containerImages}>
          <EventsImages />
        </div>
      </div>
    </div>
  );
}
