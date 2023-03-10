import React from "react";

const EventCard: React.FC<{
  eventData: { date: { day: string; month: string }; title: string };
}> = ({ eventData }) => {
  return (
    <div className="w-fit p-2 border-2 rounded-md">
      <div className="bg-black opacity-30 flex flex-col w-fit p-2 gap-2 text-white">
        <p>{eventData.date.day.toUpperCase()}</p>
        <p>{eventData.date.month.toUpperCase()}</p>
      </div>
      <div className="flex justify-between items-center gap-4">
        <h3>{eventData.title.toUpperCase()}</h3>
        <button className="bg-orange-500 text-white px-5 py-2 rounded-3xl">
          GET TICKET
        </button>
      </div>
    </div>
  );
};

export default EventCard;
