import React, { useEffect, useState } from "react";
import {
  AxiosInstance,
  AxiosInstanceMultipart,
} from "../../../../apis/supportTicketSlice";
import axios from "axios";
import { Button, Form, Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import dotMenuImage from "../../../../assets/images/appLauncherMenuBlack.svg";
import { fill } from "lodash";

const GlobalUploadFile = () => {
  const [fileUpload, setFileUpload] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const [form] = Form.useForm();

  const handleFileUpload = async (values) => {
    try {
      console.log("Uploaded file:", values.Uploadfile);
      const formData = new FormData();

      formData.append("UploadedFile", values.Uploadfile?.file);
      formData.append("TicketId", "6");
      formData.append("FolderIndex", "1");
      formData.append("FilePathUrl", "ticketFiles");

      console.log(formData);
      const response = await AxiosInstanceMultipart.post(
        "api/FileUpload",
        formData
      );

      console.log(response);

      message.success("File Upload Success!");
      form.resetFields();
    } catch (error) {
      message.error("File Upload Failed!");
      console.error(error);
    }
  };

  return (
    <>
      <Form onFinish={handleFileUpload} form={form}>
        <Form.Item label="Upload" name="Uploadfile">
          <Upload
            multiple={true}
            beforeUpload={() => false}
            listType="picture-card"
          >
            <button style={{ border: 0, background: "none" }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default GlobalUploadFile;
