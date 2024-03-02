import { Col, Row,Card } from 'antd'
import React, { Fragment } from 'react'
import EmployeeImage from '../../../../../assets/images/team.png'

class TodayPresentEmployee extends React.Component{
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
                            src={EmployeeImage}/>
                        </Col>
                        <Col span={16}>
                            <span><strong>886</strong></span>
                        </Col> */}
                        <Col span={24} >
                            <img 
                            style={{
                                height:"5%",
                                width:"22%"
                            }} 
                            className="dashboard-overview-image"
                            src={EmployeeImage}/><br/>
                            <span className="title">Today's Present Employee</span><br/>
                            <span><strong>886</strong></span>
                        </Col>
                    </Row>
                </Card>
            </Fragment>
        )
    }
}
export default TodayPresentEmployee;