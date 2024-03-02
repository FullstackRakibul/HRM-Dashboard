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
import BiddingChildTable from './BiddingChild';
import BiddingDetailsChildTable from './BiddingDetailsChild';
// import './index.css';
import './NestedTable.less';


const NestedTable=({tableProps})=>{
    const {
        columns,
        onChange,
        data,
        height,
        sticky,
        isLoading,
        noDataText,
        pagination,
        pageSize,
        rowSelection,
        IsBidding,
        IsTender,
        count,
        IsBiddingDetails
    }=tableProps;

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
        sticky,
        pagination:false
    }
    if(pagination){
        tablePropsLists.pagination={
            pagination:pagination?pagination:false,
            pageSize:pageSize?pageSize:10,
            total:count
        }
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
                className={`reusable-nested-lists-table`}
                >
                    <Table
                    {...tablePropsLists}
                    onChange={typeof onChange==="function"?onChange:changeTable}
                    rowSelection={{
                        onChange:handleSelectRow
                    }}
                    expandable={{
                        expandedRowRender:IsBidding && !IsBiddingDetails && !IsTender?BiddingChildTable:!IsBidding && !IsBiddingDetails && IsTender?ChildTable:!IsBidding && IsBiddingDetails && !IsTender?BiddingDetailsChildTable:'',
                        defaultExpandedRowKeys: ['0'],
                      }}
                    className={height?'overflow-y-true':'overflow-y-false'}
                    rowClassName={(record, index) => index % 2 === 0 ? 'table-row-dark' :  'table-row-light'}
                    
                   
                    
                    // pagination={pagination?pagination:false}
                    scroll={{ y: `${height?height:false}`}}
                    />
                </Col>
            </Row>
        </>
    )
}
export default NestedTable;