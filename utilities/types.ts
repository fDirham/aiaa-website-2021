export type imgData = {
  src: any;
  alt: string;
};

export type officerData = {
  imgSrc: any;
  name: string;
  position: string;
  email: string;
  pronouns: string;
};

export type calendarEvent = {
  title: string;
  day: string;
  date: string;
  timeStart: string;
  timeEnd: string;
  location: string;
  link?: string;
  linkText?: string;
};
