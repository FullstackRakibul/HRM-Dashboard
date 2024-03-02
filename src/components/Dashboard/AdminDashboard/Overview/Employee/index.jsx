import { Col, Row,Card } from 'antd'
import React, { Fragment } from 'react'
import {
    UsergroupDeleteOutlined
} from '@ant-design/icons';
import EmployeeImage from '../../../../../assets/images/team.png'

class Employee extends React.Component{
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
                                height:"75%",
                                width:"70%"
                            }} 
                            className="dashboard-overview-image"
                            src={EmployeeImage}/>
                        </Col> */}
                        <Col span={24} >
                            <img 
                            style={{
                                height:"5%",
                                width:"22%"
                            }} 
                            className="dashboard-overview-image"
                            src={EmployeeImage}/><br/>
                            <span className="title">Employee</span><br/>
                            <span>
                                Total : <strong>1058</strong>
                            </span>
                        </Col>
                    </Row>
                </Card>
            </Fragment>
        )
    }
}
export default Employee