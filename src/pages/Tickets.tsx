import React from "react";
import EventCard from "../components/EventCard";

const Tickets = () => {
  const events = [
    {
      date: {
        day: "25",
        month: "May",
      },
      title: "Fifa world cup",
    },
  ];

  return (
    <div>
      {events.map((ev) => (
        <EventCard eventData={ev} />
      ))}
    </div>
  );
};

export default Tickets;
