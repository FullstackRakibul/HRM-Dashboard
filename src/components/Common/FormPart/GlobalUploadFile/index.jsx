import React, { useEffect, useState } from "react";
import { AxiosInstance } from "../../../../apis/supportTicketSlice";
import axios from "axios";
import { Button, Form, Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

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

      console.log(values);

      let fileType = values.Uploadfile?.file?.name;
      console.log("TYpe", fileType);
      if (fileType) {
        fileType = fileType.split(".");
        const len = fileType.length;
        fileType = fileType[len - 1];
        const TenderImageName = `testrtss.${fileType}`;
        console.log(TenderImageName);

        // console.log("Value: ", values.Uploadfile?.file);
        formData.append(
          "UploadedFile",
          values.Uploadfile?.file,
          `${TenderImageName}`
        );
      }

      formData.append("TicketId", "10");
      formData.append("FolderIndex", "1");
      formData.append("FilePathUrl", "ticketFiles");

      //   console.log(`Form Data : ${[...formData.values()]}`);

      const response = await axios.post(
        "https://localhost:7295/api/FileUpload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
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
            //multiple={true}
            beforeUpload={() => false}
            listType="picture-card"
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
