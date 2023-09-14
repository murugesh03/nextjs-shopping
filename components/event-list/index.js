import React from 'react';
import EventItem from '../event-item';
import classes from './index.module.css';
const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((ele) => (
        <EventItem
          key={ele.id}
          id={ele.id}
          title={ele.title}
          location={ele.location}
          date={ele.date}
          image={ele.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
