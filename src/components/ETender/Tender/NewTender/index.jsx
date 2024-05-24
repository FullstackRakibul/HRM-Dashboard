import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Select,
  Button,
  Card,
  InputNumber,
  Upload,
  AutoComplete,
} from "antd";
import { useNavigate, useLocation } from "react-router";
import { useSelector } from "react-redux";
import {
  UploadOutlined,
  CloseCircleOutlined,
  CloudUploadOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import CommonFormItem from "../../../ui/FormItem/Common";
import NormalCard from "../../../ui/Card/NormalCard";
import "./index.less";

const { Dragger } = Upload;

const NewTenderMain = ({ props }) => {
  const { gradeLists } = useSelector((state) => state.tender);

  // useEffect(()=>{

  // },[])
  const handleFocus = (event) => event.target.select();
  return (
    <>
      <Col span={24} className="new-tender-form">
        <NormalCard
          styles={{
            marginBottom: "8px",
          }}
        >
          <Form
            size="small"
            form={props.form}
            onFinish={props.onFormSubmit}
            onValuesChange={props.onValueChanges}
          >
            <Row>
              <Col span={12}>
                <Row>
                  <Col span={24}>
                    <CommonFormItem
                      propsLists={{
                        tooltip: {
                          title: "Tender No",
                        },
                        rules: {
                          required: true,
                          message: "Tender No Is Required.",
                        },
                        name: "TenderNo",
                        labelAlign: "right",
                        label: "Tender No",
                      }}
                    >
                      <Input readOnly className="read-only-input" />
                    </CommonFormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <CommonFormItem
                      propsLists={{
                        tooltip: {
                          title: "Tender Title",
                        },
                        rules: {
                          required: true,
                          message: "Tender Title Is Required.",
                        },
                        name: "TenderTitle",
                        labelAlign: "right",
                        label: "Tender Title",
                      }}
                    >
                      <Input />
                    </CommonFormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <CommonFormItem
                      propsLists={{
                        tooltip: {
                          title: "Tender Total",
                        },
                        rules: {
                          required: true,
                          message: "Tender Total Is Required.",
                        },
                        name: "TenderTotal",
                        labelAlign: "right",
                        label: "Tender Total Amount",
                      }}
                    >
                      <Input className="read-only-input" readOnly />
                    </CommonFormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <CommonFormItem
                      propsLists={{
                        tooltip: {
                          title: "Minimum Bid Amount",
                        },
                        rules: {
                          required: true,
                          message: "Minimum Bid Is Required.",
                        },
                        name: "MinimumBidAmount",
                        labelAlign: "right",
                        label: "Minimum Bid Amount",
                      }}
                    >
                      <Input className="read-only-input" readOnly />
                    </CommonFormItem>
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row>
                  <Col span={24}>
                    <CommonFormItem
                      propsLists={{
                        tooltip: {
                          title: "Tender Description",
                        },
                        rules: {
                          required: true,
                          message: "Tender Description Is Required.",
                        },
                        name: "TenderDescription",
                        labelAlign: "right",
                        label: "Tender Description",
                      }}
                    >
                      <Input.TextArea rows={2} />
                    </CommonFormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <CommonFormItem
                      propsLists={{
                        tooltip: {
                          title: "Tender Attachment",
                        },
                        rules: {
                          required: props.IsUpdate ? false : true,
                          message: "Tender Attachment Is Required.",
                        },
                        name: "TenderAttachment",
                        labelAlign: "right",
                        label: "Tender Attachment",
                      }}
                    >
                      {/* <Upload
                                        //action={'//jsonplaceholder.typicode.com/todos/1'}
                                        beforeUpload={()=>{
                                            return false
                                        }}
                                        >
                                        
                                            <CloudUploadOutlined ></CloudUploadOutlined>
                                        </Upload> */}
                      <Dragger
                        accept=".jpg, .jpeg, .png,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/pdf"
                        beforeUpload={() => {
                          return false;
                        }}
                        defaultFileList={props.defaultAttach}
                        multiple={false}
                        //"
                        disabled={props.isFiles}
                      >
                        <p className="ant-upload-drag-icon">
                          <UploadOutlined />
                        </p>
                        <p className="ant-upload-text">
                          Click or drag file to this area to upload
                        </p>
                      </Dragger>
                    </CommonFormItem>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </NormalCard>
        <NormalCard>
          <a
            style={{
              textDecoration: "underline",
              color: "blue",
              textDecorationColor: "blue !important",
            }}
            onClick={() => {
              if (!props.IsGoing) {
                props.handleAddNewTenderItem();
              }
            }}
            disabled={props.IsGoing ? props.IsGoing : false}
          >
            Add Another Item
          </a>
          <Row className="new-tender-lists-header">
            <Col span={5}>
              <b>Item </b>
            </Col>
            <Col span={4}>
              <b>Remakrs </b>
            </Col>
            <Col span={2}>
              <b>Grade</b>
            </Col>
            <Col span={2}>
              <b>Unit</b>
            </Col>
            <Col span={2}>
              <b>Last Rate</b>
            </Col>
            <Col span={2}>
              <b>Top Rate</b>
            </Col>

            <Col span={2}>
              <b>Qty (B)</b>
            </Col>
            <Col span={3}>
              <b>Value(C=A X B)</b>
            </Col>
            <Col span={2}>
              <b>Action</b>
            </Col>
          </Row>
          {props.children.length
            ? props.children.map((dta, index) => {
                return (
                  <Row className="new-tender-lists-content" key={index}>
                    <Col span={5}>
                      <AutoComplete
                        disabled={props.IsGoing ? props.IsGoing : false}
                        open={props.IsGoing ? props.IsGoing : false}
                        //readOnly
                        style={{
                          width: "100%",
                        }}
                        size="small"
                        onFocus={handleFocus}
                        onChange={(e) => {
                          //console.log("EE: ",e)
                          props.onChildrenInputChange(
                            e,
                            "auto_complete",
                            "ItemName",
                            index
                          );
                        }}
                        onSelect={(value, option) => {
                          props.handleOnSelectItems(value, option, index);
                        }}
                        value={dta.ItemName}
                        options={props.itemLists}
                        placeholder=""
                        status={`${dta.ItemNameError ? "error" : ""}`}
                        filterOption={(inputValue, option) =>
                          option.value
                            .toUpperCase()
                            .indexOf(inputValue.toUpperCase()) !== -1
                        }
                      />
                    </Col>
                    <Col span={4}>
                      <Input
                        size="small"
                        readOnly={props.IsGoing ? props.IsGoing : false}
                        className={`${props.IsGoing ? "read-only-input" : ""}`}
                        onChange={(e) => {
                          props.onChildrenInputChange(
                            e,
                            "text",
                            "ItemRemarks",
                            index
                          );
                        }}
                        status={`${dta.ItemRemarksError ? "error" : ""}`}
                        onFocus={handleFocus}
                        value={dta.ItemRemarks}
                      />
                    </Col>
                    <Col span={2}>
                      <Select
                        size="sm"
                        labelInValue={true}
                        optionFilterProp="label"
                        showSearch
                        allowClear
                        options={gradeLists}
                        style={{
                          width: "100%",
                        }}
                        status={`${dta.ItemGradeError ? "error" : ""}`}
                        onChange={(e) => {
                          props.onChildrenInputChange(
                            e,
                            "select",
                            "ItemGrade",
                            index
                          );
                        }}
                        value={dta.ItemGrade}
                        disabled={props.IsGoing ? props.IsGoing : false}
                      />
                    </Col>
                    <Col span={2}>
                      <Input
                        size="small"
                        onChange={(e) => {
                          props.onChildrenInputChange(
                            e,
                            "text",
                            "UnitOfMeasurement",
                            index
                          );
                        }}
                        status={`${dta.UnitOfMeasurementError ? "error" : ""}`}
                        onFocus={handleFocus}
                        value={dta.UnitOfMeasurement}
                        readOnly={props.IsGoing ? props.IsGoing : false}
                        className={`${props.IsGoing ? "read-only-input" : ""}`}
                      />
                    </Col>
                    <Col span={2}>
                      <InputNumber
                        size="small"
                        style={{
                          width: "100%",
                        }}
                        onChange={(e) => {
                          props.onChildrenInputChange(
                            e,
                            "number",
                            "BasePrice",
                            index
                          );
                        }}
                        //status={`${dta.BasePriceError?'error':''}`}
                        onFocus={handleFocus}
                        value={dta.BasePrice}
                        readOnly
                        className="read-only-input"
                      />
                    </Col>
                    <Col span={2}>
                      <InputNumber
                        size="small"
                        style={{
                          width: "100%",
                        }}
                        onChange={(e) => {
                          props.onChildrenInputChange(
                            e,
                            "number",
                            "TargetPrice",
                            index
                          );
                        }}
                        status={`${dta?.TargetPriceError ? "error" : ""}`}
                        onFocus={handleFocus}
                        value={dta.TargetPrice}
                      />
                    </Col>
                    <Col span={2}>
                      <InputNumber
                        size="small"
                        style={{
                          width: "100%",
                        }}
                        onChange={(e) => {
                          props.onChildrenInputChange(
                            e,
                            "number",
                            "ItemQuantity",
                            index
                          );
                        }}
                        status={`${dta.ItemQuantityError ? "error" : ""}`}
                        onFocus={handleFocus}
                        value={dta.ItemQuantity}
                        readOnly={props.IsGoing ? props.IsGoing : false}
                        className={`${props.IsGoing ? "read-only-input" : ""}`}
                      />
                    </Col>
                    <Col span={3}>
                      <InputNumber
                        size="small"
                        style={{
                          width: "100%",
                        }}
                        // onChange={(e)=>{
                        //     props.onChildrenInputChange(e,index)
                        // }}
                        status={`${dta.ItemTotalError ? "error" : ""}`}
                        value={dta.ItemTotal}
                        readOnly
                        className="read-only-input"
                      />
                    </Col>
                    <Col span={2}>
                      <CloseCircleOutlined
                        className="close-action-button"
                        onClick={() => {
                          if (!props.IsGoing) {
                            props.handleRemoveTenderItem(index);
                          }
                        }}
                        //readOnly
                        //disabled={true}
                        //disabled={props.IsGoing?props.IsGoing:false}
                      />
                    </Col>
                  </Row>
                );
              })
            : ""}

          <Row className="new-tender-lists-content">
            <Col
              span={17}
              style={{
                textAlign: "right",
              }}
            >
              {/* <b>Total Quantity & Value</b> */}
            </Col>
            <Col
              span={2}
              style={{
                textAlign: "right",
                paddingRight: "10px",
              }}
            >
              {/* <Input
                            size='small'
                            /> */}
              <b>{props.totalQuantity ? props.totalQuantity : 0}</b>
            </Col>
            <Col
              span={3}
              style={{
                textAlign: "right",
                paddingRight: "10px",
              }}
            >
              <b>{props.totalAmount ? props.totalAmount : 0}</b>
            </Col>
          </Row>
        </NormalCard>
      </Col>
    </>
  );
};
export default NewTenderMain;
