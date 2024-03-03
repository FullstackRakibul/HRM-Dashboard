import React from "react";
import TicketCreateForm from "../../../components/SupportTicket/Ticket/TicketCreateForm.jsx";
import ComponentHeader from "../../../components/ui/ComponentHeader/index.jsx";
import { Button } from "antd";
import ContentContainer from "../../../components/ui/ContentContainer/index.jsx";

const CreateTicket = () => {
  return (
    <>
      <ComponentHeader
        title="Create Ticket"
        description="raise any issue from here"
      >
        <Button size="small" icon={<i className="fas fa-window-restore"></i>}>
          view
        </Button>
      </ComponentHeader>
      <ContentContainer>
        <div className="flex justify-center items-center p-5 ">
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
