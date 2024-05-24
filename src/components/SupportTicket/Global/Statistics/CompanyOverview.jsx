// CompanyOverview.js
import React from "react";
import DepartmentStatistics from "../DepartmentStatistics/DepartmentStatistics";

const CompanyOverview = () => {
  // Generate random numbers of problems raised and solved for each department
  const departments = [
    "Information Technology",
    "Human Resources",
    // Add all other department names here
  ];

  const departmentData = departments.map((department) => ({
    departmentName: department,
    problemsRaised: Math.floor(Math.random() * 100) + 1, // Random number between 1 and 100
    problemsSolved: Math.floor(Math.random() * 50) + 1, // Random number between 1 and 50
    avgTimeToSolve: "2 hours", // Sample average time to solve
  }));

  // Generate random numbers of problems raised and solved for each unit
  const units = [
    "Corporate Office",
    "CCL Unit - 01B",
    // Add all other unit names here
  ];

  const unitData = units.map((unit) => ({
    unitName: unit,
    problemsRaised: Math.floor(Math.random() * 100) + 1, // Random number between 1 and 100
    problemsSolved: Math.floor(Math.random() * 50) + 1, // Random number between 1 and 50
    avgTimeToSolve: "2 hours", // Sample average time to solve
  }));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Company Overview</h1>
      {/* Render department statistics */}
      {departmentData.map((data, index) => (
        <DepartmentStatistics key={index} {...data} />
      ))}
    </div>
  );
};

export default CompanyOverview;
