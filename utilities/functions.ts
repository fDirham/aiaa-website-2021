export function eventDateFormatter(dateObj: Date) {
  const dayId = dateObj.getDay();
  const day = isNaN(dayId)
    ? null
    : [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][dayId];
  const date = dateObj.getDate();
  const month = dateObj.getMonth() + 1;

  return { day, date: `${month}/${date}` };
}
