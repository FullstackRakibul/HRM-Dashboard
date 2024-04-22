import React, { useEffect, useState } from "react";
import { AxiosInstance } from "../../../../apis/supportTicketSlice";
import { Button, Form, Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const GlobalUploadFile = () => {
  const [fileUpload, setFileUpload] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

  
  const [form] = Form.useForm();


   const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };


  const handleFileUpload = async (values) => {
    try {

      const formData = new FormData();
      formData.append("UploadedFile", values.Uploadfile.file);

    //   fileList.forEach((file) => {
    //   formData.append("UploadedFile", values.Uploadfile.file.originFileObj);
    // });

      // hardCoderData
      formData.append("TicketId","10");
      formData.append("FolderIndex","1");
      formData.append("FilePathUrl","GloballlyUploadedFile");


      console.log(formData);

      // const UploadedData = {
      //   UploadedFile:values.file.originFileObj,
      //   TicketId:10,
      //   FolderIndex:1,
      //   FilePathUrl:"GloballlyUploadedFile"
      // }
      // console,log(UploadedData);

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
      <Form onFinish={handleFileUpload} form={form}>
        <Form.Item label="Upload" name="Uploadfile">
          <Upload
            //multiple={true}
            beforeUpload={() => false}
            listType="picture-card"
            onChange={(info) => {
              setFileUpload(info.fileList);
            }}
            onRemove={() => {
              setFileUpload([]);
            }}
            onPreview={handlePreview}
          >
            <button style={{ border: 0, background: "none" }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
           {previewImage && (
          <Image
            wrapperStyle={{
              display: 'none',
            }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewImage(''),
            }}
            src={previewImage}
          />
        )}
          
        </Form.Item>
        <Form.Item label="Button">
          <Button htmlType="submit">Upload</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default GlobalUploadFile;
