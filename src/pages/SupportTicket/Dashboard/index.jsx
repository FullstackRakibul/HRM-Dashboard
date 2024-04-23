import React from "react";
import { Button, Row, Col, Card } from "antd";

import ComponentHeader from "../../../components/ui/ComponentHeader";
import ContentContainer from "../../../components/ui/ContentContainer";
import Statistics from "../../../components/SupportTicket/Global/Statistics";
import StatisticCard from "../../../components/SupportTicket/Global/StatisticsCard";
import DepartmentStatistics from "../../../components/SupportTicket/Global/DepartmentStatistics/DepartmentStatistics";
import CompanyOverview from "../../../components/SupportTicket/Global/Statistics/CompanyOverview";
import ProblemSolvingLiquidChart from "../../../components/SupportTicket/Dashboard/Charts/LiquidChart";
import ProblemSolvingColumnChart from "../../../components/SupportTicket/Dashboard/Charts/ColumnChart";

const SupportTicketDashboard = () => {
  return (
    <>
      <ComponentHeader
        title={"Ticket dashboard"}
        description={
          "track performance, identify trends, and drive business growth."
        }
      >
        <Button size="small" icon={<i className="fas fa-sync"></i>}>
          refresh
        </Button>
      </ComponentHeader>
      <ContentContainer>
        {/* <Statistics title="Statistics" /> */}
        <Row justify={"space-between"} className="mt-8" gutter={10}>
          <Col span={18}>
            <Card title="Unit-Wise Raised Problem Count">
              <ProblemSolvingColumnChart />
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Problem Solving Ratio">
              <ProblemSolvingLiquidChart percentRate={0.65} />
            </Card>
          </Col>
        </Row>

        <Row className="pt-6 flex flex-row" gutter={16}>
          <Col span={12}>
            <StatisticCard
              unitName="ADL Unit 02"
              problemsRaised={18}
              problemsSolved={16}
              avgTimeToSolve="2.3 hours"
              skillRating="Excellent"
            />
          </Col>
          <Col span={12}>
            <StatisticCard
              unitName="TISWL Unit 03"
              problemsRaised={23}
              problemsSolved={17}
              avgTimeToSolve="1.1 hours"
              skillRating="Good"
            />
          </Col>
        </Row>
        <Row className="pt-6 flex flex-row" gutter={16}>
          <Col span={12}>
            <StatisticCard
              unitName="Humana Apparels Ltd."
              problemsRaised={14}
              problemsSolved={14}
              avgTimeToSolve="4.3 hours"
              skillRating="Excellent"
            />
          </Col>
          <Col span={12}>
            <StatisticCard
              unitName="Zone Central"
              problemsRaised={16}
              problemsSolved={13}
              avgTimeToSolve="3.1 hours"
              skillRating="Good"
            />
          </Col>
        </Row>
      </ContentContainer>
    </>
  );
};

export default SupportTicketDashboard;
