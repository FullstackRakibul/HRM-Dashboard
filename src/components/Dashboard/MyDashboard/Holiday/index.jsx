import React,{
    useEffect,
    useState
} from 'react'
import {
    Tag,
    Space,
    Button,
    Row,
    Col
} from 'antd';
import { useDispatch,useSelector } from 'react-redux';
import { getHolidayLists } from '../../../../Redux/features/Dashboard/Async';
import ListsTable from '../../../ui/ListsTable';
import Module from './index.module.css';
import { convertActualtDateString ,convertActualtDateString2} from '../../../../utils/DateConfig';
import './index.css';


const Holiday=()=>{
    const dispatch=useDispatch();
    const HolidayLists=useSelector((state)=>state.dashboard.holidayLists);
    const isLoading=useSelector((state)=>state.dashboard.holidayLoading);

    useEffect(()=>{
        const UserId=localStorage.getItem("EmpId");
        getHolidays(UserId)
    },[])

    const getHolidays=(UserId)=>{
        const queries={
            EmpCode:UserId
        }
        dispatch(getHolidayLists(queries))
    }
    const columns = [
        {
          title: 'Holiday',
          dataIndex: 'HolidayName',
          key: 'HolidayName',
          render: (HolidayName) => <span>{HolidayName}</span>,
          width:'50%'
        },
        {
          title: 'From',
          dataIndex: 'DateFrom',
          key: 'DateFrom',
          render: (DateFrom) => <span>{convertActualtDateString2(DateFrom)}</span>,
          width:'18%'
        },
        {
            title: 'To',
            dataIndex: 'DateTo',
            key: 'DateTo',
            render: (DateTo) => <span>{convertActualtDateString2(DateTo)}</span>,
            width:'18%'
        },
        {
            title: 'Days',
            dataIndex: 'NoOfDays',
            key: 'NoOfDays',
            width:'16%'
        },
    ];
    return(
        <>
            <Row>
                <Col span={24}>
                    <Row className={`leave-deducation `+Module.leaveDeduction}>
                        <Col span={24}>
                            <b className={Module.leaveDeductionTitle}>HOLIDAY LISTS 2023 </b>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                        <ListsTable tableProps={{
                            data:HolidayLists,
                            columns,
                            height:0,
                            isLoading,
                            noDataText:'Holiday Data Is Not Available.'
                        }}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default Holiday;