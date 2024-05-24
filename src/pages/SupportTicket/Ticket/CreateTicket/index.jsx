import React from "react";
import TicketCreateForm from "../../../../components/SupportTicket/Ticket/TicketCreateForm/TicketCreateForm.jsx";
import ComponentHeader from "../../../../components/ui/ComponentHeader/index.jsx";
import { Button } from "antd";
import ContentContainer from "../../../../components/ui/ContentContainer/index.jsx";
import { NavLink } from "react-router-dom";

const CreateTicket = () => {
  return (
    <>
      <ComponentHeader
        title="Create Support Ticket"
        description="Try to include enough details when creating a ticket for an individual issue."
      >
        <NavLink></NavLink>
        <Button size="small" icon={<i className="fas fa-window-restore"></i>}>
          view
        </Button>
      </ComponentHeader>
      <ContentContainer>
        <div className="justify-center items-center p-5 ">
          <TicketCreateForm />
        </div>
      </ContentContainer>
    </>
  );
};

export default CreateTicket;

<ComponentHeader title="Ticket List" description="Manage all tickets here">
  <Button size="small" icon={<i className="fas fa-window-restore"></i>}>
    create
  </Button>
</ComponentHeader>;
