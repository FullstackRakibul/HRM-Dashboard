import { Col, Row,Card } from 'antd'
import React, { Fragment } from 'react'
import {
    UserOutlined
} from '@ant-design/icons';
import MaleImage from '../../../../../assets/images/male.png'

class Male extends React.Component{
    render(){
        return(
            <Fragment>
                <Card
                    bordered={true}
                    className="overview-items-card"
                >
                    <Row className="dashboard-overview-items-row">
                        {/* <Col span={8} style={{fontSize:"35px"}}>
                            <img 
                            style={{
                                height:"70%",
                                width:"70%"
                            }}
                            className="dashboard-overview-image"
                            src={MaleImage}/>
                        </Col>
                        <Col span={16}>
                            <span>Total : <strong>962</strong><br/>Per : <strong>91%</strong></span>
                        </Col> */}
                        <Col span={24} >
                            <img 
                            style={{
                                height:"5%",
                                width:"22%"
                            }} 
                            className="dashboard-overview-image"
                            src={MaleImage}/><br/>
                            <span className="title">Male</span><br/>
                            <span>Total : <strong>962</strong><br/>Per : <strong>91%</strong></span>
                        </Col>
                    </Row>
                </Card>
            </Fragment>
        )
    }
}
export default Male