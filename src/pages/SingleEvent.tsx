import React from "react";

const SingleEvent = () => {
  const tickets = [
    {
      date: "03-10-2023",
      status: "Verified",
      customer: "Test Test",
      price: 40,
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold">Purchase Ticket</h2>
      <div>
        {tickets.map((ticket) => (
          <p>{ticket.price}</p>
        ))}
      </div>
    </div>
  );
};

export default SingleEvent;
