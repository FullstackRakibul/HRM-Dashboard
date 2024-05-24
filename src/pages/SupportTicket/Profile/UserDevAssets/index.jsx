import { React, useState } from "react";
import ComponentHeader from "../../../../components/ui/ComponentHeader";
import { Button, Row, Col } from "antd";
import ContentContainer from "../../../../components/ui/ContentContainer";
import CreateDevAssets from "../../../../components/SupportTicket/Profile/UserDevAssetsComponent/CreateDevAssets";
import ListDevAssets from "../../../../components/SupportTicket/Profile/UserDevAssetsComponent/ListDevAssets";

const UserDevAssets = () => {
  const [updateFlag, setUpdateFlag] = useState(false);

  // Function to trigger updates
  const triggerUpdate = () => {
    setUpdateFlag((prev) => !prev);
  };

  return (
    <>
      <ComponentHeader
        title="Create Code Snippet"
        description="Create record for Quick Query Note"
      >
        <Button size="small" icon={<i className="fas fa-window-restore"></i>}>
          refetch
        </Button>
      </ComponentHeader>
      <ContentContainer>
        <Row gutter={16}>
          <Col span={24}>
            <CreateDevAssets onUpdate={triggerUpdate} />
          </Col>
          <Col span={24}>
            <ListDevAssets updateFlag={updateFlag} />
          </Col>
        </Row>
      </ContentContainer>
    </>
  );
};

export default UserDevAssets;
