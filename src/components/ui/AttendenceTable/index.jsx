import React from 'react';
import {
    Table,
    Row,
    Col
} from 'antd';
import NoData from '../../../assets/images/no-data.png'
import './index.css';


const AttendenceTable=({tableProps})=>{
    const {columns,data,height,isLoading,noDataText}=tableProps;

    let locale={
        emptyText:<div style={{
            margin:"10px auto",
        }}>
            {/* <strong>No Data.</strong> */}
            <img 
            style={{
                height:'90px',
                width:'120px'
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
    return(
        <>
            <Row>
                <Col 
                span={24}
                className={`reusable-attendence-table`}
                >
                    <Table
                    locale={locale}
                    className={height?'overflow-y-true':'overflow-y-false'}
                    //className="HELLOWOOOMNI"
                    rowClassName={(record, index) => record.AttStatus==='WO'?'table-row-weekoff':record.AttStatus==='CL'?'table-row-absent':record.AttStatus==='LT'?'table-row-late':index % 2 === 0 ? 'table-row-dark' :  'table-row-light'}
                    dataSource={data}
                    columns={columns}
                    pagination={false} 
                    scroll={{ y: `${height?height:false}`}}
                    loading={isLoading}
                    />
                </Col>
            </Row>
        </>
    )
}
export default AttendenceTable;