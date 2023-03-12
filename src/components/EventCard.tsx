import React from "react";
import { Link } from "react-router-dom";
import { IEvent } from "../shared/interfaces";

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const EventCard: React.FC<{
  eventData: IEvent;
}> = ({ eventData }) => {
  return (
    <div className="w-fit p-2 border-2 rounded-md">
      <div className="bg-black opacity-30 flex flex-col w-fit p-2 gap-2 text-white">
        <p>{new Date(eventData.date).getDate()}</p>
        <p>{months[new Date(eventData.date).getMonth()]}</p>
        <p>{eventData.time}</p>
      </div>
      <div className="flex justify-between items-center gap-4">
        <h3>{eventData.title.toUpperCase()}</h3>
        <Link
          to={`/tickets/${eventData._id}`}
          className="bg-orange-500 text-white px-5 py-2 rounded-3xl"
        >
          GET TICKET
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
