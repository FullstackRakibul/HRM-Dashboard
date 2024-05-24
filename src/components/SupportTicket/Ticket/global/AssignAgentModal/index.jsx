import React, { useState, useEffect } from "react";
import { Modal, Form, Select, Button, message, Input } from "antd";
import { AxiosInstance } from "../../../../../utils/axios";

const AssignAgentModal = ({ visible, onCancel, ticketId }) => {
  const [form] = Form.useForm();
  const [supportEngineer, setSupportEngineer] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await AxiosInstance.get("/api/Supports");
      setSupportEngineer(response.data);
    };
    fetchData();
  }, []);

  // ....... handle assign agent ...............
  const handleAssignAgent = async () => {
    try {
      const values = await form.validateFields();
      values.ticketId = ticketId;
      console.log(values);
      const response = await AxiosInstance.post(
        "/api/Targets/assignSupportEngineer",
        values
      );
      console.log(response);
      message.success("Agent assigned successfully!");
      onCancel();
    } catch (error) {
      console.error("Error assigning agent:", error);
      message.error("Error assigning agent. Please try again.");
    }
  };

  return (
    <Modal
      title="Assign Agent"
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button
          className="bg-primary"
          type="primary"
          key="cancel"
          onClick={onCancel}
        >
          Cancel
        </Button>,
        <Button
          key="submit"
          className="bg-primary"
          type="primary"
          onClick={handleAssignAgent}
        >
          Assign Agent
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Select Agent"
          name="agentId"
          rules={[{ required: true, message: "Please select an agent" }]}
        >
          <Select style={{ width: 470 }}>
            {supportEngineer.map((item) => (
              <Select.Option key={item.agentId} value={item.agentId}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AssignAgentModal;
