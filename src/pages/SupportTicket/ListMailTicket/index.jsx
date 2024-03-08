import React from "react";
import { Button } from "antd";

import ComponentHeader from "../../../components/ui/ComponentHeader";
import ContentContainer from "../../../components/ui/ContentContainer";
import MailTicketList from "../../../components/SupportTicket/Ticket/MailTicketList";

const ListMailTicket = () => {
  return (
    <>
      <ComponentHeader
        title="Mail Ticket List"
        description="Manage all mail tickets here"
      >
        <Button size="small" icon={<i className="fas fa-window-restore"></i>}>
          <a href="mailto:?subject=Subject&body=Body">Create new mail</a>
        </Button>
      </ComponentHeader>
      <ContentContainer>
        <MailTicketList />
      </ContentContainer>
    </>
  );
};

export default ListMailTicket;
