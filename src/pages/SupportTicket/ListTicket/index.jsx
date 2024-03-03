import React from "react";
import ComponentHeader from "../../../components/ui/ComponentHeader";
import { Button } from "antd";
import AllTicketList from "../../../components/SupportTicket/Ticket/TicketList";
import ContentContainer from "../../../components/ui/ContentContainer";

const ListTicket = () => {
  return (
    <>
      <ComponentHeader
        title="Ticket List"
        description="Manage all tickets here"
      >
        <Button size="small" icon={<i className="fas fa-window-restore"></i>}>
          create
        </Button>
      </ComponentHeader>
      <ContentContainer>
        <AllTicketList />
      </ContentContainer>
    </>
  );
};

export default ListTicket;
