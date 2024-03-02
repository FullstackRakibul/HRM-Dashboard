import React from 'react';
import {
    Row,
    Col,
    Card
} from 'antd'
import MyProfile from './MyProfile';
import MyLeaveStatus from './MyLeaveStatus';
import LeaveInformation from './LeaveInformation';
import PendingApplication from './PendingApplication';
import LeaveDeducation from './LeaveDeducation';
import Calender from './Calender';
import Attendence from './Attendence';
import Holiday from './Holiday';
import './index.css';


const CommonDashboard=()=>{
    return(
        <Row className='common-dashboard'>
            <Col span={24}>
                <Row style={{display:'flex'}}>
                    <Col span={12} style={{padding:'15px',flex:1}}>
                        <Card style={{height:'100%'}}>
                            {/* <LeaveDeducation/> */}
                            <MyProfile/>
                        </Card>
                    </Col>
                    <Col span={12} style={{padding:'15px',flex:1}}>
                        <Card style={{height:'100%'}}>
                            <LeaveDeducation/>
                        </Card>
                    </Col>
                </Row>

                <Row tyle={{display:'flex'}}>
                    <Col span={12} style={{padding:'15px',flex:1}}>
                        <Card style={{height:'100%'}}>
                            <LeaveInformation/>
                        </Card>
                    </Col>
                    <Col span={12} style={{padding:'15px',flex:1}}>
                        <Card style={{height:'100%'}}>
                            <PendingApplication/>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col span={12} style={{padding:'15px',flex:1}}>
                        <Card style={{height:'100%'}}>
                            {/* <LeaveDeducation/> */}
                        </Card>
                    </Col>
                    <Col span={12} style={{padding:'15px',flex:1}}>
                        <Card style={{height:'100%'}}>
                            <Calender/>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col span={24} style={{padding:'15px'}}>
                        <Card style={{height:'450px'}}>
                            <Attendence/>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{padding:'15px'}}>
                        <Card style={{height:'450px'}}>
                            <Holiday/>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default CommonDashboard;