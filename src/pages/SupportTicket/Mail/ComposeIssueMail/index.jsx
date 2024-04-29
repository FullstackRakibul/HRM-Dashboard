import React from "react";
import { Button } from "antd";
import ComponentHeader from "../../../../components/ui/ComponentHeader";
import ContentContainer from "../../../../components/ui/ContentContainer";

const ComposeIssueMail = () => {
  return (
    <>
      <ComponentHeader
        title={"Compose mail"}
        description={"Send a mail to create an issue"}
      >
        <Button icon={<i class="fas fa-sync"></i>}>refresh</Button>
      </ComponentHeader>
      <ContentContainer>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ab
          officiis perspiciatis, ipsa ratione delectus.
        </p>
      </ContentContainer>
    </>
  );
};

export default ComposeIssueMail;
