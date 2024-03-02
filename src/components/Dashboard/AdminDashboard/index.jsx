import React, { Fragment } from 'react'
import {
    Row,
    Col,
    Card,
    Button
} from 'antd'
import { 
    Responsive, 
    WidthProvider
 } from "react-grid-layout";
 import { 
    useDispatch,
    useSelector 
} from 'react-redux';
import {
    FileSearchOutlined,
    CloseCircleOutlined
  } from '@ant-design/icons';
import { useGetCompanyTreeQuery } from '../../../Redux/features/common/commonApi';
import { 
    companyTree,
    getAdminInfos,
    getAdminUnits
} from '../../../Redux/features/AdminDashboard/adminDashboardSlice';
import CompanyTree from '../../ui/CompanyTree';
// import SelectTree from '../../../SelectTree'
import PresentEmployeeRechart from './PresentEmployee'
import AbsentWeekendOffRechart from './AbsentWeekendOff';
import SiteDutyEmployeeRechart from './SiteDutyEmployee';
import DepartmentWiseAttendenceRechart from './DepartmentWiseAttendence'
import OnLeaveRechart from './OnLeave/index';
import AttendenceStatus from './AttendenceStatus';
import ContinuosAbsent from './ContinuosAbsent';
import EmploymentStatus from './EmploymentStatus';
import CommonCard from './CommonCard';
import './index.css'
import { useEffect } from 'react';
import { useState } from 'react';
// import axios from '../../../../Services/ConfigAxios'
// import TestSpreedSheet from './Test';
const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = [
    {i: '1', x: 0, y: 0, w: 6, h: 2},
    {i: '2', x: 6, y: 0, w: 6, h: 2},
    {i: '3', x: 0, y: 2, w: 6, h: 2},
    {i: '4', x: 6, y: 2, w: 6, h: 2},
    {i: '5', x: 0, y: 4, w: 6, h: 2},
    {i: '6', x: 6, y: 4, w: 6, h: 2},
    {i: '7', x: 0, y: 6, w: 6, h: 2},
    {i: '8', x: 6, y: 6, w: 6, h: 2},
    {i: '9', x: 0, y: 8, w: 6, h: 2},
    {i: '10', x: 6, y: 8, w: 6, h: 2},
];

const AdminDashboard=()=>{
    const dispatch=useDispatch();
    const {info}=useSelector((state)=>state.user);
    const {companyTree}=useSelector((state)=>state.common);
    const {tree,adminUnit}=useSelector((state)=>state.admin);
    const {data:treeDatas,isLoading,isError}=useGetCompanyTreeQuery({UserId:info.UserId,UserLevelId:info.UserLevelId},{refetchOnMountOrArgChange:true})
    const [treeData,setTreeData]=useState([]);


    // useEffect(()=>{
    //     if(info.UserId){
    //         const {UserId,UserLevelId}=info;
    //         dispatch(companyTree({UserId,UserLevelId}))
    //     }
    // },[]);

    useEffect(()=>{
        if(info.UserId){
            const {EmpId}=info;
            // dispatch(getAdminInfos({EmpCode:EmpId}))
            // .unwrap()
            // .then((infos) => {
            // console.log("KKKL::: ",infos)
            // })
            // .catch((rejectedValueOrSerializedError) => {
            // // handle error here
            // })
            dispatch(getAdminUnits({EmpCode:EmpId}));
        }
    },[]);

    useEffect(()=>{
        const data={
            label:adminUnit.UnitName,
            value:`{${adminUnit.CompanyID}}{${adminUnit.UnitId}}`,
            key:`{${adminUnit.CompanyID}}{${adminUnit.UnitId}}`
        }

        //console.log(data)
        setTreeData([data])
        // setTreeData((state)=>{
        //     return{
        //         ...state,
        //         data
        //     }
        // })
    },[adminUnit,tree])

   

    const onComapnyListChange=(value)=>{
        console.log("Co Changes",value)
        setTreeData(value)

        console.log(treeData)
    }

    return(
        <Fragment>
            <Row  
            className='common-dashboard'
            >
                <Col 
                span={17}
                >
                    <Row>
                        <Col span={24} style={{padding:'0px 5px 5px 5px',flex:1}}>
                            <Card>
                                <Row>
                                    <Col span={24}>
                                        <CompanyTree 
                                        data={companyTree?.length?companyTree:[]}
                                        value={treeData}
                                        onChange={onComapnyListChange}
                                        />
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    <Row
                    style={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                    >
                        <Col span={6} style={{padding:'0px 5px',flex:1}}>
                            <CommonCard
                            title="Employee"
                            icon={<i className="fas fa-users"></i>}
                            color='#237804'
                            backgroundColor='#d9f7be'
                            minHeight='13vh'
                            >
                                <strong>Total : 1088</strong>
                            
                            </CommonCard>
                        </Col>
                        <Col span={6} style={{padding:'0px 5px',flex:1}}>
                            <CommonCard
                            title="Male"
                            icon={<i className="fas fa-male"></i>}
                            color='#003eb3'
                            backgroundColor='#bae0ff'
                            minHeight='13vh'
                            >
                                <strong>Total : 989</strong><br/>
                                <strong>Per : 91%</strong>
                            </CommonCard>
                        </Col>
                        <Col span={6} style={{padding:'0px 5px',flex:1}}>
                            <CommonCard
                            title="Female"
                            icon={<i className="fas fa-female"></i>}
                            color='#006d75'
                            backgroundColor='#b5f5ec'
                            minHeight='13vh'
                            >
                                <strong>Total : 100</strong><br/>
                                <strong>Per : 9%</strong>
                            </CommonCard>
                        </Col>
                        <Col span={6} style={{padding:'0px 5px',flex:1}}>
                            <CommonCard
                            title="Expatriate"
                            icon={<i className="fas fa-plane-departure"></i>}
                            color='#391085'
                            backgroundColor='#efdbff'
                            minHeight='13vh'
                            >
                                <strong>Total : 100</strong><br/>
                                <strong>Per : 9%</strong>
                            </CommonCard>
                        </Col>
                    </Row>

                    <Row
                    style={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                    >
                        <Col span={6} style={{padding:'5px 5px',flex:1}}>
                            <CommonCard
                            title="Today's Present Emp"
                            icon={<i className="fas fa-users"></i>}
                            color='#5b8c00'
                            backgroundColor='#f4ffb8'
                            minHeight='13vh'
                            >
                                <strong>921</strong>
                            </CommonCard>
                        </Col>
                        <Col span={6} style={{padding:'5px 5px'}}>
                            <CommonCard
                            title="Today's (A+WO+LO) Emp"
                            icon={<i className="fas fa-users"></i>}
                            color='#a8071a'
                            backgroundColor='#ffccc7'
                            minHeight='13vh'
                            >
                                <strong>140(A=131,WO=9,LO=0)</strong>
                            </CommonCard>
                        </Col>
                        <Col span={6} style={{padding:'5px 5px'}}>
                            <CommonCard
                            title="Emp On Leave (Today)"
                            icon={<i className="fas fa-users"></i>}
                            color='#ad2102'
                            backgroundColor='#ffd8bf'
                            minHeight='13vh'
                            >
                                <strong>140 </strong>
                            </CommonCard>
                        </Col>
                        <Col span={6} style={{padding:'5px 5px'}}>
                            <CommonCard
                            title="Emp On Site Duty (Today)"
                            icon={<i className="fas fa-users"></i>}
                            color='#ad4e00'
                            backgroundColor='#ffe7ba'
                            minHeight='13vh'
                            >
                                <strong>15 </strong>
                            </CommonCard>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24} style={{padding:'5px 5px',flex:1}}>
                            <Card>
                                <PresentEmployeeRechart/>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24} style={{padding:'5px 5px',flex:1}}>
                            <Card>
                                <AbsentWeekendOffRechart/>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} style={{padding:'5px 5px',flex:1}}>
                            <Card>
                                <SiteDutyEmployeeRechart/>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} style={{padding:'5px 5px',flex:1}}>
                            <Card>
                                <DepartmentWiseAttendenceRechart/>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} style={{padding:'5px 5px',flex:1}}>
                            <Card>
                                <AttendenceStatus/>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24} style={{padding:'5px 5px',flex:1}}>
                            <Card>
                                <OnLeaveRechart/>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col span={7}>
                    <Row>
                        <Col span={24} style={{padding:'0px 5px 5px 5px',flex:1}}>
                            <Card >
                                <ContinuosAbsent/>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24} style={{padding:'5px 5px',flex:1}}>
                            <Card>
                                <ContinuosAbsent/>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24} style={{padding:'5px 5px',flex:1}}>
                            <Card>
                                <ContinuosAbsent/>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24} style={{padding:'5px 5px',flex:1}}>
                            <Card>
                                <ContinuosAbsent/>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24} style={{padding:'5px 5px',flex:1}}>
                            <Card style={{height:'120px'}}>

                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <Row>
                <Col span={24} style={{textAlign:"left",marginBottom:"0px",padding:"0px 10px"}}>
                    <Button
                    className={filterOpenButton?"show-filter-open-button":"hide-filter-open-button"}
                    style={{
                        background:"#0050b3",
                        borderColor:"#0050b3",
                        borderRadius:"5px",
                        padding:"2px 5px",
                        color:"#fff",
                        fontSize:"14px"
                    }}
                    onClick={this.handleFilter}
                    >
                        Filter
                        <FileSearchOutlined />
                    </Button>
                </Col>
            </Row> */}
            {/* <Row className={showFilter?"show-filter-section":"hide-filter-section"}>
                <Col span={24} style={{padding:"0px 10px",paddingRight:"12px"}} className="dasboard-filter-box-section">
                    <Card
                    title="Filter By"
                    extra={
                    //</Col><Button
                    // style={{
                    //     background:"#0050b3",
                    //     borderColor:"#0050b3",
                    //     borderRadius:"5px",
                    //     padding:"2px 5px",
                    //     color:"#fff",
                    //     fontSize:"14px"
                    // }}
                    // >
                        <CloseCircleOutlined
                        className="close-filter-box"
                        onClick={this.handleFilterButton}
                        style={{
                            fontSize:"18px"
                        }}
                        />
                    // </Button>
                    }
                    bordered={true}
                    style={{
                        width: "100%",
                        textAlign:"left",
                        marginBottom:"0px",
                    }}
                    >
                        <Row>
                            <Col span={24}>
                                <SelectTree data={this.state.treeData}/>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row> */}
            {/* <Row style={{overflow:"scroll"}}>
                <Col span={24}>
                        <Row style={{marginBottom:"15px"}}>
                            <Col span={24}>
                                
                            </Col>
                        </Row>
                        
                </Col>
            </Row> */}
            {/* <Row style={{overflow:"hidden"}}>
                <Col span={24}>
                    <EmployeeOverview />
                    <ResponsiveGridLayout
                    layouts={{ lg: layout }}
                    // breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                    // cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                    breakpoints={{ lg: 900, md: 800, sm: 768, xs: 480, xxs: 0 }}
                    cols={cols}
                    measureBeforeMount={true}
                    className="layout"
                    rowHeight={this.props.rowHeight}
                    isDragable={true}
                    isResizable={true}
                    onDrag={this.onDragging}
                    onDragStop={this.onMoveCard}
                    onResizeStop={this.onResizeCard}
                    margin={[8, 20]}
                    >
                        {gridItems.map((item, i) => {
                            return (
                                <div  key={item.id} className="grid-item" style={{background:"#fff"}}>
                                    {item.content}
                                </div>
                            );
                        })}
                    </ResponsiveGridLayout>
                </Col>
            </Row> */}
        </Fragment>
    )
}
export default AdminDashboard;