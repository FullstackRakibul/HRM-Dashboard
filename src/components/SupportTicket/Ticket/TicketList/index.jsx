import React, { useEffect, useState } from "react";
import { Row, Col, Menu, message, Table } from "antd";

import axios from "axios";
import { AxiosInstance } from "../../../../apis/supportTicketSlice";

const AllTicketList = () => {
  const [tickets, setTicketList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get(
          "https://localhost:7295/dashboard/Dashboards/IssueBox"
        );
        setTicketList(response.data.tickets);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "title",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={tickets} />
    </>
  );
};

export default AllTicketList;
