import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./index.less";

const { TextArea } = Input;
import {
  InboxOutlined,
  PlusCircleOutlined,
  PlusOutlined,
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
import axios from "axios";
import ConfigureAxios from "../../../../utils/axios";
import { AxiosInstanceMultipart } from "../../../../apis/supportTicketSlice";

// file upload section design
const props = {
  name: "attachment",
};

const TicketCreateForm = () => {
  const [form] = Form.useForm();
  const [selectedUnitId, setselectedUnitId] = useState(null);
  const [selectedTicketTypeId, setSelectedTicketTypeId] = useState(null);
  const [unitLists, setUnitLists] = useState([]);
  const [departmentLists, setDepartmentLists] = useState([]);
  const [ticketTypeLists, setTicketTypeLists] = useState([]);

  const [textValue, setTextValue] = useState("");

  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append("title", values.ticketTitle);
    formData.append("unitId", values.unit.value);
    formData.append("ticketTypeId", values.ticketType.value);
    formData.append("departmentId", values.department.value);
    formData.append("createdBy", "088101");
    formData.append("description", textValue);
    formData.append("attachment", values.attachment?.file);

    console.log("Received values:", formData);
    const response = await AxiosInstanceMultipart.post(
      "/api/Tickets/raised-issue",
      formData
    );
    console.log(response.data);
    console.log(`status code :${response.status}`);
    if (response.status === 200) {
      message.success("Ticket Create Successfully.");
      form.resetFields();
    } else {
      message.error("Error in Creating Ticket.");
    }
  };

  useEffect(() => {
    ConfigureAxios();
    initialLoading();
  }, []);

  const initialLoading = async () => {
    const typeLists = await getTicketTypeLists();
    const departmentLists = await getDepartmentLists();
    const unitLists = await getUnitLists();

    if (typeLists.length) {
      const configLists = configDataForSelect(typeLists, "id", "typeName");

      if (configLists.length) {
        setTicketTypeLists(configLists);
      } else {
        setTicketTypeLists([]);
      }
    }
    if (departmentLists.length) {
      const configLists = configDataForSelect(
        departmentLists,
        "id",
        "departmentName"
      );
      if (configLists.length) {
        setDepartmentLists(configLists);
      } else {
        setDepartmentLists([]);
      }
    }
    if (unitLists.length) {
      const configLists = configDataForSelect(unitLists, "id", "name");
      if (configLists.length) {
        setUnitLists(configLists);
      } else {
        setUnitLists([]);
      }
    }
  };
  const getTicketTypeLists = async () => {
    const lists = await axios
      .get(`/api/TicketTypes/get-all-ticket-type`)
      .then((response) => {
        if (response.status === 200) {
          const data = response.data.data;
          return data;
        }
      })
      .catch((error) => {
        console.log("Get Ticket Type Lists Error.");
        return [];
      });
    return lists;
  };
  const getDepartmentLists = async () => {
    const lists = await axios
      .get(`/api/Departments`)
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          return data;
        }
      })
      .catch((error) => {
        console.log("Get Department Lists Error.");
        return [];
      });
    return lists;
  };
  const getUnitLists = async () => {
    const lists = await axios
      .get(`/api/Units`)
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          return data;
        }
      })
      .catch((error) => {
        console.log("Get Unit Lists Error.");
        return [];
      });
    return lists;
  };

  const configDataForSelect = (lists, key, label) => {
    const newLists = [...lists];
    let returnLists = [];

    if (newLists.length) {
      newLists.map((dta) => {
        const newObject = {
          key: dta[key],
          value: dta[key],
          label: dta[label],
        };
        returnLists = [...returnLists, newObject];
      });
    }

    return returnLists;
  };

  return (
    <>
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <Row gutter={16}>
          <Col span={18}>
            <Form.Item
              label="Ticket Title"
              name="ticketTitle"
              rules={[{ required: true, message: "Please enter ticket title" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={6}>
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
          <Col span={6}>
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
          <Col span={6}>
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
          <Col span={18}>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "Please enter description" }]}
            >
              <ReactQuill
                theme="snow"
                value={textValue}
                onChange={setTextValue}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Attachment" name="attachment">
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
