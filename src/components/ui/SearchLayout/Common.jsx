import React, { useState } from 'react';
import {
    Row,
    Col,
    Input,
    Select,
    Button,
    Checkbox,
    Divider,
    Space,
    Table
} from 'antd';
import { 
    useSelector,
    useDispatch
} from 'react-redux';
import axios from 'axios';
import ConfigureAxios from '../../../utils/axios';
import CommonCard from '../Card/NormalCard';
import InputForm from './partials/InputFom';
import CommonFormItem from '../FormItem/Common';
import CheckboxFormItem from '../FormItem/Checkbox';
import SideTree from '../CompanyTree/SideTree';
import ListsTable from '../ListsTable';
import './index.less';

const EmployeeSearchLayout=()=>{
    const dispatch=useDispatch();
    const {info}=useSelector((state)=>state.user);


    const [isLoading,setIsloading]=useState(false)
    const [tableData,setTableData]=useState([]);
    const [totalUser,setTotalUser]=useState([]);
    const [searchState,setSearchState]=useState({
        status:"",
        searchKey:"",
        selected:"",
        type:"",
        section:"",
        wing:"",
        team:"",
        sideTree:[]
    });

    const handleTableChange=(values)=>{
        console.log(values);
    }
    const handleSearch=()=>{
        const {sideTree}=searchState;
        const {UserId}=info;

        if(UserId && sideTree.length){
            ConfigureAxios();

            const obj={
                UserId:UserId,
                searchState
            }

            setIsloading(true)
            axios.post(`/common/getEmployeeLists`,JSON.stringify(obj))
            .then((response)=>{
               if(response.status===200 && response.data.IsSuccess){
                    let myData=response.data.data;
                    setIsloading(false)
                    if(myData.length){
                        setTotalUser(myData.length)
                       setTableData(myData)
                    }
                }
            }).catch((error)=>{
                setIsloading(false)
            })
        }
    }
    const columns = [
        {
          title: 'Id No',
          dataIndex: 'EmpCode',
          key: 'EmpCode',
          //render: (LeaveId) => <strong>{LeaveId=='1'?"CL":LeaveId=='2'?"SL":LeaveId=="3"?"AL":""}</strong>,
          width:'15%'
        },
        {
          title: 'Name',
          dataIndex: 'Name',
          key: 'Name',
          width:'30%'
        },
        {
            title: 'Desgination',
            dataIndex: 'DesignationName',
            key: 'DesignationName',
            width:'35%',
            //align:'center'
        },
        {
          title: 'Details',
          key: 'action',
          align:'center',
          render: (_, record) => (
            <Space size="small">
             
            </Space>
          ),
          width:'15%'
        },
    ];
    return(
        <>
            <Row>
                <Col span={24}>
                    <CommonCard
                    Title="Search Employee Information"
                    IsAbsolute={true}
                    >
                        <Row>
                            <Col span={24}>
                                <Row className='search-layout-top'>
                                    <Col span={24}>
                                        <InputForm
                                        propsLists={{
                                            searchState:searchState,
                                            setSearchState:setSearchState,
                                            isLoading
                                        }}
                                        onSearch={handleSearch}
                                        />
                                        <Divider />
                                        <Row>
                                            <Col 
                                            span={8}
                                            style={{
                                                textAlign:'right'
                                            }}
                                            >
                                               <Row 
                                               className='search-layout-sidebar-tree'
                                               >
                                                    <Col 
                                                    span={24}
                                                    >
                                                        <div
                                                        style={{
                                                            overflowX:'visible',
                                                            minWidth:'25vw'
                                                        }}
                                                        >
                                                           <SideTree
                                                            propsLists={{
                                                                searchState:searchState,
                                                                setSearchState:setSearchState
                                                            }}
                                                           /> 
                                                        </div>
                                                    </Col>
                                                </Row> 
                                            </Col>
                                            <Col span={16}>
                                                <Row>
                                                    <Col 
                                                    span={24}
                                                    style={{
                                                        borderLeft:'1px solid #f0f0f0'
                                                    }}
                                                    >
                                                        <Row className='search-layout-table'>
                                                            <Col span={24}>
                                                                {/* <Row>
                                                                    <Col span={25}>
                                                                        <Table
                                                                        dataSource={tableData}
                                                                        columns={columns}
                                                                        pagination={false}
                                                                        />
                                                                    </Col>
                                                                </Row> */}
                                                                <ListsTable
                                                                tableProps={{
                                                                    onChange:handleTableChange,
                                                                    data:tableData?.length?tableData:[],
                                                                    sticky:true,
                                                                    columns,
                                                                    isLoading:isLoading,
                                                                    pagination:true,
                                                                    rowSelection:true,
                                                                    noDataText:'User Lists Data Not Available.'
                                                                  }}
                                                                />
                                                                <Row
                                                                style={{
                                                                    display:'flex',
                                                                    justifyContent:'center',
                                                                    alignItems:'center'
                                                                }}
                                                                >
                                                                    <Col
                                                                    span={24}
                                                                    style={{
                                                                        background:'rgb(186 186 205)',
                                                                        width:'30vw',
                                                                        position:'fixed',
                                                                        bottom:'0',
                                                                        zIndex:'5',
                                                                        padding:'0px 5px',
                                                                        textAlign:'center',
                                                                        borderTopLeftRadius:'6px',
                                                                        borderTopRightRadius:'6px',
                                                                        margin:"0px 2px"
                                                                    }}
                                                                    >
                                                                        <b
                                                                        style={{
                                                                            fontFamily:"'Titillium Web',sans-serif",
                                                                            fontSize:'13px',
                                                                            fontWeight:'700'
                                                                        }}
                                                                        >
                                                                            Total User : {totalUser}
                                                                        </b>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </CommonCard>
                </Col>
            </Row>
        </>
    )
}
export default EmployeeSearchLayout;