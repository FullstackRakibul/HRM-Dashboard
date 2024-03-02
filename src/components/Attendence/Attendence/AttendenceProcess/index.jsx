import React,{
    useEffect,
    useState
} from 'react';
import {
    Row,
    Col,
    Card,
    DatePicker
} from 'antd';
import { 
    useSelector 
} from 'react-redux';
import { 
    useGetCompanyTreeQuery 
} from '../../../../Redux/features/common/commonApi';
import EmployeeSearchLayout from '../../../ui/SearchLayout/Common';
import CommonCard from '../../../ui/Card/NormalCard';
import CommonFormItem from '../../../ui/FormItem/Common';
import './index.less';


const dateFormat="DD-MMMM-YYYY";
const AttendenceProcess=()=>{
    const {user,common}=useSelector((state)=>state);
    const [userState,setUserState]=useState({
        UserId:'',
        UserLevelId:''
    });
    const [isSkipTree,setIsSkipTree]=useState(false);

    const {data,isLoading,isError}=useGetCompanyTreeQuery(
        {
            UserId:userState.UserId,
            UserLevelId:userState.UserLevelId
        },
        {
            refetchOnMountOrArgChange:true
        }
    );

    useEffect(()=>{
        if(user?.info){
            const {UserId,UserLevelId}=user.info;

            if(UserId && UserLevelId){
                setUserState((state)=>{
                    return{
                        ...state,
                        UserId,
                        UserLevelId
                    }
                })
            }
        }
    },[])


    return(
        <>
            <Row>
                <Col span={17}>
                    <EmployeeSearchLayout/>
                </Col>
                <Col
                span={7}
                style={{
                    paddingLeft:'5px'
                }}
                 >
                    <CommonCard
                    Title="Attendence Process"
                    >
                        <Row>
                            <Col span={24}>
                                <CommonFormItem
                                propsLists={{
                                    tooltip:{
                                        title:"Start Date"
                                    },
                                    name:"startDate",
                                    label:"Start Date"
                                }}
                                >
                                    <DatePicker
                                    size='small'
                                    style={{
                                        width:"100%"
                                    }}
                                    />
                                </CommonFormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <CommonFormItem
                                propsLists={{
                                    tooltip:{
                                        title:"End Date"
                                    },
                                    name:"endDate",
                                    label:"End Date"
                                }}
                                >
                                    <DatePicker
                                    style={{
                                        width:"100%"
                                    }}
                                    size='small'
                                    />
                                </CommonFormItem>
                            </Col>
                        </Row>
                    </CommonCard>
                </Col>
            </Row>
        </>
    )
}
export default AttendenceProcess;