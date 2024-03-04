import React, { useEffect, useState } from "react";
import { Row, Col, Menu, message } from "antd";
import { supportTicketSlice } from "../../../../apis/supportTicketSlice";

const AllTicketList = () => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Call the endpoint using the generated hook
        const { response } =
          await supportTicketSlice.endpoints.getIssueBox.useQuery({});
        // Assuming the response contains ticket data in an array format
        setTickets(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // const [ticket, setTicketList] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await supportTicketSlice.get(
  //         "/dashboard/Dashboards/IssueBox"
  //       );
  //       setTicketList(response);
  //       console.log(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            Ticket ID: {ticket.id}, Title: {ticket.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllTicketList;
