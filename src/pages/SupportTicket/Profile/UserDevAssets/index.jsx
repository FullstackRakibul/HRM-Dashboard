import React from "react";
import ComponentHeader from "../../../../components/ui/ComponentHeader";
import { Button } from "antd";
import ContentContainer from "../../../../components/ui/ContentContainer";
import CreateDevAssets from "../../../../components/SupportTicket/Profile/UserDevAssetsComponent/CreateDevAssets";

const UserDevAssets = () => {
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
        <CreateDevAssets />
      </ContentContainer>
    </>
  );
};

export default UserDevAssets;
