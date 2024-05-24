import React from "react";
import {
  Col,
  Row,
  Card,
  Select,
  Input,
  Button,
  Upload,
  Form,
  message,
} from "antd";
import ComponentHeader from "../../../../components/ui/ComponentHeader/index";
import ContentContainer from "../../../../components/ui/ContentContainer";
import TicketTypeCreateForm from "../../../../components/SupportTicket/Ticket/TicketTypeCreateForm";

const CreateTicketType = () => {
  return (
    <>
      <ComponentHeader
        title="Create Ticket Type"
        description="For classifying the issues, create a ticket type."
      >
        {/* <Button size="small" icon={<i className="fas fa-window-restore"></i>}>
          See List
        </Button> */}
      </ComponentHeader>
      <ContentContainer>
        <TicketTypeCreateForm />
      </ContentContainer>
    </>
  );
};

export default CreateTicketType;
