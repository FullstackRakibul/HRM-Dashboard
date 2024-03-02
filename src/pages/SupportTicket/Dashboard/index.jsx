import React from "react";
import { Button } from "antd";
import ComponentHeader from "../../../components/ui/ComponentHeader";
import ContentContainer from "../../../components/ui/ContentContainer";
import TenderListMain from "../../../components/ETender/Tender/TenderLists";

const index = () => {
  return (
    <>
      <ComponentHeader
        title={"Ticket dashboard"}
        description={"Here is ticket lists."}
      >
        <Button size="small" icon={<i className="fas fa-window-restore"></i>}>
          Reset
        </Button>
      </ComponentHeader>
      <ContentContainer>Test ...........</ContentContainer>
    </>
  );
};

export default index;
