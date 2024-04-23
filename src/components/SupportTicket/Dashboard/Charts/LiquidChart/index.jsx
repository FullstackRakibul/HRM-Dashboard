import React from "react";
import { Liquid } from "@ant-design/plots";
import "./index.css";

const ProblemSolvingLiquidChart = (props) => {
  const config = {
    interaction: {
      tooltip: {
        render: () => (
          <p className="text-2xl font-normal font-sans">Problem Solving Rate</p>
        ),
      },
    },
    percent: props.percentRate,
    style: {
      outlineBorder: 4,
      outlineDistance: 8,
      waveLength: 128,
      fill: "#299647",
      stroke: "#299647",
      titleFill: "#ff5f20",
      subtitleFill: "#ff5f20",
    },
  };
  return <Liquid {...config} />;
};

export default ProblemSolvingLiquidChart;
