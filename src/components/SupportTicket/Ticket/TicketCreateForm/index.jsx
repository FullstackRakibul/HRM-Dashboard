import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Input,
  Button,
  Upload,
  message,
  Col,
  Row,
  Card,
  Form,
  Select,
} from "antd";
import { InboxOutlined, PlusCircleOutlined } from "@ant-design/icons";
import CommonFormItem from "../../../ui/FormItem/Common";
import axios from "axios";
import ConfigureAxios from "../../../../utils/axios";
import TickeTypeDropDown from "../global/TikcetTypeDropDown";
import DepartmentDropDown from "../global/DepartmentDropDown";
import UnitDropDown from "../global/UnitDropDown";

const { TextArea } = Input;
const { Dragger } = Upload;

const TicketCreateForm = () => {
  const [form] = Form.useForm();
  const [selectedTicketTypeId, setSelectedTicketTypeId] = useState(null);
  const [selectedDepartmentId, setselectedDepartmentId] = useState(null);
  const [ticketTypeLists, setTicketTypeLists] = useState([]);
  const [departmentLists, setDepartmentLists] = useState([]);
  const [rowShow, setRowShow] = useState(false);
  const [unitLists, setUnitLists] = useState([]);
  const [selectedUnitId, setselectedUnitId] = useState(null);

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
      .get(`/api/TicketTypes`)
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

  const handleTicketTypeChange = (ticketTypeId) => {
    setSelectedTicketTypeId(ticketTypeId);
  };

  const handleDepartmentSelect = (departmentId) => {
    setselectedDepartmentId(departmentId);
  };

  const handleUnitSelect = (unitId) => {
    setselectedUnitId(unitId);
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      values.ticketTypeId = selectedTicketTypeId;
      values.departmentId = selectedDepartmentId;
      values.unitId = selectedUnitId;
      values.createdBy = EmpCode; // EmpCode from token

      console.log(values);
      message.success(values);

      // const response = await axios.post(
      //   "/api/Tickets/createTicketWithTarget",
      //   values
      // );

      // if (response.status === 200) {
      //   message.success("Ticket Create Successfully.");
      //   form.resetFields();
      // } else {
      //   message.error("Error in Creating Ticket.");
      // }
    } catch (error) {
      message.error("Error in Creating Ticket.");
    }
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const footerLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const props = {
    name: "attachment",
    multiple: true,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
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

  const handleOnFormValueChanges = (changeValue, allValues) => {
    //console.log("ChangeValue : ", changeValue);
    if (changeValue?.TicketType?.value) {
      const value = changeValue.TicketType.value;

      if (value == 1) {
        setRowShow(true);
      } else {
        setRowShow(false);
      }
    }
  };

  return (
    <section className="container mx-auto">
      <Row className="flex justify-center items-center ">
        <Col span={12} className="">
          <Card
            type="inner"
            title="Create Issue Ticket"
            headStyle={{
              backgroundColor: "#002A53",
              color: "#fff",
              fontFamily: "Montserrat",
            }}
          >
            <Form
              //form={form}
              onValuesChange={handleOnFormValueChanges}
              size="small"
              {...layout}
              labelAlign="left"
            >
              <Row>
                <Col span={24}>
                  <CommonFormItem
                    propsLists={{
                      tooltip: {
                        title: "Tender Lists",
                      },
                      rules: {
                        required: false,
                        message: "Tender Lists Is Required.",
                      },
                      name: "TicketType",
                      labelAlign: "right",
                      label: "Ticket Type",
                    }}
                  >
                    <Select
                      labelInValue={true}
                      optionFilterProp="label"
                      showSearch
                      allowClear
                      options={ticketTypeLists}
                    />
                  </CommonFormItem>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <CommonFormItem
                    propsLists={{
                      tooltip: {
                        title: "Tender Lists",
                      },
                      rules: {
                        required: false,
                        message: "Tender Lists Is Required.",
                      },
                      name: "Department",
                      labelAlign: "right",
                      label: "Department",
                    }}
                  >
                    <Select
                      labelInValue={true}
                      optionFilterProp="label"
                      showSearch
                      allowClear
                      options={departmentLists}
                    />
                  </CommonFormItem>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <CommonFormItem
                    propsLists={{
                      tooltip: {
                        title: "Tender Lists",
                      },
                      rules: {
                        required: false,
                        message: "Tender Lists Is Required.",
                      },
                      name: "Unit",
                      labelAlign: "right",
                      label: "Unit",
                    }}
                  >
                    <Select
                      labelInValue={true}
                      optionFilterProp="label"
                      showSearch
                      allowClear
                      options={unitLists}
                    />
                  </CommonFormItem>
                </Col>
              </Row>

              <Form.Item
                name="title"
                label="Issue Title"
                rules={[
                  {
                    required: true,
                    message: "Please input Issue Title!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              {rowShow ? (
                <Form.Item
                  name="title"
                  label="Issue Title"
                  rules={[
                    {
                      required: true,
                      message: "Please input Issue Title!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              ) : (
                ""
              )}
              <Form.Item
                name="description"
                label="Issue Description"
                rules={[
                  {
                    required: true,
                    message: "Please input Issue Description!",
                  },
                ]}
              >
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item name="attachment" label="Upload Files">
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
              <Form.Item {...footerLayout}>
                <Button
                  //onClick={handleSubmit}
                  type="primary"
                  htmlType="submit"
                  className="bg-primary text-white font-sans font-xl font-semibold hover:bg-white"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default TicketCreateForm;

// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// const { TextArea } = Input;
// import { InboxOutlined, PlusCircleOutlined } from "@ant-design/icons";
// import { Col, Row, Card, Form, Input, Button, Upload, message } from "antd";
// import axios from "axios";
// import TickeTypeDropDown from "../global/TikcetTypeDropDown";
// import DepartmentDropDown from "../global/DepartmentDropDown";
// import UnitDropDown from "../global/UnitDropDown";

// const { Dragger } = Upload;

// const props = {
//   name: "attachment",
//   multiple: true,
//   action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
//   onChange(info) {
//     const { status } = info.file;
//     if (status !== "uploading") {
//       console.log(info.file, info.fileList);
//     }
//     if (status === "done") {
//       message.success(`${info.file.name} attachment uploaded successfully.`);
//     } else if (status === "error") {
//       message.error(`${info.file.name} attachment upload failed.`);
//     }
//   },
//   onDrop(e) {
//     console.log("Dropped files", e.dataTransfer.files);
//   },
// };

// const TicketCreateForm = () => {
//   const [form] = Form.useForm();
//   const [selectedTicketTypeId, setSelectedTicketTypeId] = useState(null);
//   const [selectedDepartmentId, setselectedDepartmentId] = useState(null);
//   const [selectedUnitId, setselectedUnitId] = useState(null);

//   const handleTicketTypeChange = (ticketTypeId) => {
//     setSelectedTicketTypeId(ticketTypeId);
//   };

//   const handleDepartmentSelect = (departmentId) => {
//     setselectedDepartmentId(departmentId);
//   };

//   const handleUnitSelect = (unitId) => {
//     setselectedUnitId(unitId);
//   };

//   const handleSubmit = async () => {
//     try {
//       const values = await form.validateFields();
//       values.ticketTypeId = selectedTicketTypeId;
//       values.departmentId = selectedDepartmentId;
//       values.unitId = selectedUnitId;
//       values.createdBy = EmpCode;

//       console.log(values);
//       const response = await axios.post(
//         "/api/Tickets/createTicketWithTarget",
//         values
//       );

//       console.log(response.data);
//       console.log(`status code :${response.status}`);
//       if (response.status === 200) {
//         message.success("Ticket Create Successfully.");
//         form.resetFields();
//       } else {
//         message.error("Error in Creating Ticket.");
//       }
//     } catch (error) {
//       console.log(`catching formData error : ${error}`);
//       message.error("catch Error in Creating Ticket.");
//     }
//   };
//   // form design
//   const layout = {
//     labelCol: {
//       span: 8,
//     },
//     wrapperCol: {
//       span: 16,
//     },
//   };
//   const footerLayout = {
//     wrapperCol: {
//       offset: 8,
//       span: 16,
//     },
//   };
//   const uploadButtonProps = {
//     action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
//   };

//   return (
//     <>
//       <section className="conatainer mx-auto">
//         <h3 className="font-bengali font-normal text-xl">
//           নতুন টিকেট তৈরী করুন :
//         </h3>
//         <Row className="flex justify-center items-center ">
//           <Col span={12} className="">
//             <Card
//               type="inner"
//               title="Create Issue Ticket"
//               headStyle={{
//                 backgroundColor: "#002A53",
//                 color: "#fff",
//                 fontFamily: "Montserrat",
//               }}
//             >
//               <Form form={form} {...layout} labelAlign="left">
//                 <Form.Item
//                   className="font-sans gap-5 "
//                   label="Select Ticket Type"
//                   name="ticketTypeId"
//                 >
//                   <TickeTypeDropDown
//                     onTicketTypeChange={handleTicketTypeChange}
//                   />

//                   <NavLink to="/createTicketType">
//                     <Button
//                       type="primary"
//                       className="font-sans font-semibold bg-primary"
//                       icon={<PlusCircleOutlined />}
//                     ></Button>
//                   </NavLink>
//                 </Form.Item>
//                 <Form.Item
//                   className="font-sans gap-5 "
//                   label="Select Department"
//                   name="departmentId"
//                 >
//                   <DepartmentDropDown
//                     onDepartmentSelect={handleDepartmentSelect}
//                   />
//                 </Form.Item>
//                 <Form.Item
//                   className="font-sans gap-5 "
//                   label="Select Unit"
//                   name="unitId"
//                 >
//                   <UnitDropDown onUnitSelect={handleUnitSelect} />
//                 </Form.Item>

//                 <Form.Item
//                   className="font-sans"
//                   name="title"
//                   label="Issue Title"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Please input Issue Title!",
//                     },
//                   ]}
//                 >
//                   <Input />
//                 </Form.Item>
//                 <Form.Item
//                   name="description"
//                   label="Issue Description"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Please input Issue Description!",
//                     },
//                   ]}
//                 >
//                   <TextArea rows={4} />
//                 </Form.Item>
//                 <Form.Item
//                   className="font-sans"
//                   name="attachment"
//                   label="Upload Files"
//                 >
//                   <Dragger {...props}>
//                     <p className="ant-upload-drag-icon">
//                       <InboxOutlined />
//                     </p>
//                     <p className="ant-upload-text">
//                       Click or drag file to this area to upload
//                     </p>
//                     <p className="ant-upload-hint">
//                       Support for a single or bulk upload. Strictly prohibited
//                       from uploading company data or other banned files.
//                     </p>
//                   </Dragger>
//                 </Form.Item>
//                 <Form.Item {...footerLayout}>
//                   <Button
//                     onClick={handleSubmit}
//                     type="primary"
//                     className="bg-primary text-white font-sans font-xl font-semibold hover:bg-white"
//                   >
//                     Submit
//                   </Button>
//                 </Form.Item>
//               </Form>
//             </Card>
//           </Col>
//         </Row>
//       </section>
//     </>
//   );
// };

// export default TicketCreateForm;
