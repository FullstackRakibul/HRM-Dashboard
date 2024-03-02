import React from "react";
import { Card, Col, Row, Statistic, Typography } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import Clock from "../Clock";

const { Title } = Typography;
const Statistics = (props) => {
  return (
    <>
      <Row className="p-3 flex flex-row justify-between" gutter={16}>
        <Title level={3} className="mb-4 font-sans flex">
          {props.title}
        </Title>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="Completion of Issues"
              value={86.48}
              precision={2}
              valueStyle={{
                color: "#3f8600",
              }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="Idle Issues"
              value={13.52}
              precision={2}
              valueStyle={{
                color: "#cf1322",
              }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Statistics;
