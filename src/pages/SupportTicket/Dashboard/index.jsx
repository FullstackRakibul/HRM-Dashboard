import React from "react";
import { Button, Row, Col } from "antd";
import ComponentHeader from "../../../components/ui/ComponentHeader";
import ContentContainer from "../../../components/ui/ContentContainer";
import Statistics from "../../../components/SupportTicket/Global/Statistics";
import StatisticCard from "../../../components/SupportTicket/Global/StatisticsCard";
import DepartmentStatistics from "../../../components/SupportTicket/Global/DepartmentStatistics/DepartmentStatistics";
import CompanyOverview from "../../../components/SupportTicket/Global/Statistics/CompanyOverview";

const SupportTicketDashboard = () => {
  return (
    <>
      <ComponentHeader
        title={"Ticket dashboard"}
        description={
          "track performance, identify trends, and drive business growth."
        }
      >
        <Button size="small" icon={<i className="fas fa-window-restore"></i>}>
          Reset
        </Button>
      </ComponentHeader>
      <ContentContainer>
        <Statistics title="Statistics" />
        <Row className="pt-6 flex flex-row" gutter={16}>
          <Col span={12}>
            <StatisticCard
              agentName="Tamal Mazumder"
              problemsRaised={18}
              problemsSolved={16}
              avgTimeToSolve="3.3 hours"
              skillRating="Excellent"
            />
          </Col>
          <Col span={12}>
            <StatisticCard
              agentName="Rakibul Hasan"
              problemsRaised={15}
              problemsSolved={12}
              avgTimeToSolve="4.2 hours"
              skillRating="Good"
            />
          </Col>
        </Row>
        <Row className="pt-6 flex flex-row" gutter={16}>
          <Col span={12}>
            <StatisticCard
              agentName="Baki Billah"
              problemsRaised={14}
              problemsSolved={14}
              avgTimeToSolve="4.3 hours"
              skillRating="Excellent"
            />
          </Col>
          <Col span={12}>
            <StatisticCard
              agentName="Adam Bin Showkot "
              problemsRaised={16}
              problemsSolved={13}
              avgTimeToSolve="5.2 hours"
              skillRating="Good"
            />
          </Col>
        </Row>
      </ContentContainer>
    </>
  );
};

export default SupportTicketDashboard;
