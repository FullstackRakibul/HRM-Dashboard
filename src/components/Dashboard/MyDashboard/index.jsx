import React from 'react';
import {
    Row,
    Col,
    Card
} from 'antd'
import NormalCard from '../../ui/Card/NormalCard';
import MyLeaveStatus from './MyLeaveStatus';
import LeaveInformation from './LeaveInformation';
import PendingApplication from './PendingApplication';
import LeaveDeducation from './LeaveDeducation';
import Calender from './Calender';
import Attendence from './Attendence';
import Holiday from './Holiday';
import './index.css';
import { 
    H1, H2, H3, H4 ,SPAN
} from '../../ui/Typography';


const CommonDashboard=()=>{
    return(
        <Row className='common-dashboard'>
            <Col 
            span={24}
            >
                <Row>
                    <Col span={6}>
                        <NormalCard 
                        styles={{
                            minHeight:'32.7vh'
                        }}
                        className={""}
                        >
                            <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </span>
                        </NormalCard>
                    </Col>
                    <Col 
                    span={8}
                    style={{padding:'0px 10px 0px 10px'}}
                    >
                        <NormalCard 
                        styles={{
                            minHeight:'32.7vh'
                        }}
                        className={""}
                        >
                            <H1>
                                This Is Heading One.
                            </H1>
                            <H2>
                                This Is Heading Two.
                            </H2>
                            <H3>
                                This Is Heading Three.
                            </H3>
                            <H4>
                                This Is Heading Four.
                            </H4>
                            <SPAN>
                                This is Span Text Group....
                            </SPAN>
                        </NormalCard>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default CommonDashboard;