import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  InputNumber,
  Row,
  Col,
} from "antd";

const CreateDevAssets = () => {
  const [form] = Form.useForm();

  const softwareTypes = [
    { value: "HRM", label: "HRM" },
    { value: "Apparel", label: "Apparel" },
  ];

  const languageTypes = [
    { value: "SQL", label: "SQL" },
    { value: "DotNet", label: "DotNet" },
  ];

  const [isPublic, setIsPublic] = useState(false); // Initial state for code visibility

  const onFinish = (values) => {
    console.log("Success:", values);
    // Submit the form data to your backend API here
  };

  const onFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
  };

  const handlePublicChange = (e) => {
    setIsPublic(e.target.checked);
  };
  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={16}>
          <Col span={16}>
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: "Please enter a title" }]}
            >
              <Input placeholder="Add  Code Snippet Title" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Language"
              name="language"
              rules={[
                { required: true, message: "Please select a software type" },
              ]}
            >
              <Select options={languageTypes} />
            </Form.Item>
          </Col>

          <Col span={10}>
            <Form.Item label="Description" name="description">
              <Input.TextArea rows={3} placeholder="Write Short Description." />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item
              label="Software Type"
              name="softwareType"
              rules={[
                { required: true, message: "Please select a software type" },
              ]}
            >
              <Select options={softwareTypes} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Code Visibility"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Checkbox checked={isPublic} onChange={handlePublicChange}>
                Public
              </Checkbox>
              <Form.Item name="isPublic" hidden>
                <InputNumber value={isPublic ? 1 : 0} />{" "}
                {/* Hidden field for form submission */}
              </Form.Item>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Code"
              name="code"
              rules={[{ required: true, message: "Please enter code" }]}
            >
              <Input.TextArea rows={10} placeholder="Write Code." />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-primary text-white font-sans font-xl font-semibold hover:bg-white mt-3"
          >
            Create Record
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateDevAssets;
