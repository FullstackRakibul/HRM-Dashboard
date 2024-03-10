import React, { useEffect, useState } from "react";
const { TextArea } = Input;
import {
  InboxOutlined,
  PlusCircleOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Col,
  Row,
  Card,
  Select,
  Input,
  Button,
  Upload,
  Form,
  message,
} from "antd";
const { Dragger } = Upload;
const { Option } = Select;

// file upload section design
const props = {
  name: "attachment",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} attachment uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} attachment upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const TicketCreateForm = () => {
  const [selectedUnitId, setselectedUnitId] = useState(null);
  const [selectedTicketTypeId, setSelectedTicketTypeId] = useState(null);
  const [unitLists, setUnitLists] = useState([]);
  const [departmentLists, setDepartmentLists] = useState([]);
  const [ticketTypeLists, setTicketTypeLists] = useState([]);

  const onFinish = (values) => {
    console.log("Received values:", values);
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
          <Col span={12}>
            <Form.Item
              label="Ticket Type"
              name="ticketType"
              rules={[{ required: true, message: "Please select ticket type" }]}
            >
              <Select
                labelInValue={true}
                optionFilterProp="label"
                showSearch
                allowClear
                options={ticketTypeLists}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Department"
              name="department"
              rules={[{ required: true, message: "Please select department" }]}
            >
              <Select
                labelInValue={true}
                optionFilterProp="label"
                showSearch
                allowClear
                options={departmentLists}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Unit"
              name="unit"
              rules={[{ required: true, message: "Please select unit" }]}
            >
              <Select
                labelInValue={true}
                optionFilterProp="label"
                showSearch
                allowClear
                options={unitLists}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "Please enter description" }]}
            >
              <Input.TextArea rows={3} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Attachment">
              <Form.Item name="attachment" valuePropName="fileList" noStyle>
                <Dragger {...props}>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited
                    from uploading company data or other banned files.
                  </p>
                </Dragger>
              </Form.Item>
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
    </>
  );
};

export default TicketCreateForm;
