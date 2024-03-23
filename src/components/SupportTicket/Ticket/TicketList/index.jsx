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
  List,
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

const getTicketReviewsDetails = async (TicketId, setReviews, showModal) => {
  if (TicketId) {
    try {
      const response = await axios.get(
        `/api/Reviews/TicketWiseReply?id=${TicketId}`
      );
      setReviews(response.data);
      showModal();
    } catch (error) {
      console.log("Get Ticket Review Details error.", error);
    }
  }
};

const AllTicketList = ({ TicketId }) => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tickets, setTicketList] = useState([]);
  const [agents, setAgentList] = useState([]);
  const [editingTicket, setEditingTicket] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [updateClicked, setUpdateClicked] = useState(false);
  const [ticketInfos, setTicketInfos] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [assignModalVisible, setAssignModalVisible] = useState(false);
  const [selectedIssueId, setSelectedIssueId] = useState(null);

  //........show list with pagination ..........................
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

  // ..................const pagination ticket list................
  const onPaginationChange = (page, pageSize) => {
    console.log("Page: ", page);
    console.log("PageSize: ", pageSize);
    setCurrentPage(page);
    const Skip = page;
    const Take = pageSize;
    fetchData(Take, Skip == 0 ? 1 : Skip);
  };

  //........on modal actions and handeing ...............
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

  // .................. assign agent ................
  const handleAssignAgentClick = (ticketId) => {
    setSelectedIssueId(ticketId);
    setAssignModalVisible(true);
  };

  const handleAgentSelect = (value) => {
    setSelectedAgent(value);
    console.log(selectedAgent);
  };

  const handleAssign = () => {
    if (selectedAgent) {
      message.success("Ticket has been assigned to a Support Engineer");
      setUpdateClicked(true); // Set updateClicked state to true after Assign button click
    } else {
      message.error("Please select an agent to assign the ticket.");
    }
  };

  // .................. update ticket status ................
  const [isButtonDisabled, setIsButtonDisabled] = useState([false]);
  const handleUpdateForCheck = async (ticketId) => {
    try {
      console.log(ticketId);
      const response = await AxiosInstance.post(
        `/api/Tickets/UpdateForCheckTicketStatus/${ticketId}`
      );
      console.log("Check for update Ticket ID", response);
      if (response.status === 200) {
        message.success("Ticket has been updated.");
        // disable this button for 1 min
        //isButtonDisabled(true);
        //setTimeout(() => setIsButtonDisabled(false), 1 * 60 * 1000);
      } else {
        message.error("Failed to update ticket.");
      }
    } catch (error) {
      console.error("Error updating ticket:", error);
      //message.error("Failed to update ticket.");
    }
  };

  //..............table data setup ...................

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

  //............. single ticket reviews data list
  const [reviews, setReviews] = useState([]);
  // const ReviewModal = ({ TicketId, isModalOpen, handleCancel }) => {
  //   const [reviews, setReviews] = useState([]);

  //   const getTicketReviewsDetails = async (TicketId, setReviews) => {
  //     if (TicketId) {
  //       try {
  //         const response = await axios.get(
  //           `/api/Reviews/TicketWiseReply?id=${TicketId}`
  //         );
  //         setReviewLists(response.data);
  //       } catch (error) {
  //         console.log("Get Ticket Review Details error.", error);
  //       }
  //     }
  //   };

  //   useEffect(() => {
  //     if (isModalOpen) {
  //       getTicketReviewsDetails(TicketId, setReviews);
  //     }
  //   }, [TicketId, isModalOpen]);
  // };
  //.......... ticket review modal ...................
  // const getTicketReviewsDetails = async (TicketId) => {
  //   if (TicketId) {
  //     axios
  //       .get(`/api/Reviews/TicketWiseReply?id=${TicketId}`)
  //       .then((response) => {
  //         console.log("response : ", response);
  //         setReviews(response);
  //         console.log(response);
  //         showModal();
  //       })
  //       .catch((error) => {
  //         console.log("Get Ticket Review Details error.", error);
  //       });
  //   }
  // };

  useEffect(() => {
    getTicketReviewsDetails(TicketId, setReviews, () => setIsModalOpen(true));
  }, [TicketId]);

  //...handle delete ..............
  const handleDeleteItem = async (itemId) => {
    try {
      const response = await AxiosInstance.delete(`/api/Tickets/${itemId}`);
      console.log(response);
      message.warning("Ticket Deleted successfully");
      //      console.log(`Item with ID ${itemId} deleted successfully`);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  // .............. ticket table data .......
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
          <Space size="status">
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
                  status == 0
                    ? "#52c41a"
                    : status == 1
                    ? "#faad14"
                    : status == 2
                    ? "#ff5f20"
                    : status == 3
                    ? "#5356FF"
                    : status == 4
                    ? "#00224D"
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
                  // disabled={isButtonDisabled}
                  onClick={() => handleUpdateForCheck(record.id)}
                >
                  Update Status
                </Button>
              )}
              <Button
                icon={<UsergroupAddOutlined />}
                className="font-sans flex items-center"
                size="small"
                type="dashed"
                onClick={() => handleAssignAgentClick(record.id)}
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
                  await getTicketReviewsDetails(
                    record.id,
                    setReviews,
                    showModal
                  );
                }}
              >
                Reviews
              </Button>
              <Button
                icon={<DeleteOutlined />}
                className="font-sans flex items-center"
                size="small"
                danger
                type="primary"
                onClick={async () => {
                  await handleDeleteItem(record.id); // Pass the itemId of the item to be deleted
                }}
              >
                Delete
              </Button>
            </span>
          </Col>
        </Row>
      ),
    },
  ];

  // handle add review ......
  const [ticketReview, setTicketReview] = useState("");

  const handleCreateReview = async (values) => {
    const insertData = {
      ticketId: "105",
      reviewerId: "000000",
      reviewNote: values.reviewNote,
    };
    console.log(insertData);
    const response = await AxiosInstance.post(
      "/api/Reviews/create-review-note",
      insertData
    );
    console.log(response.data);
    if (response.status === 200) {
      message.success("Review note added.");
      form.resetFields();
    } else {
      message.error("Error in adding review.");
    }

    return;
  };

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
            <List
              style={{ maxHeight: "300px", overflowY: "auto" }}
              dataSource={reviews}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <span className="text-xl font-semibold ">
                        {item.reviewNote}
                      </span>
                    }
                    description={
                      <>
                        <span className="text-sm font-bold">
                          <b className="text-primary">ReviewerId :</b>{" "}
                          {item.reviewerId}
                        </span>
                        <br></br>
                        <span className="text-sm font-bold">
                          {convertActualtDateTime(item.createdAt)}
                        </span>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form size="small" form={form} onFinish={handleCreateReview}>
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
                      name: "reviewNote",
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
                    onSubmit={handleCreateReview}
                  >
                    Send Review
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Modal>

      <AssignAgentModal
        visible={assignModalVisible}
        onCancel={() => setAssignModalVisible(false)}
        ticketId={selectedIssueId}
      />
    </>
  );
};

export default AllTicketList;
