import React, { useEffect, useState } from "react";
import { calendarEvent } from "utilities/types";
import EventsBlock from "./EventsBlock";
import styles from "./EventsList.module.scss";
import {
  collection,
  query,
  limit,
  onSnapshot,
  orderBy,
  where,
} from "firebase/firestore";
import { firestoreDB } from "firebaseApp";

export default function EventsList() {
  const [events, setEvents] = useState<calendarEvent[]>([]);

  useEffect(() => {
    const q = query(
      collection(firestoreDB, "events"),
      orderBy("date", "asc"),
      where("date", ">", new Date()),
      limit(3)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newEvents: calendarEvent[] = [];
      querySnapshot.forEach((doc) => {
        const eventData = doc.data();
        const newEvent = { ...eventData, date: eventData.date.toDate() };
        newEvents.push(newEvent as calendarEvent);
      });
      setEvents(newEvents);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className={styles.container}>
      {events.length &&
        events.map((calEvent) => {
          return <EventsBlock key={calEvent.title} calendarEvent={calEvent} />;
        })}
    </div>
  );
}
