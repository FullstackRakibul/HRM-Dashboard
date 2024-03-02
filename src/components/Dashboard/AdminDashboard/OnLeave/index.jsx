import React,{useState,useCallback} from "react";
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
  Cell,
  LabelList,
  Label
} from "recharts";

const data = [
    {
        name: "Accessories",
        Total: 200,
        Absent: 5,
        amt: 2400
    },
    {
        name: "Adminstration",
        Total: 156,
        Absent: 2,
        amt: 2210
    },
    {
        name: "Commercial",
        Total: 150,
        Absent: 3,
        amt: 2290
    },
    {
        name: "Design Studio",
        Total: 125,
        Absent: 3,
        amt: 2000
    },
    {
        name: "HR",
        Total: 80,
        Absent: 2,
        amt: 2181
    },
    {
        name: "IT",
        Total: 12,
        Absent: 1,
        amt: 2500
    },
    {
        name: "Management",
        Total: 15,
        Absent: 3,
        amt: 2100
    }
];

const getIntroOfPage = (label) => {
    if (label === "Page A") {
      return "Page A is about men's clothing";
    }
    if (label === "Page B") {
      return "Page B is about women's dress";
    }
    if (label === "Page C") {
      return "Page C is about women's bag";
    }
    if (label === "Page D") {
      return "Page D is about household goods";
    }
    if (label === "Page E") {
      return "Page E is about food";
    }
    if (label === "Page F") {
      return "Page F is about baby food";
    }
    return "";
  };

  const renderLabel=(props)=>{
    return(
        <div>
            <h1>On Leave (This Month)</h1>
        </div>
    )
  }
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" 
        style={{
          background:"rgba(255, 99, 132, 0.8)",
          padding:"5px"
        }}>
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          <p className="intro">{label}</p>
          <p className="desc">Anything doing here.</p>
        </div>
      );
    }
  
    return null;
  };

export default function OnLeaveRechart() {
    const [activeIndex, setActiveIndex] = useState("Accessories");
    const [depData,setDepData]=useState(data[0])
    const activeItem = data[activeIndex];


    const handleClick =(e) => {
        setActiveIndex(e.name)
        setDepData(e)
        console.log(e)
    };

    const barHandle=(payloadData)=>{
        setActiveIndex(payloadData.activePayload[0].payload.name)
    }
  return (

      <ResponsiveContainer width="100%" height={250}>
          <BarChart
          onClick={barHandle}
          width={500}
          height={300}
          data={data}
          margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20
          }}
          >
              <CartesianGrid strokeDasharray="3 3" />
              {/* <XAxis dataKey="name">
                  <Label offset={0} position="insideBottom" content={renderLabel}/> 
                  <LabelList dataKey="name"  fill="#000000" position="insideTop" /> 
              </XAxis> */}
              <YAxis />
              <Tooltip 
              isAnimationActive={true} 
              animationBegin={0}
              animationDuration={500}
              animationEasing="ease-out"
              content={<CustomTooltip />}/>
              <Bar dataKey="Absent" stackId="a" fill="#8884d8" onClick={handleClick} style={{marginBottom:"10px"}} >
              {data.map((item, index) => (
                  <Cell
                  cursor="pointer"
                  fill={item.name === activeIndex ? "#82ca9d" : "#8884d8"}
                  key={`cell-${index}`}
                  />
              ))}
                  <LabelList dataKey="name"  fill="#000000" position="insideEnd" angle="45"/>
                  <LabelList dataKey="Absent"   position="top" />
              </Bar>
              
          </BarChart>
      </ResponsiveContainer>
  );
}
