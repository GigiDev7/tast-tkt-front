import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IEvent } from "../shared/interfaces";
import EventCard from "../components/EventCard";
import axios from "axios";
import { BASE_URL } from "../config";

const Search = () => {
  const [events, setEvents] = useState<null | IEvent[]>(null);
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (!search) return;
    const { data } = await axios.get(`${BASE_URL}/events?title=${search}`);
    setEvents(data);
  };

  return (
    <div className="flex items-center flex-col">
      <div className="flex items-center gap-3">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="w-[400px] border-[1px] border-black rounded-2xl pl-3 py-3"
          placeholder="Search..."
        />
        <AiOutlineSearch
          onClick={handleSearch}
          className="text-xl cursor-pointer"
        />
      </div>
      <div className="self-start mt-16">
        {events &&
          events.length > 0 &&
          events.map((ev) => <EventCard key={ev._id} eventData={ev} />)}
        {events && events.length == 0 && <p>No event found!</p>}
      </div>
    </div>
  );
};

export default Search;
