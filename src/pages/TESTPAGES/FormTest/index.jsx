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
} from "antd";
import ComponentHeader from "../../../components/ui/ComponentHeader";
import ContentContainer from "../../../components/ui/ContentContainer";
import GlobalUploadFile from "../../../components/Common/FormPart/GlobalUploadFile";

const FormTest = () => {
  return (
    <>
      <ComponentHeader
        title="This Page is For Form Test"
        description="Form upload test "
      >
        <Button size="small" icon={<i className="fas fa-window-restore"></i>}>
          Reset Form
        </Button>
      </ComponentHeader>
      <ContentContainer>
        <GlobalUploadFile />
      </ContentContainer>
    </>
  );
};

export default FormTest;
