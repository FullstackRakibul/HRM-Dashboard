import React from "react";
import {
    Row,
    Col,
    Card
} from 'antd';
import './index.css';
import DashboardModule from './index.module.css';
import LeaveDeducation from "./LeaveDeducation";

const MyDashboard=()=>{
    return(
        <>
            <Row className="my-dashboard-inner-container">
                <Col span={11}>
                    <Row className={DashboardModule.innerContainer}>
                        <Col span={24}>
                            <Card>
                                <Row >
                                    <Col span={24} className={DashboardModule.listTopTitleContainer}>
                                        <h5 style={{color:"#000"}}>Continuous Absent (Last 10 days)</h5>
                                    </Col>
                                </Row>
                                <LeaveDeducation/>
                            </Card>
                        </Col>
                    </Row>
                    <Row className={DashboardModule.innerContainer}>
                        <Col span={24}>
                            <Card>
                                
                            </Card>
                        </Col>
                    </Row>
                    <Row className={DashboardModule.innerContainer}>
                        <Col span={24}>
                            <Card>
                                
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col span={13} >
                    <Row className={DashboardModule.innerContainer}>
                        <Col span={24}>
                            <Card>

                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default MyDashboard;