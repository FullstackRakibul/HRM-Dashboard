import React, { useEffect, useState } from "react";
import {
  InboxOutlined,
  PlusCircleOutlined,
  UploadOutlined,
  EyeOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import {
  Col,
  Row,
  Card,
  Table,
  Select,
  Input,
  Button,
  Upload,
  Form,
  Space,
  message,
} from "antd";
const { Option } = Select;
import axios from "axios";
import { AxiosInstance } from "../../../../apis/supportTicketSlice";
const TicketTypeCreateForm = () => {
  const [ticketType, setTicketType] = useState([]);
  const onFinish = async (values) => {
    try {
      console.log("Submit success..", values);
      message.success("Type will be update soon");
    } catch (error) {
      console.log(error);
    }
  };

  // fetch ticket type data ....................

  useEffect(() => {
    const fetchTicketType = async () => {
      try {
        const response = await AxiosInstance.get(
          "/api/TicketTypes/ticket/type/list"
        );
        console.log(response);
        setTicketType(response.data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTicketType();
  }, []);

  const columns = [
    {
      title: "Ticket Type Name",
      dataIndex: "typeName",
      key: "typeName",
    },
    {
      title: "Type Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            danger
            className="text-primary "
            type="default"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          />
        </Space>
      ),
    },
  ];

  // ticket type delete .............

  const handleDelete = (id) => {
    console.log("Ticket typr will be deleted.........", id);
  };
  return (
    <>
      <Form layout="vertical" onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Ticket Title"
              name="ticketTitle"
              rules={[{ required: true, message: "Please enter ticket title" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="bg-primary text-white font-sans font-xl font-semibold hover:bg-white mt-3"
              >
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Row gutter={6} className="flex justify-center items-center mt-6">
        <Col span={24}>
          <Table
            key={ticketType.id}
            dataSource={ticketType}
            columns={columns}
          ></Table>
        </Col>
      </Row>
    </>
  );
};

export default TicketTypeCreateForm;
