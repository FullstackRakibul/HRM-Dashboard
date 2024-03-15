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

import {
  DeleteOutlined,
  UsergroupAddOutlined,
  SendOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

import { AxiosInstance } from "../../../../apis/supportTicketSlice";
import { convertActualtDateTime } from "../../../../utils/DateConfig";

import NormalCard from "../../../ui/Card/NormalCard";
import ListTicket from "../../../../pages/SupportTicket/ListTicket";
import ListsTable from "../../../ui/ListsTable";
import PaginationMain from "../../../ui/Pagination";

const MailTicketList = () => {
  const [tickets, setTicketList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData(10, 1);
  }, []);

  const fetchData = async (Take = 10, Skip = 1) => {
    try {
      const responseMailTicket = await AxiosInstance.get(
        `/api/Tickets/getPaginationList/${Skip}/${Take}`
      );

      const lists = configDataForTable(responseMailTicket.data);
      if (lists.length) {
        setTicketList(lists);
      }

      console.log(responseMailTicket.data);
    } catch (error) {
      console.log(error);
    }
  };

  const configDataForTable = (lists) => {
    const newLists = [...lists];
    let emptyLists = [];

    if (newLists.length) {
      newLists.map((d) => {
        const newObj = {
          ...d,
          key: d.id,
        };

        emptyLists = [...emptyLists, newObj];
      });
    }
    return emptyLists;
  };

  // .......................

  const handleUpdateForCheck = async (ticketId) => {
    try {
      console.log("Check for update Ticket ID", ticketId);
      const response = await AxiosInstance.get(
        `/api/Tickets/updateForCheck/${ticketId}`
      );

      if (response.status === 200) {
        message.success("Ticket has been updated.");
      } else {
        message.error("Failed to update ticket.");
      }
    } catch (error) {
      console.error("Error updating ticket:", error);
      message.error("Failed to update ticket.");
    }
  };

  // ........................
  const onPaginationChange = (page, pageSize) => {
    console.log("Page: ", page);
    console.log("PageSize: ", pageSize);
    setCurrentPage(page);
    const Skip = page;
    const Take = pageSize;
    fetchData(Take, Skip == 0 ? 1 : Skip);
  };

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
    {
      key: "status",
      title: "Status",
      dataIndex: "status",
      width: "12%",
      align: "center",
      render: (record) => {
        return (
          <Space size="middle">
            <Badge
              count={
                record.status == 0
                  ? "Open"
                  : record.status == "1"
                  ? "Acknowledged"
                  : record.status == "2"
                  ? "InProgress"
                  : record.status == "3"
                  ? "Complete"
                  : record.status == "4"
                  ? "Closed"
                  : "Deleted"
              }
              style={{
                backgroundColor:
                  record.status == "0"
                    ? "#52c41a"
                    : record.status == "1"
                    ? "#faad14"
                    : "#faad14",
                fontFamily: "'Titillium Web',sans-serif",
              }}
              size="large"
            />
          </Space>
        );
      },
    },
    {
      title: "Actions",
      align: "center",

      render: (record) => {
        return (
          <Row>
            <Col
              span={24}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span className="gap-2 flex item-center">
                {record.status === 4 ? (
                  <Button className="font-sans" size="small" disabled>
                    Complete
                  </Button>
                ) : (
                  <Button
                    icon={<CheckCircleOutlined />}
                    className="font-sans flex items-center"
                    size="small"
                    onClick={() => handleUpdateForCheck(record.id)}
                  >
                    Update For Check
                  </Button>
                )}
              </span>
            </Col>
          </Row>
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
        />
        <PaginationMain
          onPaginationChange={onPaginationChange}
          count={120}
          currentPage={currentPage}
        />
      </NormalCard>
    </>
  );
};

export default MailTicketList;
