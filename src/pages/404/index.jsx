import React from 'react';
import {
    Row,
    Col,
    Card,
    Button
} from 'antd';
import './index.less';
import { Link } from 'react-router-dom';

const NotFound=()=>{
    return(
        <>
            <Row className='not-found-container'>
                <Col span={24} style={{
                    padding:'5px'
                }}>
                    <Card>
                        <span>
                            <strong className='not-found-text'>Opps ! Page Not Found.</strong><br/>
                            <Link to="/dashboard/user">
                                <span className='go-back-text'>Go To Home</span>
                            </Link>
                        </span>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default NotFound;