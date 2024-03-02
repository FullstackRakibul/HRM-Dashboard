import React,{
    useEffect,
    useState
} from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    useGetCompanyGridQuery,
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

const CompanyDataGrid=()=>{
    const history=useNavigate();
    const {data:companyData,isSuccess,isLoading}=useGetCompanyGridQuery({skip:0,take:100,filter:'',orderBy:'CompanyId'});
    const [deleteCompany]=useDeleteCompanyMutation();

    const handleDelteCompany=(record)=>{
        const companyId=record.CompanyId;

        const obj={
            p_CompanyId:companyId
        }

        deleteCompany({data:JSON.stringify(obj)})
        .then((response)=>{
            if(response.data===1){
                Success("Successfully Deleted.",{},{})
            }
        }).catch((error)=>{
            Error("Delete Failed.",{},{});
        })
    }
    const myData=[
        {
            "rowindex": "1",
            "CompanyId": 1,
            CompanyName: "Ha-Meem Group",
            "CompanyNameBan": "হা-মিম গ্রুপ",
            "IsActive": true
        },
        {
            "rowindex": "2",
            "CompanyId": 2,
            "CompanyName": "Apparel Gallery Ltd.",
            "CompanyNameBan": "এ্যাপারেল গ্যালারী লিমিটেড",
            "IsActive": true
        },
        {
            "rowindex": "3",
            "CompanyId": 3,
            "CompanyName": "Artistic Design Ltd.",
            "CompanyNameBan": "আর্টিস্টিক ডিজাইন লিমিটেড",
            "IsActive": true
        },
        {
            "rowindex": "4",
            "CompanyId": 4,
            "CompanyName": "Bango Engineering Company Ltd.",
            "CompanyNameBan": "বঙ্গ ইঞ্জিনিয়ারিং কোম্পানী লিমিটেড",
            "IsActive": true
        },
        {
            "rowindex": "5",
            "CompanyId": 5,
            "CompanyName": "Bright Wash Ltd.",
            "CompanyNameBan": "ব্রাইট ওয়াশ লিমিটেড",
            "IsActive": true
        },
        {
            "rowindex": "6",
            "CompanyId": 6,
            "CompanyName": "Creative Collections Ltd.",
            "CompanyNameBan": "ক্রিয়েটিভ কালেকশনস লিমিটেড",
            "IsActive": true
        },
        {
            "rowindex": "7",
            "CompanyId": 7,
            "CompanyName": "Creative Wash Ltd.",
            "CompanyNameBan": "ক্রিয়েটিভ ওয়াশ লিমিটেড",
            "IsActive": true
        },
        {
            "rowindex": "8",
            "CompanyId": 8,
            "CompanyName": "Explore Lingerie Limited",
            "CompanyNameBan": "এ্যাক্সপ্লোর লঞ্জারি লিমিটেড",
            "IsActive": false
        },
        {
            "rowindex": "9",
            "CompanyId": 9,
            "CompanyName": "Express Washing & Dyeing Limited",
            "CompanyNameBan": "এক্সপ্রেস ওয়াশিং এন্ড ডাইং লিমিটেড",
            "IsActive": true
        },
        {
            "rowindex": "10",
            "CompanyId": 10,
            "CompanyName": "Fouji Chat Kall Limited",
            "CompanyNameBan": "ফৌজী চট কল লিমিটেড",
            "IsActive": true
        },
        {
            "rowindex": "11",
            "CompanyId": 11,
            "CompanyName": "Ha-Meem Apparels Limited",
            "CompanyNameBan": "হা-মিম এ্যাপারেল লিমিটেড",
            "IsActive": true
        },
        {
            "rowindex": "12",
            "CompanyId": 12,
            "CompanyName": "Ha-Meem Design Limited",
            "CompanyNameBan": "হা-মিম ডিজাইন লিমিটেড",
            "IsActive": true
        },
        {
            "rowindex": "13",
            "CompanyId": 13,
            "CompanyName": "Ha-Meem Denim Limited",
            "CompanyNameBan": "হা-মিম ডেনিম লিমিটেড ",
            "IsActive": true
        },
        {
            "rowindex": "14",
            "CompanyId": 14,
            "CompanyName": "M. H. Jute Mills Limited",
            "CompanyNameBan": "এম. এইচ. জুট মিলস লিমিটেড",
            "IsActive": true
        },
        {
            "rowindex": "15",
            "CompanyId": 15,
            "CompanyName": "Modern Cargo Carrier Limited",
            "CompanyNameBan": "মডার্ণ কার্গো কেরিয়ার লিমিটেড",
            "IsActive": true
        },
        {
            "rowindex": "16",
            "CompanyId": 16,
            "CompanyName": "Next Collections Ltd.",
            "CompanyNameBan": "নেক্সট কালেকশন লিমিটেড",
            "IsActive": true
        },
        {
            "rowindex": "17",
            "CompanyId": 17,
            "CompanyName": "Nishat Packaging & Printing Ind. Ltd.",
            "CompanyNameBan": "নিশাত প্যাকেজিং এন্ড প্রিন্টিং ইন্ডাষ্ট্রিজ লিমিটেড",
            "IsActive": true
        },
        {
            "rowindex": "18",
            "CompanyId": 18,
            "CompanyName": "Refat Garments Ltd.",
            "CompanyNameBan": "রিফাত গারমেন্স লিমিটেড",
            "IsActive": true
        },
        {
            "rowindex": "19",
            "CompanyId": 19,
            "CompanyName": "Refat Packaging & Printing Industries Ltd.",
            "CompanyNameBan": "রিফাত প্যাকেজিং এন্ড প্রিন্টিং ইন্ডাস্ট্রিজ লিঃ",
            "IsActive": true
        },
        {
            "rowindex": "20",
            "CompanyId": 20,
            "CompanyName": "Sajid Washing & Dyeing Ltd",
            "CompanyNameBan": "সাজিদ ওয়াশিং এন্ড ডাইং লিমিটেড",
            "IsActive": true
        },
        {
            "rowindex": "21",
            "CompanyId": 21,
            "CompanyName": "Sakib Poly Industries Ltd.",
            "CompanyNameBan": "সাকিব পলি ইন্ডাষ্ট্রিজ লিমিটেড",
            "IsActive": true
        },
        {
            "rowindex": "22",
            "CompanyId": 22,
            "CompanyName": "Sylhet Planters Ltd.",
            "CompanyNameBan": "",
            "IsActive": true
        },
        {
            "rowindex": "23",
            "CompanyId": 23,
            "CompanyName": "That's It Fashions Ltd.",
            "CompanyNameBan": "",
            "IsActive": true
        },
        {
            "rowindex": "24",
            "CompanyId": 24,
            "CompanyName": "That's It Garments Ltd.",
            "CompanyNameBan": "",
            "IsActive": true
        },
        {
            "rowindex": "25",
            "CompanyId": 25,
            "CompanyName": "That's It Knit Ltd.",
            "CompanyNameBan": "",
            "IsActive": true
        },
        {
            "rowindex": "26",
            "CompanyId": 26,
            "CompanyName": "Thats It Sports Wear Ltd",
            "CompanyNameBan": "",
            "IsActive": true
        },
        {
            "rowindex": "27",
            "CompanyId": 27,
            "CompanyName": "That's It Sweater Ltd.",
            "CompanyNameBan": "",
            "IsActive": true
        },
        {
            "rowindex": "28",
            "CompanyId": 28,
            "CompanyName": "Times Media Ltd.",
            "CompanyNameBan": "",
            "IsActive": true
        },
        {
            "rowindex": "29",
            "CompanyId": 29,
            "CompanyName": "Nishat Jute Mills Ltd.",
            "CompanyNameBan": "নিশাত জুট মিলস লিমিটেড",
            "IsActive": true
        },
    ]
    const columns = [
        {
          title: 'Company Name',
          dataIndex: 'CompanyName',
          key: 'LeaveId',
          //render: (LeaveId) => <strong>{LeaveId=='1'?"CL":LeaveId=='2'?"SL":LeaveId=="3"?"AL":""}</strong>,
          width:'25%'
        },
        {
          title: 'Company Name (Bangla)',
          dataIndex: 'CompanyNameBan',
          key: 'CompanyNameBan',
          width:'25%'
        },
        {
            title: 'Company Short Name',
            dataIndex: 'CompanyShortName',
            key: 'CompanyShortName',
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
               <Tag
               className='action-tag'
               color="#29c458"
               onClick={()=>{
                history("/hrm/settings/CompanyInfo",{state:{IsUpdate:true,CompanyId:record.CompanyId}})
               }}
               >
                <EditOutlined/>
              </Tag>
                <Popconfirm onConfirm={()=>handleDelteCompany(record)} title={`Sure Delete "${record.CompanyName}" ?`}>
                    <Tag 
                    color="#e94e10"
                    className='action-tag'
                    >
                        <DeleteOutlined/>
                    </Tag>
                </Popconfirm>
                <Tag 
                color="#0084ff"
                className='action-tag'
                onClick={()=>history(`/hrm/settings/CompanyInfo/lists/${record.CompanyId}`)}
                >
                  <FundViewOutlined>
                    
                  </FundViewOutlined>
                </Tag>
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
export default CompanyDataGrid