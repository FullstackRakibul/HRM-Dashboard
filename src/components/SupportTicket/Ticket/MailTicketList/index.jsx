import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Menu,
  message,
  Table,
  Button,
  Input,
  Select,
  Space,
  Badge,
  Modal,
  Divider,
  Form,
  Avatar,
} from "antd";

import { AxiosInstance } from "../../../../apis/supportTicketSlice";
import { convertActualtDateTime } from "../../../../utils/DateConfig";

import NormalCard from "../../../ui/Card/NormalCard";
import ListTicket from "../../../../pages/SupportTicket/ListTicket";
import ListsTable from "../../../ui/ListsTable";

const MailTicketList = () => {
  const [tickets, setTicketList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseTicket = await AxiosInstance.get(
          "/dashboard/Dashboards/IssueBox"
        );

        setTicketList(responseTicket.data.tickets);
        console.log(responseTicket.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const columns = [
    {
      key: "title",
      title: "Name",
      dataIndex: "title",
      width: "35%",
      align: "left",
    },
    {
      key: "createdAt",
      title: "Created At",
      dataIndex: "createdAt",
      width: "12%",
      key: "OpenDate",
      align: "center",
      render: (_, record) => {
        return (
          <Space size="middle">
            <span>
              <strong>{convertActualtDateTime(record.createdAt)}</strong>
            </span>
          </Space>
        );
      },
    },
  ];
  return (
    <>
      <NormalCard>
        <ListsTable
          tableProps={{
            data: tickets?.length ? tickets : [],
            height: 500,
            columns,
            rowSelection: tickets.id,
          }}
        ></ListsTable>
      </NormalCard>
    </>
  );
};

export default MailTicketList;
