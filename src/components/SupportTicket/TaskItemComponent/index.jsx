import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { EyeOutlined, CheckOutlined } from "@ant-design/icons";
import {
  Form,
  Button,
  Card,
  List,
  Select,
  Row,
  Col,
  message,
  Popconfirm,
} from "antd";
import { AxiosInstance } from "../../../apis/supportTicketSlice";
import "./index.less";
//import "./index.css"; // Ensure your custom styles are imported

const TaskItemComponent = () => {
  const [form] = Form.useForm();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [textValue, setTextValue] = useState(""); // For Quill
  const [supportEnginner, setSupportEnginner] = useState([]);

  const onFinish = async (values) => {
    try {
      values.assignedTo = values.assignedTo?.value
        ? values.assignedTo.value
        : null;
      console.log("create data : ", values);
      const response = await AxiosInstance.post(
        "/api/TaskItem/create-task-item",
        values
      );
      //console.log(response);
      //setTasks([...tasks, response.data.data]);
      fetchTasks();
      form.resetFields();
      setTextValue("");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchSupportEnginner();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await AxiosInstance.get(
        "/api/TaskItem/all-task-item-list"
      );
      console.log(response.data.data);
      setTasks(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setLoading(false);
    }
  };
  const fetchSupportEnginner = async () => {
    try {
      const response = await AxiosInstance.get("/api/Supports");

      console.log("engineer data : ", response.data);
      setSupportEnginner(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleMarkDone = async (value) => {
    try {
      console.log("mark done test", value);
      const responseMarkAs = await AxiosInstance.put(
        `/api/TaskItem/mark-done-${value}`
      );
      message.success(responseMarkAs.data.data);
      fetchTasks();
      setLoading(false);
      console.log(responseMarkAs);
    } catch (error) {
      console.log(error);
    }
  };

  const handleView = async (value) => {
    console.log(value);
  };

  return (
    <div className="container mx-auto p-4 h-screen relative">
      <List
        grid={{ gutter: 16, column: 1 }}
        loading={loading}
        dataSource={tasks}
        renderItem={(task) => (
          <List.Item>
            <Row gutter={16}>
              <Col span={10}>
                <Card
                  title={
                    <div
                      dangerouslySetInnerHTML={{ __html: task.taskItemTitle }}
                    />
                  }
                  className="bg-gray-100"
                  size="small"
                  style={{
                    backgroundColor:
                      task.status == 0
                        ? "#ffcccc"
                        : task.status == 1
                        ? "#ffd3bb"
                        : "#85BB4B",
                  }}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex justify-around items-start">
                      <p className="mb-1 gap-10">
                        <b>Assigned To:</b> {task.assignedTo}
                        <b>Status:</b>{" "}
                        {task.status == 0
                          ? "Fresh Task"
                          : task.status == 1
                          ? "Working On"
                          : "Complete"}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        type="primary"
                        className="bg-primary text-white font-sans font-xl font-semibold hover:bg-white"
                        icon={<EyeOutlined />}
                        size="small"
                        onClick={() => handleView(task.id)}
                      />
                      <Popconfirm
                        title="Are you sure you wa?"
                        onConfirm={() => handleMarkDone(task.id)}
                        okText="Yes"
                        cancelText="No"
                        overlayClassName="custom-popconfirm-overlay"
                      >
                        <Button
                          type="primary"
                          className="bg-primary text-white font-sans font-xl font-semibold hover:bg-white"
                          icon={<CheckOutlined />}
                          size="small"
                        />
                      </Popconfirm>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </List.Item>
        )}
      />

      <Card className="mb-4 fixed bottom-0 w-3/4 ">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Row gutter={16} className="flex items-center justify-center">
            <Col span={16}>
              <Form.Item
                name="taskItemTitle"
                rules={[{ required: true, message: "Please enter a title" }]}
              >
                <ReactQuill
                  theme="snow"
                  value={textValue}
                  onChange={setTextValue}
                  placeholder="Enter task description"
                  className="minimal-input"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="assignedTo">
                <Select
                  showSearch
                  allowClear
                  placeholder="Select support engineer"
                  labelInValue={true}
                  optionFilterProp="label"
                  className="custom-select"
                  //style={{ width: 200 }}
                >
                  {supportEnginner.map((item) => (
                    <Select.Option value={item.agentId}>
                      {item.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-primary text-white font-sans font-xl font-semibold hover:bg-white mt-3"
            >
              Create Task
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default TaskItemComponent;
