import React from 'react';
import { officerData } from 'utilities/types';
import styles from './OfficersList.module.scss';
import OfficersBlock from './OfficersBlock';

const officerList: officerData[] = [
  {
    name: 'Carissa Yao',
    pronouns: 'She/Her',
    email: 'c3yao@ucsd.edu',
    imgSrc: 'officers/carissa.jpg',
    position: 'Chairperson',
  },
  {
    name: 'Ignatius Widjaja',
    pronouns: 'He/Him',
    email: 'iwidjaja@ucsd.edu',
    imgSrc: 'officers/ignatius.jpg',
    position: 'Vice Chairperson',
  },
  {
    name: 'Fajar Dirham',
    pronouns: 'He/Him',
    email: 'fdirham@ucsd.edu',
    imgSrc: 'officers/fajar.png',
    position: 'Webmaster',
  },
  {
    name: 'Joshua Cantrell',
    pronouns: 'He/Him',
    email: 'jrcantre@ucsd.edu',
    imgSrc: 'officers/josh.png',
    position: 'Treasurer',
  },
  {
    name: 'Nafanil Ceshkovsky',
    pronouns: 'He/Him',
    email: 'naceshko@ucsd.edu',
    imgSrc: 'officers/nafanil.jpeg',
    position: 'Secretary',
  },
  {
    name: 'Bryan Cheng',
    pronouns: 'He/Him',
    email: 'c9cheng@ucsd.edu',
    imgSrc: 'officers/bryan.jpg',
    position: 'External Coordinator',
  },
  {
    name: 'Brandon Vinh',
    pronouns: 'He/Him',
    email: 'bvinh@ucsd.edu',
    imgSrc: 'officers/brandon.jpeg',
    position: 'Speaker Coordinator',
  },
  {
    name: 'Seth McLaughlin',
    pronouns: 'He/Him',
    email: 'swmclaug@ucsd.edu',
    imgSrc: 'officers/seth.jpg',
    position: 'Development Coordinator',
  },
  {
    name: 'Andres Hernandez',
    pronouns: 'He/Him',
    email: 'anh009@ucsd.edu',
    imgSrc: 'officers/andres.jpg',
    position: 'EDI Coordinator',
  },
  {
    name: 'Sakshi Patel',
    pronouns: 'She/Her',
    email: 'sap020@ucsd.edu',
    imgSrc: 'officers/sakshi.jpg',
    position: 'Social/Outreach Chair',
  },
  {
    name: 'Sherry Tao',
    pronouns: 'She/Her',
    email: 's2tao@ucsd.edu',
    imgSrc: 'officers/sherry.jpg',
    position: 'Social/Outreach Chair',
  },
  {
    name: 'Ross Turner',
    pronouns: 'He/Him',
    email: 'returner@ucsd.edu',
    imgSrc: 'officers/ross.jpg',
    position: 'Graduate Liaison',
  },
  {
    name: 'Dr. Mark Anderson',
    pronouns: 'He/Him',
    email: 'm3anderson@ucsd.edu',
    imgSrc: 'officers/mark.jpg',
    position: 'Faculty Advisor',
  },
];

export default function OfficersList() {
  return (
    <div className={styles.container}>
      {officerList.map((officer) => {
        return <OfficersBlock key={officer.position} officerData={officer} />;
      })}
      {officerList.length % 2 === 0 && <div className={styles.dummyDiv}></div>}
    </div>
  );
}
