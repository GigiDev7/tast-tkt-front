import EventCard from "../components/EventCard";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const Tickets = () => {
  const events = [
    {
      date: {
        day: "25",
        month: "May",
      },
      title: "Fifa world cup",
      id: 1,
    },
  ];

  return (
    <div>
      <DateCalendar
        onChange={(val: any) => console.log(new Date(val))}
        views={["year", "month"]}
        sx={{
          border: "1px solid",
          borderRadius: "15px",
        }}
        disablePast={true}
      />
      {events.map((ev) => (
        <EventCard eventData={ev} />
      ))}
    </div>
  );
};

export default Tickets;
