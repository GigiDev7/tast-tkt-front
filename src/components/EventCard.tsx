import React from "react";
import { Link } from "react-router-dom";

const EventCard: React.FC<{
  eventData: {
    date: { day: string; month: string };
    title: string;
    id: number;
  };
}> = ({ eventData }) => {
  return (
    <div className="w-fit p-2 border-2 rounded-md">
      <div className="bg-black opacity-30 flex flex-col w-fit p-2 gap-2 text-white">
        <p>{eventData.date.day.toUpperCase()}</p>
        <p>{eventData.date.month.toUpperCase()}</p>
      </div>
      <div className="flex justify-between items-center gap-4">
        <h3>{eventData.title.toUpperCase()}</h3>
        <Link
          to={`/tickets/${eventData.id}`}
          className="bg-orange-500 text-white px-5 py-2 rounded-3xl"
        >
          GET TICKET
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
