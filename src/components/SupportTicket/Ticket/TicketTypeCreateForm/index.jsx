import React, { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import {
  Col,
  Row,
  Table,
  Select,
  Input,
  Button,
  Form,
  Space,
  message,
} from "antd";
import { AxiosInstance } from "../../../../apis/supportTicketSlice";

const TicketTypeCreateForm = () => {
  const [form] = Form.useForm();
  const [ticketTypes, setTicketTypes] = useState([]);

  const onFinish = async (values) => {
    try {
      console.log(values);
      const response = await AxiosInstance.post(
        "/api/TicketTypes/create-ticket-type",
        values
      );
      console.log(response);

      if (response.status === 200) {
        message.success("Type Created Successfully.");
        fetchTicketTypes();
        form.resetFields();
      } else {
        message.error("Failed to Create Type.");
      }
    } catch (error) {
      console.log(`Error in formData: ${error}`);
      message.error("Error in Creating Type.");
    }
  };

  const fetchTicketTypes = async () => {
    try {
      const response = await AxiosInstance.get(
        "/api/TicketTypes/get-all-ticket-type"
      );
      console.log(response.data);
      setTicketTypes(response.data.data);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  useEffect(() => {
    fetchTicketTypes(); // Fetch ticket types when component mounts
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await AxiosInstance.delete(
        `/api/TicketTypes/ticket/type/${id}`
      );
      if (response.status === 200) {
        message.success("Ticket Type Deleted Successfully.");
        fetchTicketTypes(); // Fetch ticket types again after deleting one
      } else {
        message.error("Failed to Delete Ticket Type.");
      }
    } catch (error) {
      console.log(`Exception Error: ${error}`);
      message.error("An error occurred while deleting Ticket Type.");
    }
  };

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
            type="default"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          />
        </Space>
      ),
    },
  ];

  return (
    <>
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Ticket Title"
              name="typeName"
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
          <Table dataSource={ticketTypes} columns={columns} key="id" />
        </Col>
      </Row>
    </>
  );
};

export default TicketTypeCreateForm;
