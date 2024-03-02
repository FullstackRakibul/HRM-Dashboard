import React from 'react';
import { 
    Col, 
    Row,
    Card,
    Tabs
} from 'antd';
import CommonDashboard from './CommonDashboard';
import './index.css'

const Dashboard=()=>{
    return(
        <Row className='my-dashboard'>
            <Col span={24}>
                <CommonDashboard/>
            </Col>
        </Row>
    )
}

export default Dashboard;