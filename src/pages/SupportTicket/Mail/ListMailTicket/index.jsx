import React, { useEffect, useState } from "react";
import { Button, message } from "antd";

import ComponentHeader from "../../../../components/ui/ComponentHeader";
import ContentContainer from "../../../../components/ui/ContentContainer";
import MailTicketList from "../../../../components/SupportTicket/Ticket/MailTicketList";
import { AxiosInstance } from "../../../../apis/supportTicketSlice";

const ListMailTicket = () => {
  const [isLoading, setIsLoading] = useState([false]);
  const handleFetchMailData = async () => {
    setIsLoading(true);
    try {
      const response = await AxiosInstance.get("/api/Tickets/FetchEmailData");
      console.log("This is a test ...", response);
      message.success("Mail fetch");
    } catch (error) {
      console.error("Error fetching mail:", error);
      message.error("Failed to fetch mail");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ComponentHeader
        title="Mail Ticket List"
        description="Manage all mail tickets here"
      >
        <Button
          size="small"
          icon={<i className="fas fa-window-restore"></i>}
          onClick={handleFetchMailData}
          loading={isLoading}
        >
          Fetch Mail from Server
        </Button>
      </ComponentHeader>
      <ContentContainer>
        <MailTicketList />
      </ContentContainer>
    </>
  );
};

export default ListMailTicket;
