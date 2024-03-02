import React,{useState} from "react";
import {Row,Col,Card} from 'antd'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const data = [
  {
    name: "Oct-31",
    Present: 200,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Oct-30",
    Present: 45,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Oct-29",
    Present: 155,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Oct-28",
    Present: 25,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Oct-27",
    Present: 122,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Oct-26",
    Present: 129,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Oct-25",
    Present: 145,
    pv: 4300,
    amt: 2100
  }
];

export default function PresentEmployeeRechart(props) {
  return (
    <div className="dashboard-card-container">
      {/* <Row className="dashboard-card-container-row">
        <Col span={24}>
          <h4>Present Employee (Last 7 Days)</h4>
        </Col>
      </Row> */}
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart
          data={data}
          margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
          }}
          
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area 
            type="monotone"
            label="LLLL"
            dataKey="Present" 
            stroke="rgb(42, 202, 173)" 
            fill="rgb(42, 202, 173,.8)"/>
            {/* <Legend
            content={
              <h4>Present Employee (Last 7 Days)</h4>
            }/> */}
          </AreaChart>
      </ResponsiveContainer>
    </div>
    
  );
}
