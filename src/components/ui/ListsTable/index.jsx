import React from 'react';
import NoData from '../../../assets/images/no-data.png';
import NoDataGif from '../../../assets/images/nodata.gif'
import {
    Table,
    Row,
    Col,
    Dropdown,
    Badge,
    Space
} from 'antd';
import ChildTable from './ChildTable';
import './index.css';


const ListsTable=({tableProps})=>{
    const {columns,onChange,data,height,sticky,isLoading,noDataText,pagination,pageSize,rowSelection}=tableProps;

    const expandedRowRender = () => {
        const columns = [
          {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
          },
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Status',
            key: 'state',
            render: () => <Badge status="success" text="Finished" />,
          },
          {
            title: 'Upgrade Status',
            dataIndex: 'upgradeNum',
            key: 'upgradeNum',
          },
          {
            title: 'Action',
            dataIndex: 'operation',
            key: 'operation',
            render: () => (
              <Space size="middle">
                <a>Pause</a>
                <a>Stop</a>
                
              </Space>
            ),
          },
        ];
        const data = [];
        for (let i = 0; i < 3; ++i) {
          data.push({
            key: i.toString(),
            date: '2014-12-24 23:12:00',
            name: 'This is production name',
            upgradeNum: 'Upgraded: 56',
          });
        }
        return <Table 
        columns={columns} 
        dataSource={data} 
        pagination={false}
        className={height?'overflow-y-true':'overflow-y-false'}
        rowClassName={(record, index) => index % 2 === 0 ? 'table-row-dark' :  'table-row-light'}
        />
    };
    let locale={
        emptyText:<div style={{
            margin:"10px auto",
        }}>
            {/* <strong>No Data.</strong> */}
            <img 
            style={{
                height:'90px',
                width:'120px',
                borderRadius:'60px'
            }} 
            src={NoData} /><br/>
            <strong style={{
                fontFamily: "'Titillium Web',sans-serif",
                fontSize: '16px',
                fontWeight: '700',
                color:'#000'
            }}>Opps! {noDataText?noDataText:''}</strong>
        </div>
    }
    let tablePropsLists={
        columns,
        dataSource:data,
        loading:isLoading,
        locale,
        sticky
    }
    if(rowSelection){
       // tablePropsLists={...tablePropsLists,rowSelection:{}}
        //tableProps={...tableProps,onChange:onChange}
    }

    const handleSelectRow=(data)=>{
        console.log("ROW SELCT: ",data)
    }
    const changeTable=(e)=>{
        console.log("Table Change : ",e)
    }

    return(
        <>
            <Row>
                <Col 
                span={24}
                className={`reusable-lists-table`}
                >
                  <Table
                  {...tablePropsLists}
                  onChange={changeTable}
                  rowSelection={{
                      onChange:handleSelectRow
                  }}
                  className={height?'overflow-y-true':'overflow-y-false'}
                  rowClassName={(record, index) => index % 2 === 0 ? 'table-row-dark' :  'table-row-light'}
                  // pagination={{
                  //     pagination:pagination?pagination:false,
                  //     pageSize:pageSize?pageSize:10
                  // }}
                  pagination={pagination?pagination:false}
                  scroll={{ y: `${height?height:false}`}}
                  />
                </Col>
            </Row>
        </>
    )
}
export default ListsTable;