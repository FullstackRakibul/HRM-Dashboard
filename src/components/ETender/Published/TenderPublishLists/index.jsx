import React from 'react';
import {
    Row,
    Col,
    Space,
    Badge
} from 'antd';
import { 
    useSelector 
} from 'react-redux';
import { 
    useGetPublishListsQuery 
} from '../../../../Redux/features/publishTender/tenderPublishApi';
import { 
    convertActualtDateTime 
} from '../../../../utils/DateConfig';
import ListsTable from '../../../ui/ListsTable';
import NormalCard from '../../../ui/Card/NormalCard';
import dayjs from 'dayjs';

const TenderPublishListsComponent=()=>{
    const UserId=localStorage.getItem("UserId");
    const {}=useGetPublishListsQuery({UserId:parseInt(UserId),Take:100,Skip:0},{refetchOnMountOrArgChange:true});
    const {publishLists,publishCount}=useSelector((state)=>state.publish);

    const columns=[
        {
            title:"Tender No",
            dataIndex:"TenderNo",
            key:"TenderNo",
            // width:"9%",
            align:'left'
        },
        {
            title:"Base Bid Amount",
            dataIndex:"MinimumBidAmount",
            key:"MinimumBidAmount",
            align:'right'
        },
        {
            title:"Open Date",
            dataIndex:"OpenDate",
            key:"OpenDate",
            align:'center',
            render:(_,record)=>{
                return <Space
                size="middle"
                >
                    
                    <span>
                        <strong>{convertActualtDateTime(record.OpenDate)}</strong>
                    </span>
                </Space>
            }
        },
        {
            title:"Close Date",
            dataIndex:"CloseDate",
            key:"CloseDate",
            // width:"15%",
            align:'center',
            render:(_,record)=>{
                return <Space
                size="middle"
                >
                    
                    <span>
                        <strong>{convertActualtDateTime(record.CloseDate)}</strong>
                    </span>
                </Space>
            }
        },
        {
            title:"Status",
            dataIndex:"Status",
            key:"Status",
            // width:"9%",
            align:'center',
            render:(_,record)=>{
                return <Space
                size="middle"
                >
                    <Badge 
                    count={record.Status?record.Status:""}
                    style={{
                        backgroundColor:record.Status=="On Going"?'#52c41a':record.Status=="Not Published"?'#faad14':'#faad14',
                        //padding:"10px",
                        //fontSize:'22px'
                        fontFamily: "'Titillium Web',sans-serif"
                    }}
                    size="large" 
                    />
                </Space>
            }
        },
        {
            title:"Action",
            dataIndex:"Action",
            key:"Action",
            // width:"9%",
            align:'center',
            render:(_,record)=>{
                return <Space
                size="middle"
                >
                    <a className='table-action-link'>
                        Edit
                    </a>
                    <a className='table-action-link'>
                        Delete
                    </a>
                    <a className='table-action-link'>
                        Details
                    </a>
                </Space>
            }
        }
    ]
    return(
        <>
            <Row>
                <Col 
                span={24}
                >
                    <NormalCard>
                        <ListsTable
                        tableProps={{
                            data:publishLists?.length?publishLists:[],
                            height:500,
                            columns
                        }}
                        />
                    </NormalCard>
                </Col>
            </Row>
        </>
    )
}
export default TenderPublishListsComponent;