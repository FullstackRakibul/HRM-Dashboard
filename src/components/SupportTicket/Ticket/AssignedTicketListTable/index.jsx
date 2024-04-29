import React, { useEffect, useState } from "react";
import { AxiosInstance } from "../../../../apis/supportTicketSlice";
import { convertActualtDateTime } from "../../../../utils/DateConfig";
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
import NormalCard from "../../../ui/Card/NormalCard";
import ListsTable from "../../../ui/ListsTable";

const AssignedTicketListTable = () => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    fetchTicketData(5, 1);
  }, []);

  // Ticket Operation ............
  const fetchTicketData = async (Take = 5, Skip = 1) => {
    try {
      const responseAgentIssueList = await AxiosInstance.get(
        `/api/Targets/agentIssueList/123456`
      );

      const lists = configDataForTable(responseAgentIssueList.data);
      if (lists.length) {
        setTickets(lists);
      }

      console.log(setTickets.data);
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
      render: (status) => {
        return (
          <Space size="middle">
            <Badge
              count={
                status == 0
                  ? "Open"
                  : status == 1
                  ? "Acknowledged"
                  : status == 2
                  ? "InProgress"
                  : status == 3
                  ? "Complete"
                  : status == 4
                  ? "Closed"
                  : "Deleted"
              }
              style={{
                backgroundColor:
                  status == 0 ? "#52c41a" : status == 1 ? "#faad14" : "#faad14",
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
              className="gap-2"
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
                  >
                    Update Status
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
      <section className="pt-3">
        <h3 className="font-sans font-semibold text-2xl">Assigned List </h3>
        <div>
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
        </div>
      </section>
    </>
  );
};

export default AssignedTicketListTable;
