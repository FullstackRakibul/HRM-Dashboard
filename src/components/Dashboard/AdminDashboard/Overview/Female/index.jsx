import { Col, Row,Card } from 'antd'
import React, { Fragment } from 'react'
import FemaleImage from '../../../../../assets/images/female.png'

class Female extends React.Component{
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
                            src={FemaleImage}/>
                        </Col>
                        <Col span={16}>
                            <span>Total : <strong>96</strong><br/>Per : <strong>9%</strong></span>
                        </Col> */}
                        <Col span={24} >
                            <img 
                            style={{
                                height:"5%",
                                width:"22%"
                            }} 
                            className="dashboard-overview-image"
                            src={FemaleImage}/><br/>
                            <span className="title">Female</span><br/>
                            <span>Total : <strong>96</strong><br/>Per : <strong>9%</strong></span>
                        </Col>
                    </Row>
                </Card>
            </Fragment>
        )
    }
}
export default Female