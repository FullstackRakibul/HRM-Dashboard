import React from 'react';
import {
    Row,
    Col,
    Pagination
} from 'antd';
import './index.less'

const PaginationMain=({count,currentPage,onPaginationChange})=>{
    const onChange=(page,pageSize)=>{
        //console.log("Pagination Chnage: ",page,pageSize)
        console.log("Page: ",page+" Page Size: ",pageSize)
    }
    const onShowSizeChange=(current,size)=>{
       // console.log("Current: ",current+" Size: ",size)
    }
    return(
        <>
            <Row>
                <Col 
                span={24}
                className='pagination-container'
                >
                    <Pagination
                    size='small' 
                    showQuickJumper={true}
                    onChange={onPaginationChange}
                    //onShowSizeChange={onPaginationChange}
                    current={currentPage} 
                    total={count?count:0} 
                    />
                </Col>
            </Row>
        </>
    )
}
export default PaginationMain;