import React from 'react';
import {
    Tag,
    Space,
    Button,
    Row,
    Col
} from 'antd';
import ListsTable from '../../../ui/ListsTable';
import Module from './index.module.css';
import { convertActualtDateString } from '../../../../utils/DateConfig';
import './index.css';

const PendingApplication=()=>{
    const columns = [
        {
          title: 'Type',
          dataIndex: 'LeaveId',
          key: 'LeaveId',
          render: (LeaveId) => <strong>{LeaveId=='1'?"CL":LeaveId=='2'?"SL":LeaveId=="3"?"AL":""}</strong>,
          width:'9%'
        },
        {
          title: 'From',
          dataIndex: 'StartDate',
          key: 'StartDate',
          render: (StartDate) => <span>{convertActualtDateString(StartDate)}</span>,
          width:'18%'
        },
        {
            title: 'To',
            dataIndex: 'EndDate',
            key: 'EndDate',
            render: (StartDate) => <span>{convertActualtDateString(StartDate)}</span>,
            width:'18%'
        },
        {
            title: 'Days',
            dataIndex: 'NoOfDays',
            key: 'NoOfDays',
            width:'10%'
        },
        {
            title: 'Reason',
            dataIndex: 'Reason',
            key: 'Reason',
            width:'25%'
        },
        {
            title: 'To',
            dataIndex: 'to',
            key: 'to',
            width:'20%'
        },
    ];
    const datas=[
        {
            LrId: "86041",
            EmpId: "502",
            LeaveId: 2,
            StartDate: "2020-12-22T00:00:00.000Z",
            EndDate: "2020-12-23T00:00:00.000Z",
            NoOfDays: 2,
            HalfDayPeriod: 0,
            Reason: " DUE TO UNWELL HEALTH CONDITIONS.  ",
            LeaveName: "Sick Leave",
            to:"Md. Faroquee Hossain"
        }
    ]

    return(
        <>
            <Row style={{padding:'2px 0px'}}>
                <Col span={24}>
                    <Row className={`leave-deducation `+Module.leaveDeduction}>
                        <Col span={24}>
                        <b className={Module.leaveDeductionTitle}>PENDING APPLICATION APPROVAL</b>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                        <ListsTable tableProps={{
                            data:datas,
                            columns,
                            height:0,
                            noDataText:'Pending Application Data Not Available.'
                        }}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default PendingApplication;