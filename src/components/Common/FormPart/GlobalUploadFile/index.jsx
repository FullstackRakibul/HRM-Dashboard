import React, { useState } from "react";
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";

const GlobalUploadFile = () => {
  const [fileUpload, setFileUpload] = useState([]);
  const [form] = Form.useForm();

  const handleFileUpload = async (values) => {
    setFileUpload(values);
    console.log("Success:", values);
    message.success("File Upload Success...");
    form.resetFields();
  };
  return (
    <>
      <Form onFinish={handleFileUpload} form={form}>
        <Form.Item label="Upload" name="fileUpload">
          <Upload listType="picture-card" beforeUpload={() => false}>
            <button
              style={{
                border: 0,
                background: "none",
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button htmlType="submit">Button</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default GlobalUploadFile;
