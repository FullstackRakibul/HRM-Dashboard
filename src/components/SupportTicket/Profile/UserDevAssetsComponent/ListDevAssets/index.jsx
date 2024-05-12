import React from "react";
import { AxiosInstance } from "../../../../../apis/supportTicketSlice";

const ListDevAssets = () => {
  const fetchCodeSnippetData = async () => {
    try {
      const response = await AxiosInstance.get(
        "/api/CodeSnippets/get-all-code"
      );
    } catch (error) {
      console.log(error);
    }
  };
  return <></>;
};

export default ListDevAssets;
