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
  date: Date;
  timeStart: string;
  timeEnd: string;
  location: string;
  link?: string;
  linkText?: string;
};

export type navItem = {
  label: string;
  id: string;
};
