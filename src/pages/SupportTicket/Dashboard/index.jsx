import React from "react";
import { Button } from "antd";
import ComponentHeader from "../../../components/ui/ComponentHeader";
import ContentContainer from "../../../components/ui/ContentContainer";
import Statistics from "../../../components/SupportTicket/Global/Statistics";

const SupportTicketDashboard = () => {
  return (
    <>
      <ComponentHeader
        title={"Ticket dashboard"}
        description={
          "track performance, identify trends, and drive business growth."
        }
      >
        <Button size="small" icon={<i className="fas fa-window-restore"></i>}>
          Reset
        </Button>
      </ComponentHeader>
      <ContentContainer>
        <Statistics title="Statistics" />
      </ContentContainer>
    </>
  );
};

export default SupportTicketDashboard;
