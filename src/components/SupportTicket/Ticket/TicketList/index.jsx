import React, { useEffect, useState } from "react";
import { Row, Col, Menu, message } from "antd";
import supportTicketSlice from "../../../../apis/supportTicketSlice";

const AllTicketList = () => {
  const [ticket, setTicketList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await supportTicketSlice.get(
          "/dashboard/Dashboards/IssueBox"
        );
        setTicketList(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <section></section>
      <ul>
        <li>Ticket List All ()</li>
        <li>Ticket List All ()</li>
        <li>Ticket List All ()</li>
        <li>Ticket List All ()</li>
        <li>Ticket List All ()</li>
        <li>Ticket List All ()</li>
        <li>Ticket List All ()</li>
        <li>Ticket List All ()</li>
      </ul>
    </>
  );
};

export default AllTicketList;
