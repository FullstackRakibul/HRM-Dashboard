// This component is mandotary for every module layout.
import React from 'react';
import {
    Row,
    Col
} from 'antd';
import './index.less';

const ModuleContainer=({children})=>{
    return(
        <>
            <Row className='module-layout-container'>
                <Col span={24}>
                    {children}
                </Col>
            </Row>
        </>
    )
}
export default ModuleContainer;