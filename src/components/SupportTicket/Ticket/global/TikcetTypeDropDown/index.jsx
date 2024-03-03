import React, { useState, useEffect } from "react";
import { Select } from "antd";
import axios from "axios";

const { Option } = Select;

const TickeTypeDropDown = ({ onTicketTypeChange }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/TicketTypes");
      setData(response.data);
    };
    fetchData();
  }, []);
  const handleChange = (value) => {
    onTicketTypeChange(value);
  };

  return (
    <Select style={{ width: 200 }} onChange={handleChange}>
      {data.map((item) => (
        <Option key={item.id} value={item.id}>
          {item.typeName}
        </Option>
      ))}
    </Select>
  );
};

export default TickeTypeDropDown;
