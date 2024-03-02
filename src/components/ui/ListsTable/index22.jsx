import React from 'react';
import {
    Table,
    Row,
    Col
} from 'antd';
import './index.css';


const ListsTable=({tableProps})=>{
    const {columns,data,height}=tableProps
    return(
        <>
            <Row>
                <Col 
                span={24}
                className="reusable-lists-table"
                >
                    <Table
                    className="table-striped-rows"
                    rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' :  'table-row-dark'}
                    dataSource={data}
                    columns={columns}
                    pagination={false} 
                    scroll={{ y: `${height}`,x: 'fit-content' }}
                    />
                </Col>
            </Row>
        </>
    )
}
export default ListsTable;