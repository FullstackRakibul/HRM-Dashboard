// DepartmentStatistics.js
import { Card, Typography } from "antd";
import { Pie, Line } from "react-chartjs-2";

const { Text } = Typography;

const DepartmentStatistics = ({
  departmentName,
  problemsRaised,
  problemsSolved,
  avgTimeToSolve,
}) => {
  const pieChartData = {
    labels: ["Resolved", "Pending"],
    datasets: [
      {
        data: [problemsSolved, problemsRaised - problemsSolved],
        backgroundColor: ["#68d391", "#f6ad55"],
      },
    ],
  };

  const lineChartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Problems Solved",
        data: [5, 7, 3, 9, 6, 4, 8], // Sample data, replace with actual data
        fill: false,
        borderColor: "#68d391",
        tension: 0.4,
      },
    ],
  };

  return (
    <Card className="rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">{departmentName}</h2>
      <div className="flex justify-between items-center mb-4">
        <div>
          <Text type="secondary">Problems Raised</Text>
          <p>{problemsRaised}</p>
        </div>
        <div>
          <Text type="secondary">Problems Solved</Text>
          <p>{problemsSolved}</p>
        </div>
      </div>
      <div className="mb-4">
        <Text type="secondary">Average Time to Solve a Problem</Text>
        <p>{avgTimeToSolve}</p>
      </div>
      <div className="flex justify-between">
        <Pie data={pieChartData} />
        <Line data={lineChartData} />
      </div>
    </Card>
  );
};

export default DepartmentStatistics;
