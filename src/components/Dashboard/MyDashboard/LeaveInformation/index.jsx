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

const LeaveInformation=()=>{
    const columns = [
        {
          title: 'Type',
          dataIndex: 'LeaveId',
          key: 'LeaveId',
          render: (LeaveId) => <strong>{LeaveId=='1'?"CL":LeaveId=='2'?"SL":LeaveId=="3"?"AL":""}</strong>,
          width:'10%'
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
            width:'40%'
        }
    ];
    const datas=[
        {
            LrId: "20199",
            EmpId: "502",
            LeaveId: 1,
            StartDate: "2020-01-16T00:00:00.000Z",
            EndDate: "2020-01-20T00:00:00.000Z",
            NoOfDays: 5,
            HalfDayPeriod: null,
            Reason: "My father was caught by heart attacked  dated on  01/14/20 & finally died on  01/17/20. pls grant casual leave  in this circumstances ,",
            LeaveName: "Casual Leave"
        },
        {
            LrId: "20201",
            EmpId: "502",
            LeaveId: 1,
            StartDate: "2020-02-07T00:00:00.000Z",
            EndDate: "2020-02-07T00:00:00.000Z",
            NoOfDays: 1,
            HalfDayPeriod: null,
            Reason: "",
            LeaveName: "Casual Leave"
        },
        {
            LrId: "20200",
            EmpId: "502",
            LeaveId: 1,
            StartDate: "2020-02-28T00:00:00.000Z",
            EndDate: "2020-02-28T00:00:00.000Z",
            NoOfDays: 1,
            HalfDayPeriod: null,
            Reason: "due to unavoidable purposes ",
            LeaveName: "Casual Leave"
        },
        {
            LrId: "51603",
            EmpId: "502",
            LeaveId: 1,
            StartDate: "2020-04-07T00:00:00.000Z",
            EndDate: "2020-04-07T00:00:00.000Z",
            NoOfDays: 1,
            HalfDayPeriod: 0,
            Reason: "unavoidable purposes ",
            LeaveName: "Casual Leave"
        },
        {
            LrId: "85507",
            EmpId: "502",
            LeaveId: 1,
            StartDate: "2020-12-17T00:00:00.000Z",
            EndDate: "2020-12-18T00:00:00.000Z",
            NoOfDays: 2,
            HalfDayPeriod: 0,
            Reason: "un avoidable reason ",
            LeaveName: "Casual Leave"
        },
        {
            LrId: "54167",
            EmpId: "502",
            LeaveId: 2,
            StartDate: "2020-07-06T00:00:00.000Z",
            EndDate: "2020-07-06T00:00:00.000Z",
            NoOfDays: 0.5,
            HalfDayPeriod: 2,
            Reason: "Due to headache & cold allergic problem with heavily sneezing .  ",
            LeaveName: "Sick Leave"
        },
        {
            LrId: "54502",
            EmpId: "502",
            LeaveId: 2,
            StartDate: "2020-07-19T00:00:00.000Z",
            EndDate: "2020-07-19T00:00:00.000Z",
            NoOfDays: 1,
            HalfDayPeriod: 0,
            Reason: "As reason of  cold fever & sneezing  .",
            LeaveName: "Sick Leave"
        },
        {
            LrId: "56052",
            EmpId: "502",
            LeaveId: 2,
            StartDate: "2020-09-07T00:00:00.000Z",
            EndDate: "2020-09-07T00:00:00.000Z",
            NoOfDays: 1,
            HalfDayPeriod: 0,
            Reason: "DUE TO SNEEZING & COLD FEVER COULDN'T ATTEND OFFICE  ON SAID DATE .",
            LeaveName: "Sick Leave"
        },
        {
            LrId: "86041",
            EmpId: "502",
            LeaveId: 2,
            StartDate: "2020-12-22T00:00:00.000Z",
            EndDate: "2020-12-23T00:00:00.000Z",
            NoOfDays: 2,
            HalfDayPeriod: 0,
            Reason: " DUE TO UNWELL HEALTH CONDITIONS.  ",
            LeaveName: "Sick Leave"
        }
    ]

    return(
        <>
            <Row style={{padding:'2px 0px'}}>
                <Col span={24}>
                    <Row className={`leave-deducation `+Module.leaveDeduction}>
                        <Col span={24}>
                            <b className={Module.leaveDeductionTitle}>LEAVE INFORMATION SUMMARY (YEAR : 2023) </b>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                        <ListsTable tableProps={{
                            data:datas,
                            columns,
                            height:'35vh',
                            noDataText:'Leave Information Data Not Available.'
                        }}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default LeaveInformation;