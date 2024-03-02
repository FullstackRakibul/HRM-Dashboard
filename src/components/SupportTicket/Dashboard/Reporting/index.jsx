import React from "react";
import { Card, Row, Col } from "antd";

const ReportingOne = () => {
  return (
    <>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Reporting Section</h2>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Report 1" className="rounded-lg">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Report 2" className="rounded-lg">
              <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Report 3" className="rounded-lg">
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ReportingOne;
