import React,{
    useEffect,
    useState
} from 'react'
import {
    Tag,
    Space,
    Button,
    Row,
    Col,
    DatePicker
} from 'antd';
import dayjs from 'dayjs';
import { useDispatch,useSelector } from 'react-redux';
import { getDailyAttendenceLists } from '../../../../Redux/features/Dashboard/Async';
import AttendenceTable from '../../../../components/ui/AttendenceTable/index'
import Module from './index.module.css';
import { convertActualtDateString,DatePickerFromFormat,DatePickerToFormat } from '../../../../utils/DateConfig';
import './index.css';

const dateFormat="DD-MMMM-YYYY";

const Attendence=()=>{
    const dispatch=useDispatch();
    const [isLoading,setIsLoading]=useState(false);
    const [FromDate,setFromDate]=useState(DatePickerFromFormat(new Date()));
    const [ToDate,setToDate]=useState(DatePickerToFormat(new Date()));
    const {classLists}=useSelector((state)=>state.ui);
    const DailyAttendence=useSelector((state)=>state.dashboard.dailyAttendence);
    const DailyAttendenceLoading=useSelector((state)=>state.dashboard.dailyAttendenceLoading);
    const DefaultFromDate=DatePickerFromFormat(new Date());
    const DefaultToDate=DatePickerToFormat(new Date())

    useEffect(()=>{
        const UserId=localStorage.getItem("UserId");
        const myDate=new Date();

        let TableName='Attendance_DailyAttendance';
        let dates={
            StartDate:'2021-01-01',
            EndDate:'2022-01-31'
        }
        getAttendence(UserId,TableName,dates)
    },[])

    const getAttendence=(UserId,TableName,dates)=>{
        const queries={
            EmpId:UserId,
            TableName,
            StartDate:dates.StartDate,
            EndDate:dates.EndDate
        }
        dispatch(getDailyAttendenceLists(queries))
        // .unwrap()
        // .then((datas)=>{
        //   if(datas.length){
        //     setIsTableLoading(false)
        //   }
        // })
        // .catch((error)=>{
        //     setIsTableLoading(false)
        // })
    }


    // handle Date From On Change
    const handleFromDateOnChange = (date, dateString) => {
        // console.log(date);
        // console.log(dateString)
        setFromDate(dateString)
    };

    // handle Attendence To Date Change
    const handleToDateChange=(date,dateString)=>{
        setToDate(dateString)
    }    

    const columns = [
        {
          title: 'Date',
          dataIndex: 'WorkDay',
          key: 'WorkDay',
          render: (StartDate) => <span>{convertActualtDateString(StartDate)}</span>,
          width:'14%'
        },
        {
          title: 'In Time',
          dataIndex: 'InTime',
          key: 'InTime',
          //render: (StartDate) => <span>{convertActualtDateString(StartDate)}</span>,
          width:'14%'
        },
        {
            title: 'Out Time',
            dataIndex: 'OutTime',
            key: 'OutTime',
            //render: (StartDate) => <span>{convertActualtDateString(StartDate)}</span>,
            width:'14%'
        },
        {
            title: 'Status',
            dataIndex: 'AttStatus',
            key: 'AttStatus',
            width:'9%'
        },
        {
            title: 'Tiffin/Iftar',
            //dataIndex: 'NoOfDays',
            key: 'NoOfDays',
            render: (record) => <span>{record.IsTiffin?'1':'0'}/{record.IsIftar?'1':'0'}</span>,
            width:'12%'
        },
        {
            title: 'Night',
            dataIndex: 'IsNight',
            render: (IsNight) => <span>{IsNight?'1':'0'}</span>,
            key: 'IsNight',
            width:'8%'
        },
        {
            title: 'H/WO',
            //dataIndex: 'NoOfDays',
            key: 'NoOfDays',
            render: (record) => <span>{record.IsHoliday?'1':'0'}/{record.IsWeekOff?'1':'0'}</span>,
            width:'10%'
        },
        {
            title: 'Remarks',
            dataIndex: 'Remarks',
            key: 'Remarks',
            width:'15%'
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
              <Space size="middle">
                {record.AttStatus==="LT" || record.AttStatus==="CL"?<a style={{
                    color:`${record.AttStatus==="LT"?'red':'#fff'}`
                }}>
                  Action
                </a>:''}
              </Space>
            ),
            width:'12%'
          },
    ];
    return(
        <>
            <Row>
                <Col span={24}>
                    <Row className={`${classLists.dashboardInnerCardContainer?classLists.dashboardInnerCardContainer:''}`}>
                       <Col span={24}>
                            <Row>
                                <Col 
                                span={24}
                                style={{
                                    display:'flex',
                                    justifyContent:'center',
                                    alignItems:'center'
                                }}
                                >
                                    <b className={`${classLists.bodyMediumTitle?classLists.bodyMediumTitle:''}`}>MY ATTENDANCE (THIS MONTH) </b>
                                </Col>
                            </Row>
                            <Row>
                                <Col 
                                span={24}
                                style={{
                                    display:'flex',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    marginTop:'5px'
                                }}
                                >
                                    <DatePicker
                                    placeholder='From Date' 
                                    onChange={handleFromDateOnChange}
                                    style={{
                                        marginRight:'20px'
                                    }}
                                    value={dayjs(FromDate,dateFormat)}
                                    defaultValue={dayjs(DefaultFromDate,dateFormat)}
                                    className={`${classLists.datePicker?classLists.datePicker:''}`}
                                    //format={format}
                                    format={dateFormat}
                                    allowClear={false}
                                    /> 
                                    <DatePicker
                                    placeholder='To Date'
                                    onChange={handleToDateChange} 
                                    style={{
                                        marginRight:'30px'
                                    }}
                                    className={`${classLists.datePicker?classLists.datePicker:''}`}
                                    defaultValue={dayjs(DefaultToDate,dateFormat)}
                                    value={dayjs(ToDate,dateFormat)}
                                    format={dateFormat}
                                    allowClear={false}
                                    />
                                    <Button
                                    style={{
                                        marginRight:'10px',
                                        background:'#f3f3f7'
                                    }}
                                    className={`${classLists.button?classLists.button:''}`}
                                    loading={isLoading}
                                    onClick={()=>{
                                        setIsLoading(true);
                                        setTimeout(()=>{
                                            setIsLoading(false)
                                        },2000)
                                    }}
                                    >
                                        Load
                                    </Button>
                                    <Button
                                    className={`${classLists.button?classLists.button:''}`}
                                    >
                                        Print
                                    </Button>
                                </Col>
                            </Row>
                       </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                        <AttendenceTable tableProps={{
                            data:DailyAttendence,
                            columns,
                            isLoading:DailyAttendenceLoading,
                            height:DailyAttendence.length?'45vh':0,
                            noDataText:'Attendence Data Is Not Available'
                        }}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default Attendence;