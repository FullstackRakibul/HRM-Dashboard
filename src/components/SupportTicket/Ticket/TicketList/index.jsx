import React, { useEffect, useState } from "react";
import { Row, Col, Menu, message, Table, Button, Input, Select } from "antd";
const { Option } = Select;

import axios from "axios";
import { AxiosInstance } from "../../../../apis/supportTicketSlice";

const AllTicketList = () => {
  const [tickets, setTicketList] = useState([]);
  const [agents, setAgentList] = useState([]);
  const [editingTicket, setEditingTicket] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [updateClicked, setUpdateClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseTicket = await AxiosInstance.get(
          "https://localhost:7295/dashboard/Dashboards/IssueBox"
        );
        setTicketList(responseTicket.data.tickets);
        const responseAgent = await AxiosInstance.get(
          "https://localhost:7295/dashboard/Dashboards/IssueBox"
        );
        setAgentList(responseAgent.data.departments);
        console.log(responseAgent.data.departments);
        console.log(responseTicket);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (record) => {
    setEditingTicket(record);
    setUpdateClicked(false); // Reset updateClicked state
  };

  const handleAssign = () => {
    if (selectedAgent) {
      message.success("Ticket has been assigned to a Support Engineer");
      setUpdateClicked(true); // Set updateClicked state to true after Assign button click
    } else {
      message.error("Please select an agent to assign the ticket.");
    }
  };

  const handleUpdate = () => {
    // Handle update action
    message.success("Ticket has been updated.");
  };

  const handleAgentSelect = (value) => {
    setSelectedAgent(value);
  };

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
    {
      title: "Actions",
      render: (record) => (
        <span className="gap-2 flex">
          {editingTicket === record ? (
            <>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select an agent"
                optionFilterProp="children"
                onChange={handleAgentSelect}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {agents.map((agent) => (
                  <Option key={agent.id} value={agent.id}>
                    {agent.name}
                  </Option>
                ))}
              </Select>
              <Button onClick={handleAssign}>Assign</Button>
            </>
          ) : (
            <>
              <Button type="dashed" onClick={() => handleEdit(record)}>
                Assign
              </Button>

              {record.status === 4 ? (
                <Button disabled>Complete</Button>
              ) : (
                <Button>Update For Check</Button>
              )}
              <Button type="dashed">Share Comment</Button>
              <Button danger type="primary">
                Delete
              </Button>
            </>
          )}
        </span>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={tickets} />
    </>
  );
};

export default AllTicketList;
