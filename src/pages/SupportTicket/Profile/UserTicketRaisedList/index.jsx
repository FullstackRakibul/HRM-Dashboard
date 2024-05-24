import { Button, Card } from "antd";
import React from "react";
import ComponentHeader from "../../../../components/ui/ComponentHeader";
import ContentContainer from "../../../../components/ui/ContentContainer";
import RaisedTicketListTable from "../../../../components/SupportTicket/Ticket/RaisedTicketListTable";

const index = () => {
  return (
    <>
      <ComponentHeader
        title={"All raised issues"}
        description={"Find your issues here and take action"}
      >
        <Button size="small" icon={<i class="fas fa-sync"></i>}>
          refetch
        </Button>
      </ComponentHeader>
      <ContentContainer>
        <RaisedTicketListTable />
      </ContentContainer>
    </>
  );
};

export default index;
