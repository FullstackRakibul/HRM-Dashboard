import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { EyeOutlined, CheckOutlined } from "@ant-design/icons";
import { Form, Button, Card, List, Select, Row, Col } from "antd";
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
      //values.assignedTo = values.assignedTo.value;
      console.log(values);
      const response = await AxiosInstance.post(
        "/api/TaskItem/create-task-item",
        values
      );
      console.log(response.data.data);
      setTasks([...tasks, response.data.data]);
      form.resetFields();
      setTextValue(""); // Reset the Quill editor
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

      console.log(`item list ${response.data.data}`);
      setTasks(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setLoading(false);
    }
  };
  const fetchSupportEnginner = async () => {
    try {
      const response = await AxiosInstance.get("");
      setSupportEnginner(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  /// remove code after api set

  const supportEngineers = [
    { label: "Engineer A", value: "Engineer A" },
    { label: "Engineer B", value: "Engineer B" },
  ];

  return (
    // <div className="container mx-auto p-4 h-screen ">
    //   <List
    //     grid={{ gutter: 16, column: 1 }}
    //     loading={loading}
    //     dataSource={tasks}
    //     renderItem={(task) => (
    //       <List.Item>
    //         <Row gutter={16}>
    //           <Col span={6}>
    //             <Card className="bg-gray-100" size="small">
    //               <div className="flex justify-between items-center">
    //                 <div>
    //                   <p className="mb-1">
    //                     <b>Assigned To:</b> {task.assignedTo}
    //                   </p>
    //                   <p className="mb-1">
    //                     <b>Status:</b> {task.status ? "Completed" : "Pending"}
    //                   </p>
    //                 </div>
    //                 <div className="flex gap-2">
    //                   <Button
    //                     type="primary"
    //                     className="bg-primary text-white font-sans font-xl font-semibold hover:bg-white mt-3"
    //                     icon={<EyeOutlined />}
    //                     size="small"
    //                     onClick={() => handleView(task.id)}
    //                   />
    //                   <Button
    //                     type="primary"
    //                     className="bg-primary text-white font-sans font-xl font-semibold hover:bg-white mt-3"
    //                     icon={<CheckOutlined />}
    //                     size="small"
    //                     onClick={() => handleMarkDone(task.id)}
    //                   />
    //                 </div>
    //               </div>
    //             </Card>
    //           </Col>
    //         </Row>
    //       </List.Item>
    //     )}
    //   />

    //   <Card className="mb-4 sticky bottom-0  ">
    //     <Form form={form} layout="vertical" onFinish={onFinish}>
    //       <Row gutter={16} className="flex items-center justify-center">
    //         <Col span={16}>
    //           <Form.Item
    //             name="taskItemTitle"
    //             rules={[{ required: true, message: "Please enter a title" }]}
    //           >
    //             <ReactQuill
    //               theme="snow"
    //               value={textValue}
    //               onChange={setTextValue}
    //               placeholder="Enter task description"
    //               className="minimal-input"
    //             />
    //           </Form.Item>
    //         </Col>
    //         <Col span={8}>
    //           <Form.Item name="assignedTo">
    //             <Select
    //               showSearch
    //               allowClear
    //               placeholder="Select support engineer"
    //               labelInValue={true}
    //               optionFilterProp="label"
    //               options={supportEngineers}
    //               className="custom-select"
    //             >
    //               <Select.Option value="Engineer A">Engineer A</Select.Option>
    //               <Select.Option value="Engineer B">Engineer B</Select.Option>
    //             </Select>
    //           </Form.Item>
    //         </Col>
    //       </Row>
    //       <Form.Item>
    //         <Button
    //           type="primary"
    //           htmlType="submit"
    //           className="bg-primary text-white font-sans font-xl font-semibold hover:bg-white mt-3"
    //         >
    //           Create Task
    //         </Button>
    //       </Form.Item>
    //     </Form>
    //   </Card>
    // </div>
    <div className="container mx-auto p-4 h-screen relative">
      <List
        grid={{ gutter: 16, column: 1 }}
        loading={loading}
        dataSource={tasks}
        renderItem={(task) => (
          <List.Item>
            <Row gutter={16}>
              <Col span={6}>
                <Card
                  title={task.taskItemTitle}
                  className="bg-gray-100"
                  size="small"
                  style={{ textAlign: "left" }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="mb-1">
                        <b>Assigned To:</b> {task.assignedTo}
                      </p>
                      <p className="mb-1">
                        <b>Status:</b> {task.status ? "Completed" : "Pending"}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        type="primary"
                        className="bg-primary text-white font-sans font-xl font-semibold hover:bg-white mt-3"
                        icon={<EyeOutlined />}
                        size="small"
                        onClick={() => handleView(task.id)}
                      />
                      <Button
                        type="primary"
                        className="bg-primary text-white font-sans font-xl font-semibold hover:bg-white mt-3"
                        icon={<CheckOutlined />}
                        size="small"
                        onClick={() => handleMarkDone(task.id)}
                      />
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
                  options={supportEngineers}
                  className="custom-select"
                >
                  <Select.Option value="Engineer A">Engineer A</Select.Option>
                  <Select.Option value="Engineer B">Engineer B</Select.Option>
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
