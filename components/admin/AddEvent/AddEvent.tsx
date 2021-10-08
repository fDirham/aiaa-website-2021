import React, { useState } from "react";
import styles from "./AddEvent.module.scss";
import { firestoreDB } from "firebaseApp";
import { addDoc, collection, doc, setDoc } from "@firebase/firestore";

export default function AddEvent() {
  const [newEvent, setNewEvent] = useState<any>({});

  function handleChange(e: any, id: string) {
    const newerEvent = { ...newEvent };
    newerEvent[id] = e.target.value;
    setNewEvent(newerEvent);
  }

  async function handleSubmit(e?: any) {
    if (e) e.preventDefault();
    const requiredKeys = ["title", "location", "date", "timeStart", "timeEnd"];
    requiredKeys.forEach((key) => {
      if (!newEvent[key]) {
        window.alert("Missing field: " + key);
        return;
      }
    });

    const submission = { ...newEvent };
    let formattedDate = new Date(submission["date"]);
    const userTimezoneOffset = formattedDate.getTimezoneOffset() * 60000;
    formattedDate = new Date(formattedDate.getTime() + userTimezoneOffset);
    submission["date"] = formattedDate;

    try {
      const docRef = await addDoc(
        collection(firestoreDB, "events"),
        submission
      );
      window.alert("Event created");
      //   setNewEvent({});
    } catch (err) {
      window.alert("Error submitting");
    }
  }

  return (
    <div className={styles.container}>
      Add event
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={newEvent["title"] || ""}
          onChange={(e) => handleChange(e, "title")}
        />
        <input
          type="text"
          placeholder="location"
          value={newEvent["location"] || ""}
          onChange={(e) => handleChange(e, "location")}
        />
        <input
          type="date"
          placeholder="date"
          value={newEvent["date"] || ""}
          onChange={(e) => handleChange(e, "date")}
        />
        <input
          type="text"
          placeholder="timeStart"
          value={newEvent["timeStart"] || ""}
          onChange={(e) => handleChange(e, "timeStart")}
        />
        <input
          type="text"
          placeholder="timeEnd"
          value={newEvent["timeEnd"] || ""}
          onChange={(e) => handleChange(e, "timeEnd")}
        />
        <input
          type="text"
          placeholder="link"
          value={newEvent["link"] || ""}
          onChange={(e) => handleChange(e, "link")}
        />
        <input
          type="text"
          placeholder="linkText"
          value={newEvent["linkText"] || ""}
          onChange={(e) => handleChange(e, "linkText")}
        />
        <button onClick={handleSubmit}>submit</button>
        <button type="button" onClick={() => setNewEvent({})}>
          reset
        </button>
      </form>
    </div>
  );
}
