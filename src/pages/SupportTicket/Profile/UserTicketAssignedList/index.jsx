import React from "react";
import { Button, Table } from "antd";
import AssignedTicketListTable from "../../../../components/SupportTicket/Ticket/AssignedTicketListTable";
import ComponentHeader from "../../../../components/ui/ComponentHeader";
import ContentContainer from "../../../../components/ui/ContentContainer";

const MyTicketList = () => {
  return (
    <>
      <ComponentHeader
        title="My Ticket List"
        description="list of all created issues"
      >
        <Button size="small" icon={<i className="fas fa-window-restore"></i>}>
          Analytics
        </Button>
      </ComponentHeader>
      <ContentContainer>
        <AssignedTicketListTable />
      </ContentContainer>
    </>
  );
};

export default MyTicketList;
