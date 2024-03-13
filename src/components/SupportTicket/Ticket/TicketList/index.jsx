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
import ConfigureAxios from "../../../../utils/axios";
import ListsTable from "../../../ui/ListsTable";
import NormalCard from "../../../ui/Card/NormalCard";
import CommonFormItem from "../../../ui/FormItem/Common";
import { convertActualtDateTime } from "../../../../utils/DateConfig";
import {
  DeleteOutlined,
  UsergroupAddOutlined,
  SendOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import PaginationMain from "../../../ui/Pagination";

const { Option } = Select;
import { AxiosInstance } from "../../../../apis/supportTicketSlice";
import "./index.less";
import axios from "axios";
import AssignAgentModal from "../global/AssignAgentModal";

const AllTicketList = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tickets, setTicketList] = useState([]);
  const [agents, setAgentList] = useState([]);
  const [editingTicket, setEditingTicket] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [updateClicked, setUpdateClicked] = useState(false);
  const [reviewLists, setReviewLists] = useState([]);
  const [ticketInfos, setTicketInfos] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [assignModalVisible, setAssignModalVisible] = useState(false);

  useEffect(() => {
    ConfigureAxios();
  }, []);

  useEffect(() => {
    fetchData(10, 1);
  }, []);

  const fetchData = async (Take = 10, Skip = 1) => {
    try {
      const responseTicket = await AxiosInstance.get(
        `/api/Tickets/getPaginationList/${Skip}/${Take}`
      );

      const lists = configDataForTable(responseTicket.data);
      if (lists.length) {
        setTicketList(lists);
      }
      const responseAgent = await AxiosInstance.get("/api/Supports");
      setAgentList(responseAgent.data);
      console.log(responseAgent.data);
      console.log(responseTicket.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTicketReviewsDetails = async (TicketId) => {
    if (TicketId) {
      axios
        .get(`/api/Reviews/TicketWiseReply?id=${TicketId}`)
        .then((response) => {
          console.log("response : ", response);
          showModal();
        })
        .catch((error) => {
          console.log("Get Ticket Review Details error.");
        });
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
    //setTenderInfos({});
  };
  const handleEdit = (record) => {
    setEditingTicket(record);
    setUpdateClicked(false);
  };

  const handleAssign = () => {
    if (selectedAgent) {
      message.success("Ticket has been assigned to a Support Engineer");
      setUpdateClicked(true); // Set updateClicked state to true after Assign button click
    } else {
      message.error("Please select an agent to assign the ticket.");
    }
  };

  const handleUpdateForCheck = (ticketId) => {
    try {
      const response = AxiosInstance.get(
        `/api/Tickets/updateForCheck/${ticketId}`
      );

      console.log("Check for update Ticket ID", ticketId);

      if (response.status === 200) {
        message.success("Ticket has been updated.");
      } else {
        message.error("Failed to update ticket.");
      }
    } catch (error) {
      console.error("Error updating ticket:", error);
      //message.error("Failed to update ticket.");
    }
  };

  const handleAssignAgentClick = (ticketId) => {
    setSelectedIssueId(ticketId);
    setAssignModalVisible(true);
  };

  const handleAgentSelect = (value) => {
    setSelectedAgent(value);
    console.log(selectedAgent);
  };

  const onPaginationChange = (page, pageSize) => {
    console.log("Page: ", page);
    console.log("PageSize: ", pageSize);
    setCurrentPage(page);
    const Skip = page;
    const Take = pageSize;
    fetchData(Take, Skip == 0 ? 1 : Skip);
  };

  //..............table data setup

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
      render: (_, record) => {
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
      render: (record) => (
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
                  onClick={handleUpdateForCheck(record.id)}
                >
                  Update
                </Button>
              )}

              {/* <Button
                size="small"
                type="primary"
                className="font-sans bg-primary flex items-center"
                onClick={() => handleEdit(record)}
                icon={<UsergroupAddOutlined />}
              >
                Assign
              </Button> */}
              <AssignAgentModal
                visible={assignModalVisible}
                onCancel={() => setAssignModalVisible(false)}
                ticketId={record.id}
              />
              <Button
                icon={<UsergroupAddOutlined />}
                className="font-sans flex items-center"
                size="small"
                type="dashed"
                // onClick={async () => {
                //   setTicketInfos(record);
                //   await getTicketReviewsDetails(record.id);
                // }}
                onClick={() => handleAssignAgentClick()}
              >
                Assign
              </Button>
              <Button
                icon={<SendOutlined />}
                className="font-sans flex items-center"
                size="small"
                type="dashed"
                onClick={async () => {
                  setTicketInfos(record);
                  await getTicketReviewsDetails(record.id);
                }}
              >
                Share Review
              </Button>
              <Button
                icon={<DeleteOutlined />}
                className="font-sans flex items-center"
                size="small"
                danger
                type="primary"
              >
                Delete
              </Button>
            </span>
          </Col>
        </Row>
      ),
    },
  ];

  return (
    <>
      <NormalCard>
        <ListsTable
          tableProps={{
            key: "key",
            data: tickets?.length ? tickets : [],
            height: 500,
            columns,
            rowSelection: {
              type: "checkbox",
              onChange: (selectedRowKeys, selectedRows) => {
                // Call handleSelectRow function with selected rows
                handleSelectRow(selectedRows);
              },
            },
          }}
        />
        <PaginationMain
          onPaginationChange={onPaginationChange}
          count={120}
          currentPage={currentPage}
        />
      </NormalCard>
      <Modal
        closable={false}
        width={800}
        title={
          <>
            <Row
              style={{
                padding: "0px 0px 0px 0px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Col span={18}>
                <span className="modal-header-title font-sans">
                  <b className="font-sans">
                    Add New Review - {ticketInfos?.title}
                  </b>
                </span>
              </Col>
              <Col
                span={6}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <CloseCircleOutlined
                  className="close-timer-modal-icon"
                  onClick={() => {
                    handleCancel();
                  }}
                />
              </Col>
            </Row>
            <Divider
              style={{
                margin: "6px 0px 8px 0px",
              }}
            />
          </>
        }
        open={isModalOpen}
        footer={null}
        className="add-timer-logs-modal"
      >
        <Row>
          <Col span={24}>
            <ul>
              <li>Here will be the messeages</li>
              <li>Here will be the messeages</li>
              <li>Here will be the messeages</li>
              <li>Here will be the messeages</li>
              <li>Here will be the messeages</li>
              <li>Here will be the messeages</li>
              <li>Here will be the messeages</li>
              <li>Here will be the messeages</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form size="small" form={form}>
              <Row>
                <Col span={24}>
                  <CommonFormItem
                    propsLists={{
                      tooltip: {
                        title: "Add a review on this issue",
                      },
                      rules: {
                        required: true,
                        message: "Ticket review Is Required.",
                      },
                      name: "TicketReview",
                      labelAlign: "right",
                      label: "Add review on this Ticket",
                    }}
                  >
                    <Input.TextArea rows={2} />
                  </CommonFormItem>
                </Col>
              </Row>
              <Row
                style={{
                  padding: "12px 0px 8px 0px",
                }}
              >
                <Col
                  span={24}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Button
                    size="small"
                    className="font-sans"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="primary"
                    className="font-sans bg-primary"
                    size="small"
                    htmlType="submit"
                  >
                    Send Review
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default AllTicketList;
