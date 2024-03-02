import React,{useEffect} from 'react';
import {
    Row,
    Col,
    Button
} from 'antd';
import { useSelector } from 'react-redux';
// import Dashboard from '../../components/Dashboard';
import { 
    useGetCuponListsQuery 
} from '../../../apis/dashboardApi';
import Dashboard from '../../../components/Dashboard/MyDashboard';
import ComponentHeader from '../../../components/ui/ComponentHeader';
import ContentContainer from '../../../components/ui/ContentContainer';


const MyDashboard=()=>{
    const {
        classLists
    }=useSelector((state)=>state.ui)
    const {data,error,loading}=useGetCuponListsQuery();
    
    // useEffect(()=>{
    //     console.log(data)
    // },[data])
    console.log("Data: ",data)
    // console.log("Error: ",error)
    // console.log("loading: ",loading)
    return(
        <>
            <ComponentHeader>
                <Button
                size='small'
                className={`${classLists.globalResetButton?classLists.globalResetButton:''}`}
                icon={<i className="fas fa-window-restore"></i>}
                >
                    Reset
                </Button>
            </ComponentHeader>
            <ContentContainer>
                {/* <Row style={{minHeight:'1000vh'}}>
                    <Col span={24}>
                    </Col>
                </Row> */}
                {/* <Dashboard/> */}
               
            </ContentContainer>
        </>
    )
}
export default MyDashboard;