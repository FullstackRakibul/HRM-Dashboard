import React from "react";
import {Row,Col} from 'antd'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from "recharts";

const data = [
  {
    name: "Accessories",
    Total: 200,
    Present: 180,
    amt: 2400
  },
  {
    name: "Adminstration",
    Total: 156,
    Present: 120,
    amt: 2210
  },
  {
    name: "Commercial",
    Total: 150,
    Present: 130,
    amt: 2290
  },
  {
    name: "Design Studio",
    Total: 125,
    Present: 110,
    amt: 2000
  },
  {
    name: "HR",
    Total: 80,
    Present: 75,
    amt: 2181
  },
  {
    name: "IT",
    Total: 12,
    Present: 11,
    amt: 2500
  },
  {
    name: "Management",
    Total: 15,
    Present: 10,
    amt: 2100
  }
];

export default function DepartmentWiseAttendenceRechart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
          <BarChart
          onClick={(e)=>console.log(e)}
          data={data}
          margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5
          }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="Present"  fill="#8884d8" />
            <Bar  dataKey="Total"  fill="#82ca9d" />
          </BarChart>
    </ResponsiveContainer>
  );
}
