import React,{
    useEffect,
    useState
} from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    useGetUnitDataGridQuery,
    useDeleteCompanyMutation
 } from '../../../../../Redux/features/HRM/hrmAPI';
import {
    Card,
    Row,
    Button,
    Space,
    Tag,
    Popconfirm
} from 'antd';
import { 
    DeleteFilled,
    DeleteOutlined,
    EditOutlined,
    FundViewOutlined
} from '@ant-design/icons';
import { Success,Error } from '../../../../../utils/Message';
import ListsTable from '../../../../ui/ListsTable';

const UnitDataGrid=()=>{
    const history=useNavigate();
    const {data:companyData,isSuccess,isLoading}=useGetUnitDataGridQuery({skip:0,take:100,filter:'',orderBy:'CompanyId'});
    const [deleteCompany]=useDeleteCompanyMutation();

    const handleDelteCompany=(record)=>{
        // const companyId=record.CompanyId;

        // const obj={
        //     p_CompanyId:companyId
        // }

        // deleteCompany({data:JSON.stringify(obj)})
        // .then((response)=>{
        //     if(response.data===1){
        //         Success("Successfully Deleted.",{},{})
        //     }
        // }).catch((error)=>{
        //     Error("Delete Failed.",{},{});
        // })
    }
    const columns = [
        {
          title: 'Unit Name',
          dataIndex: 'UnitName',
          key: 'UnitName',
          //render: (LeaveId) => <strong>{LeaveId=='1'?"CL":LeaveId=='2'?"SL":LeaveId=="3"?"AL":""}</strong>,
          width:'25%'
        },
        {
          title: 'Unit Name (Bangla)',
          dataIndex: 'UnitNameBan',
          key: 'UnitNameBan',
          width:'25%'
        },
        {
            title: 'Company Name',
            dataIndex: 'CompanyName',
            key: 'CompanyName',
            width:'18%',
        },
        {
            title: 'Unit Short Name',
            dataIndex: 'UnitShortName',
            key: 'UnitShortName',
            width:'18%',
            align:'center'
        },
        {
            title: 'Activity',
            dataIndex: 'IsActive',
            render: (IsActive) => <strong>{IsActive? <Tag color="#87d068">Active</Tag>: <Tag color="#e94e10">InActive</Tag>}</strong>,
            key: 'IsActive',
            width:'15%',
            align:'center'
        },
        {
          title: 'Action',
          key: 'action',
          align:'center',
          render: (_, record) => (
            <Space size="small">
              {/* <a onClick={()=>{
                history("/hrm/settings/CompanyInfo",{state:{IsUpdate:true,CompanyId:record.CompanyId}})
              }}>
                Edit
              </a> */}
               <Tag
               className='action-tag'
               color="#29c458"
               onClick={()=>{
                history("/hrm/settings/UnitInfo",{state:{IsUpdate:true,UnitId:record.UnitId}})
               }}
               >
                <EditOutlined/>
              </Tag>
              {/* <Tag
              icon={<i class="fad fa-edit"></i>}
              >

              </Tag> */}
                <Popconfirm onConfirm={()=>handleDelteCompany(record)} title={`Sure Delete "${record.UnitName}" ?`}>
                    <Tag 
                    color="#e94e10"
                    className='action-tag'
                    >
                        <DeleteOutlined/>
                    </Tag>
                </Popconfirm>
              {/* <a>
                Delete
              </a> */}
                <Tag 
                color="#0084ff"
                className='action-tag'
                onClick={()=>history(`/hrm/settings/UnitInfo/lists/${record.UnitId}`)}
                >
                  <FundViewOutlined>
                    
                  </FundViewOutlined>
                </Tag>
              {/* <a
              onClick={()=>{
                history(`/hrm/settings/CompanyInfo/lists/${record.CompanyId}`)
              }}
              >
                Details
              </a> */}
            </Space>
          ),
          width:'20%'
        },
    ];
    return(
        <>
            <ListsTable tableProps={{
                data:companyData?.length?companyData[1]:[],
                columns,
                isLoading,
                pagination:true,
                noDataText:'Company Lists Data Not Available.'
              }}/>
        </>
    )
}
export default UnitDataGrid;