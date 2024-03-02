import React,{
  useState,
  useEffect
} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {
    Tag,
    Space,
    Button,
    Row,
    Col
} from 'antd';
import { getMyLeaveStatus } from '../../../../Redux/features/Dashboard/Async';
import ListsTable from '../../../ui/ListsTable';
import Module from './index.module.css';
import './index.css';

const LeaveDeducation=()=>{
  const dispatch=useDispatch();
  const data=useSelector((state)=>state.dashboard.leaveStatus);
  const isLoading=useSelector((state)=>state.dashboard.leaveStatusLoading);

  useEffect(()=>{
    let EmpId=localStorage.getItem("UserId");
    let myDate=new Date();
    let year=myDate.getFullYear();

    const quires={
      EmpId:EmpId,
      GetYear:year
    }
    
    dispatch(getMyLeaveStatus(quires))
  },[])
  const columns = [
    {
      title: 'Type',
      dataIndex: 'LeaveId',
      key: 'LeaveId',
      render: (LeaveId) => <strong>{LeaveId=='1'?"CL":LeaveId=='2'?"SL":LeaveId=="3"?"AL":""}</strong>,
      width:'10%'
    },
    {
      title: 'CF',
      dataIndex: 'CarriedDays',
      key: 'CarriedDays',
      width:'9%'
    },
    {
        title: 'Earn',
        dataIndex: 'PrevYearEarn',
        key: 'PrevYearEarn',
        width:'10%'
    },
    {
        title: 'Alloc.',
        dataIndex: 'LeaveAllocated',
        key: 'LeaveAllocated',
        width:'12%'
    },
    {
        title: 'Used',
        dataIndex: 'LeaveUsed',
        key: 'LeaveUsed',
        width:'12%'
    },
    {
      title: 'Pending',
      dataIndex: 'Pending',
      key: 'Pending',
      width:'15%'
    },
    {
        title: 'Remain',
        dataIndex: 'LeaveRemain',
        key: 'LeaveRemain',
        width:'15%'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>
            Action
          </a>
        </Space>
      ),
      width:'16%'
    },
  ];
  //console.log(data)
  return(
    <>
      <Row >
        <Col span={24}>
          <Row 
          className={`leave-deducation `+Module.leaveDeduction}
          >
            <Col span={24}>
              <b className={Module.leaveDeductionTitle}>MY LEAVE STATUS (YEAR : 2023) </b>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <ListsTable tableProps={{
                data:data,
                columns,
                isLoading,
                noDataText:'My Leave Data Not Available.'
              }}/>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default LeaveDeducation;