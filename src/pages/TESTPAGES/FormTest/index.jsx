import React from "react";
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
        <div>test ............</div>
      </ContentContainer>
    </>
  );
};

export default FormTest;
