import { Card, Typography, Row, Col } from "antd";
import { Pie, Line } from "react-chartjs-2";

import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";

const { Text } = Typography;

const StatisticCard = ({
  unitName,
  problemsRaised,
  problemsSolved,
  avgTimeToSolve,
  skillRating,
}) => {
  const data = {
    labels: ["Resolved", "Pending"],
    datasets: [
      {
        data: [problemsSolved, problemsRaised - problemsSolved],
        backgroundColor: ["#68d391", "#f6ad55"],
      },
    ],
  };

  const data2 = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Problems Solved",
        data: [5, 7, 3, 9, 6, 4, 8],
        fill: false,
        borderColor: "#68d391",
        tension: 0.4,
      },
    ],
  };

  return (
    <>
      {/* <Card className="rounded-lg shadow-md flex">
        <Row className="flex flex-row justify-between">
          <Col>
            <h2 className="text-2xl font-semibold mb-4">
              Support Agent: {agentName}
            </h2>
          </Col>
          <Col>
            <div className="flex-shrink-0 w-64 ml-8">
              <Line data={data2} />
            </div>
          </Col>
        </Row>
        <div className="flex flex-col flex-grow">
          <div className="flex justify-between items-center mb-4">
            <div>
              <Text type="secondary">Problems Raised Today</Text>
              <p className="text-2xl font-semibold text-blue-500">
                {problemsRaised}
              </p>
            </div>
            <div>
              <Text type="secondary">Problems Solved Today</Text>
              <p className="text-2xl font-semibold text-green-500">
                {problemsSolved}
              </p>
            </div>
          </div>

          <div className="mb-4">
            <Text type="secondary">Average Time to Solve a Problem</Text>
            <p className="text-xl font-semibold">{avgTimeToSolve}</p>
          </div>

          <div className="flex items-center">
            <CheckCircleOutlined className="text-green-500 mr-2" />
            <Text type="secondary" className="mr-2">
              Skill Update Rating
            </Text>
            <Text className="text-sm font-semibold">{skillRating}</Text>
          </div>
        </div>
      </Card> */}

      <Card>
        <Row className="flex flex-row justify-between w-full">
          <Col span={24} lg={16}>
            <h2 className="text-2xl font-semibold mb-4">
              Unit Name : {unitName}
            </h2>
            <div className="flex justify-between items-center mb-4">
              <div>
                <Text type="secondary">Problems Assigned Today</Text>
                <p className="text-2xl font-semibold text-blue-500">
                  {problemsRaised}
                </p>
              </div>
              <div>
                <Text type="secondary">Problems Solved Today</Text>
                <p className="text-2xl font-semibold text-green-500">
                  {problemsSolved}
                </p>
              </div>
            </div>
            <div className="mb-4">
              <Text type="secondary">Average Time to Solve a Problem</Text>
              <p className="text-xl font-semibold">{avgTimeToSolve}</p>
            </div>
            <div className="flex items-center">
              <CheckCircleOutlined className="text-green-900 text-primary mr-2" />
              <Text type="secondary" className="mr-2">
                Skill Update Rating
              </Text>
              <Text className="text-sm font-semibold">{skillRating}</Text>
            </div>
          </Col>
          <Col span={24} lg={8}>
            <div className="flex-shrink-0 w-full lg:w-64 ml-8">
              <Line data={data2} />
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default StatisticCard;
