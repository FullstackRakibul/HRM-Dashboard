import React, { useEffect, useState } from "react";
import { AxiosInstance } from "../../../../apis/supportTicketSlice";
import { Button, Form, Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const GlobalUploadFile = () => {
  const [fileUpload, setFileUpload] = useState([]);
  const [form] = Form.useForm();

  const handleFileUpload = async (values) => {
    try {
      const formData = new FormData();
      formData.append("fileUpload", values.fileUpload);

      const response = await AxiosInstance.post("/api/FileUpload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response);
      message.success("File Upload Success!");
      //form.resetFields();
    } catch (error) {
      message.error("File Upload Failed!");
      console.error(error);
    }
  };
  return (
    <>
      {/* <Form onFinish={handleFileUpload} form={form}>
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
      </Form> */}

      <Form onFinish={handleFileUpload} form={form}>
        <Form.Item label="Upload" name="filePathUrl">
          <Upload
            beforeUpload={() => false}
            listType="picture-card"
            onChange={(info) => {
              setFileUpload(info.fileList);
            }}
            onRemove={() => {
              setFileUpload([]);
            }}
          >
            <button style={{ border: 0, background: "none" }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button htmlType="submit">Upload</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default GlobalUploadFile;
