import React from "react";
import ComponentHeader from "../../../../components/ui/ComponentHeader";
import { Button } from "antd";
import AllTicketList from "../../../../components/SupportTicket/Ticket/TicketList";
import ContentContainer from "../../../../components/ui/ContentContainer";

const SupportMonitoring = () => {
  return (
    <>
      <>
        <ComponentHeader
          title="Support Monitoring"
          description="Monitoring the service quality and assurance"
        >
          <Button size="small" icon={<i className="fas fa-window-restore"></i>}>
            Make An Announcement
          </Button>
        </ComponentHeader>
        <ContentContainer>
          <h3>this is a test </h3>
        </ContentContainer>
      </>
    </>
  );
};

export default SupportMonitoring;
