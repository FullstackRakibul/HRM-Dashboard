import React from 'react';
import {
    Row,
    Col,
    Card
} from 'antd';
import './index.less';

const ModuleHeader=({children})=>{
    return(
        <>
            <Row className='module-header-container'>
                <Col span={24}>
                    <Card>
                        {children}
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default ModuleHeader;