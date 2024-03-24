import React from "react";
import { Button, Table } from "antd";
import UserTicketList from "../../../components/SupportTicket/Ticket/TicketList/UserTicketList";
import ComponentHeader from "../../../components/ui/ComponentHeader";
import ContentContainer from "../../../components/ui/ContentContainer";

const MyTicketList = () => {
  return (
    <>
      <ComponentHeader
        title="My Ticket List"
        description="list of all created issue or assign to me .."
      >
        <Button size="small" icon={<i className="fas fa-window-restore"></i>}>
          Analytics
        </Button>
      </ComponentHeader>
      <ContentContainer>
        <UserTicketList />
      </ContentContainer>
    </>
  );
};

export default MyTicketList;
