import React, { useEffect, useState } from "react";
import { AxiosInstance } from "../../../../apis/supportTicketSlice";
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
      console.log(
        `uploaded data : ${values.Uploadfile.fileList[0].originFileObj}`
      );
      console.log(values.Uploadfile.file, values.Uploadfile.fileList);
      const formData = new FormData();

      // hardCoderData
      formData.append(
        "UploadedFile",
        values.Uploadfile.fileList[0].originFileObj
      );
      formData.append("TicketId", "10");
      formData.append("FolderIndex", "1");
      formData.append("FilePathUrl", "GloballlyUploadedFile");

      console.log(`Form Data : ${formData}`);

      // const response = await AxiosInstance.post("/api/FileUpload", formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
      // console.log(response);

      message.success("File Upload Success!");
      //form.resetFields();
    } catch (error) {
      message.error("File Upload Failed!");
      console.error(error);
    }
  };
  return (
    <>
      <Form
        onFinish={handleFileUpload}
        form={form}
        enctype="multipart/form-data"
      >
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
