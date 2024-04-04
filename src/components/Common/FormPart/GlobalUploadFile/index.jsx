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
    if (values != null) {
      setFileUpload(values);
      console.log("Success:", values);
      message.success("File Upload Success...");
      form.resetFields();
    } else {
      message.warning("Select The File First");
    }
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




{
    "file": {
        "uid": "rc-upload-1712213833559-49"
    },
    "fileList": [
        {
            "uid": "rc-upload-1712213833559-49",
            "lastModified": 1712198796197,
            "lastModifiedDate": "2024-04-04T02:46:36.197Z",
            "name": "CrystalReportViewer (16).pdf",
            "size": 124907,
            "type": "application/pdf",
            "percent": 0,
            "originFileObj": {
                "uid": "rc-upload-1712213833559-49"
            },
            "thumbUrl": ""
        }
    ]
}
