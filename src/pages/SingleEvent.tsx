import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config";
import { ITicket } from "../shared/interfaces";
import TicketCard from "../components/TicketCard";

import { useTable } from "react-table";

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

const SingleEvent = () => {
  const [tickets, setTickets] = useState<null | ITicket[]>(null);
  const params = useParams();

  const data = React.useMemo(() => {
    if (!tickets) {
      return [];
    }
    return tickets?.map((ticket) => {
      return {
        col1: `${new Date(ticket.event.date).getDate()},${
          months[new Date(ticket.event.date).getMonth()]
        }`,
        col2: `${ticket.owner.firstname} ${ticket.owner.lastname}`,
        col3: `${ticket.price}GEL`,
      };
    });
  }, [tickets]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Date",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Customer",
        accessor: "col2",
      },
      {
        Header: "Price",
        accessor: "col3",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  useEffect(() => {
    async function getTickets() {
      const { data } = await axios.get(`${BASE_URL}/tickets/${params.eventId}`);
      setTickets(data);
    }
    getTickets();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold">Purchase Ticket</h2>
      <div className="self-start mt-20">
        {/* {tickets &&
          tickets.length > 0 &&
          tickets.map((ticket: ITicket) => (
            <TicketCard key={ticket._id} ticket={ticket} />
          ))} */}
        {tickets && tickets.length == 0 && <p>Tickets not found!</p>}

        {tickets && tickets.length > 0 && (
          <table {...getTableProps()} className="w-[500px]">
            <thead className="">
              {headerGroups.map((headerGroup) => (
                <tr
                  {...headerGroup.getHeaderGroupProps()}
                  className="flex gap-36 justify-center"
                >
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      className="w-1/3 text-center"
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()} className="font-medium">
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    className="flex gap-36 justify-center capitalize border-2 rounded-md py-2 mt-2"
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className="w-1/3 text-center"
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default SingleEvent;
