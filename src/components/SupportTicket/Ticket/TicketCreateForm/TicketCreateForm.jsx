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
import axios from "axios";
import ConfigureAxios from "../../../../utils/axios";

// file upload section design
const props = {
  name: "attachment",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  //action: "/api/Tickets/createTicketWithTarget",
  async onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);

      //.........................
      // if (info.file.status === "done") {
      //   const texts = await info.file.originFileObj.text();
      //   const results = parse(texts, {
      //     header: true
      //   });

      //   const col = _.keys(results.data[0]);

      //   const customCol = _.map(col, (value) => ({
      //     title: value,
      //     dataIndex: value,
      //     key: value.toLowerCase(),
      //   }));

      //   const data = results.data;

      //   console.log({ customCol });
      //   console.log({ data });
      //.........................
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
  const [form] = Form.useForm();
  const [selectedUnitId, setselectedUnitId] = useState(null);
  const [selectedTicketTypeId, setSelectedTicketTypeId] = useState(null);
  const [unitLists, setUnitLists] = useState([]);
  const [departmentLists, setDepartmentLists] = useState([]);
  const [ticketTypeLists, setTicketTypeLists] = useState([]);

  const onFinish = async (values) => {
    const data = {
      title: values.ticketTitle,
      unitId: values.unit.value,
      ticketTypeId: values.ticketType.value,
      departmentId: values.department.value,
      createdBy: "088101",
      description: values.description,
      //attachment: values.attachment.file.name,
    };

    console.log("Received values:", data);
    const response = await axios.post(
      "/api/Tickets/createTicketWithTarget",
      data
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
      .get(`/api/TicketTypes/ticket/type/list`)
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
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
              {/* valuePropName="fileList" */}
              <Form.Item name="attachment" noStyle>
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
