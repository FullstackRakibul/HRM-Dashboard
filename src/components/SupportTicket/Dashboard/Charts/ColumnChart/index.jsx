import React from "react";
import { Column } from "@ant-design/plots";
import "./index.css";
import { color } from "chart.js/helpers";

const ProblemSolvingColumnChart = (props) => {
  const data = () => [
    {
      unit: "CCL - 1A",
      problemCount: 10,
    },
    {
      unit: "BWDL - 1",
      problemCount: 8,
    },
    {
      unit: "HDL",
      problemCount: 4,
    },
    {
      unit: "HTL - Woven",
      problemCount: 14,
    },
    {
      unit: "EGL - Garments",
      problemCount: 9,
    },
    {
      unit: "Corporate Office",
      problemCount: 4,
    },
    {
      unit: "TSWL Unit - 03",
      problemCount: 22,
    },
    {
      unit: "Sampling",
      problemCount: 14,
    },
    {
      unit: "NCL-Central",
      problemCount: 14,
    },
    {
      unit: "Textile Head Office",
      problemCount: 14,
    },
    {
      unit: "Kaligonj (Central)",
      problemCount: 17,
    },
    {
      unit: "NPPL-Printing",
      problemCount: 21,
    },
    {
      unit: "ADL-Unit-2",
      problemCount: 16,
    },
    {
      unit: "TISWL-Belt Factory",
      problemCount: 6,
    },

    //.......................
    {
      unit: "TSWL Unit - 02",
      problemCount: 22,
    },
    {
      unit: "Sampling -",
      problemCount: 14,
    },
    {
      unit: "NCL",
      problemCount: 14,
    },
    {
      unit: "Textile Office",
      problemCount: 14,
    },
    {
      unit: "Kaligonj",
      problemCount: 17,
    },
    {
      unit: "NPPL",
      problemCount: 21,
    },
    {
      unit: "ADL-Unit-4",
      problemCount: 16,
    },
    {
      unit: "TISWL",
      problemCount: 5,
    },
    //.......................
    {
      unit: "SZWDL - Deying Unit",
      problemCount: 9,
    },
    {
      unit: "EGL-Central Unit",
      problemCount: 11,
    },
    {
      unit: "Sampling Tongi Zone",
      problemCount: 13,
    },
    {
      unit: "HDL-Embroidary",
      problemCount: 18,
    },
    {
      unit: "RPPIL-Auto",
      problemCount: 14,
    },
    {
      unit: "NCP-Tongi",
      problemCount: 3,
    },
    {
      unit: "Creative Wash",
      problemCount: 12,
    },
    {
      unit: "Rotor Spinning",
      problemCount: 15,
    },
  ];

  const config = {
    data: {
      value: data(),
    },
    xField: "unit",
    yField: "problemCount",
    label: {
      text: (d) => `${d.problemCount.toFixed(0)}`,
      textBaseline: "bottom",
    },
    axis: {
      y: {
        //labelFormatter: ".0%",
      },
    },
    style: {
      radiusTopLeft: 5,
      radiusTopRight: 5,
      fill: "#299647",
    },
    color: ["#299647"],
  };
  return <Column {...config} />;
};

export default ProblemSolvingColumnChart;
