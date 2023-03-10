import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Link
        to="/events"
        className="bg-orange-500 w-60 px-5 py-2 rounded-2xl text-white font-medium hover:bg-orange-600"
      >
        PURCHASE TICKETS NOW
      </Link>
      <button className="px-5 w-60 border-orange-500 border-[1px] py-2 rounded-2xl font-medium text-orange-500 hover:bg-gray-100">
        SELL TICKETS NOW
      </button>
    </div>
  );
};

export default Home;
