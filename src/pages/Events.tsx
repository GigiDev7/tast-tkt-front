import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import axios from "axios";
import { BASE_URL } from "../config";

interface IEvent {
  id: string;
  title: string;
  location: string;
  date: string;
  time: string;
}

const Tickets = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState<null | IEvent[]>(null);

  useEffect(() => {
    async function getEvents() {
      const { data } = await axios.get(
        `${BASE_URL}/events?date=${date.toLocaleDateString()}`
      );
      setEvents(data);
    }
    getEvents();
  }, [date]);

  return (
    <div>
      <DateCalendar
        onChange={(val: any) => setDate(new Date(val))}
        views={["year", "month"]}
        sx={{
          border: "1px solid",
          borderRadius: "15px",
        }}
        disablePast={true}
      />
      <div className="mt-12">
        {events &&
          events.length > 0 &&
          events.map((ev) => <EventCard key={ev.id} eventData={ev} />)}
        {events && events.length == 0 && <p>Events not found!</p>}
      </div>
    </div>
  );
};

export default Tickets;
