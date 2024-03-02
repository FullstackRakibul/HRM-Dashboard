import React from 'react';
import {
    Row,
    Col,
    Card,
    Divider
} from 'antd';
import './index.less';

const ComponentHeader=({title,description,children})=>{
    return(
        <>
            <Row className='component-header-container'>
                <Col 
                span={24}
                >
                    <Row
                    >
                        <Col 
                        span={12}
                        style={{
                            display:'flex',
                            flexDirection:'row',
                            alignItems:'baseline',
                            justifyContent:'flex-start'
                        }}
                        >
                            <h3 className='page-title'>{title?title:"Dashboard"}</h3>
                            &nbsp;&nbsp;
                            <span className='page-description'>{description?description:"Personal Activities"}</span>
                        </Col>
                        <Col
                        className='component-header-right-container' 
                        span={12}
                        >
                            {children}
                        </Col>
                    </Row>
                    <Divider dashed />
                </Col>
            </Row>
        </>
    )
}
export default ComponentHeader;