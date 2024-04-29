import React from "react";
import ComponentHeader from "../../../../components/ui/ComponentHeader";
import { Button } from "antd";
import ContentContainer from "../../../../components/ui/ContentContainer";
import StatisticCard from "../../../../components/SupportTicket/Global/StatisticsCard";
import Statistics from "../../../../components/SupportTicket/Global/Statistics";

const UserDashboard = () => {
  return (
    <>
      <ComponentHeader title={"Personal Dashboard"}>
        <Button icon={<i class="fas fa-sync"></i>}>refresh</Button>
      </ComponentHeader>
      <ContentContainer>
        <Statistics />
      </ContentContainer>
    </>
  );
};

export default UserDashboard;
