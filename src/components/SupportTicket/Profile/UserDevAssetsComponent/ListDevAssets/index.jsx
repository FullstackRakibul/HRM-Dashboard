import React, { useEffect, useState } from "react";
import { AxiosInstance } from "../../../../../apis/supportTicketSlice";
import { Table, Button, Popconfirm } from "antd";
import ListsTable from "../../../../ui/ListsTable";
import NormalCard from "../../../../ui/Card/NormalCard";

const ListDevAssets = ({ updateFlag }) => {
  const [codeSnippetData, setCodeSnippetData] = useState([]);

  const fetchCodeSnippetData = async () => {
    try {
      const response = await AxiosInstance.get(
        "/api/CodeSnippets/get-all-code"
      );

      console.log(response.data.data);
      setCodeSnippetData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCodeSnippetData();
  }, [updateFlag]);

  // config data for table

  const columns = [
    {
      title: "title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "language",
      dataIndex: "language",
      key: "language",
    },
    {
      title: "softwareType",
      dataIndex: "softwareType",
      key: "softwareType",
    },
    {
      title: "author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Actions",
      dataIndex: "",
      key: "actions",
      render: (record) => (
        <div className="flex justify-center items-center gap-3">
          <Button
            type="primary"
            size="small"
            icon={<i className="fas fa-eye"></i>}
            onClick={() => handleEdit(record.key)}
            htmlType="submit"
            className="bg-primary text-white font-sans font-xl font-semibold hover:bg-white mt-3"
          ></Button>
          <Button
            type="primary"
            size="small"
            icon={<i className="fas fa-edit"></i>}
            onClick={() => handleEdit(record.key)}
            htmlType="submit"
            className=" bg-warning text-white font-sans font-xl font-semibold hover:bg-white mt-3"
          ></Button>
          <Popconfirm
            title="Are you sure you want to delete this snippet?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
            className=" bg-error text-white font-sans font-xl font-semibold hover:bg-black mt-3"
          >
            <Button
              type="danger"
              size="small"
              icon={<i className="fas fa-trash"></i>}
              htmlType="submit"
              className=" bg-error text-white font-sans font-xl font-semibold hover:bg-black mt-3"
            ></Button>
          </Popconfirm>
        </div>
      ),
    },
  ];
  return (
    <>
      <Table
        dataSource={codeSnippetData}
        columns={columns}
        pagination={{ pageSize: 5 }}
        rowClassName="hover:bg-gray-100 cursor-pointer"
        size="small"
      />

      {/* <NormalCard>
        <ListsTable
          tableProps={{
            data: codeSnippetData?.length ? codeSnippetData : [],
            height: 500,
            columns,
            rowSelection: codeSnippetData.id,
          }}
        ></ListsTable>
      </NormalCard> */}
    </>
  );
};

export default ListDevAssets;
