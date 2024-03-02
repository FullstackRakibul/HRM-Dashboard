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
import {
    StepForwardOutlined,
    StepBackwardOutlined,
    FastForwardOutlined,
    FastBackwardOutlined
} from '@ant-design/icons'
import ListsTable from '../../../ReusableComponent/ListsTable';
import Module from './index.module.css';
import { getUserWeekOffLists } from '../../../../Redux/features/Dashboard/Async';
import { convertActualtDateString } from '../../../../utils/DateConfig';
import moment from 'moment'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './index.css';

const Calender=()=>{
    const dispatch=useDispatch();
    const [dateState, setDateState] = useState(new Date());
    const mark=useSelector((state)=>state.dashboard.weekOffLists)

    useEffect(()=>{
        let EmpId=localStorage.getItem("UserId");

        let query={
            EmpId
        }
        dispatch(getUserWeekOffLists(query))
    },[])

    return(
        <>
            <Row style={{padding:'2px 0px'}}>
                <Col span={24}>
                    <Row style={{margin:'auto 120px'}} className={Module.leaveDeduction}>
                        <Col span={24}>
                        <b className={Module.leaveDeductionTitle}>WEEK OFF CALENDER</b>
                        </Col>
                    </Row>
                    <Row style={{padding:'0px 120px'}}>
                        <Col span={24}>
                            <Calendar 
                            style={{
                                innerWidth:'100%'
                            }}
                            nextLabel={<StepForwardOutlined style={{fontSize:'110%'}}/>}
                            next2Label={<FastForwardOutlined style={{fontSize:'160%'}}/>}
                            prevLabel={<StepBackwardOutlined style={{fontSize:'110%'}}/>}
                            prev2Label={<FastBackwardOutlined style={{fontSize:'160%'}}/>}
                            // className={"ant-card ant-card-bordered ant-card-body"}
                            // value={dateState}
                            tileClassName={({ date, view }) => {
                                if(mark.length){
                                    if(mark.find(x=>moment(new Date(x.WeekoffDate)).format("DD-MM-YYYY")===moment(date).format("DD-MM-YYYY"))){
                                        return  'highlight'
                                    }
                                }
                            }}
                        
                        
                            // tileDisabled={({ date }) => date.getDay() === 0}
                            // onChange={changeDate}
                            // locale ='bn-BD'
                            //selectRange={true}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default Calender;