import React from "react";
import ComponentHeader from "../../../../components/ui/ComponentHeader";
import { Button, Card } from "antd";
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
        <section className="my-3 gap-3 flex items-center justify-center ">
          <Card title={"Total Raised Issues"}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
              quos?
            </p>
          </Card>
          <Card title={"Pending Issues"}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
              quos?
            </p>
          </Card>
          <Card title={"Solved Issues"}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
              quos?
            </p>
          </Card>
        </section>
      </ContentContainer>
    </>
  );
};

export default UserDashboard;
