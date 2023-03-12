import React from "react";
import { ITicket } from "../shared/interfaces";

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

const TicketCard = ({ ticket }: { ticket: ITicket }) => {
  return (
    <div className="flex gap-6 items-center border-b-2 pb-5">
      <div className="flex gap-2">
        <p>
          {new Date(ticket.event.date).getDate()},
          {months[new Date(ticket.event.date).getMonth()]}
        </p>
        <p>{ticket.event.time}</p>
      </div>
      <div>
        <p className="capitalize">
          {ticket.owner.firstname} {ticket.owner.lastname}
        </p>
      </div>
      <div>
        <p>{ticket.price}</p>
      </div>
      <button className="bg-green-500 hover:bg-green-600 px-8 text-white py-2 rounded-xl">
        Buy
      </button>
    </div>
  );
};

export default TicketCard;
