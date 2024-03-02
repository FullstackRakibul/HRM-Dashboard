import React,{
    useEffect,
    useState,
    useContext
} from 'react';
import { 
    SocketContextApi 
} from '../../../../../context/SocketContext';
import {
    Row,
    Col,
    Space,
    Badge
} from 'antd';
import ListsTable from '../../../../ui/ListsTable/NestedTable';
import { 
    useGetBiddingListsQuery
} from '../../../../../Redux/features/bidding/biddingApi';
import axios from 'axios';
import ConfigureAxios from '../../../../../utils/axios';
import { 
    getBiddingLists 
} from '../../../../../Redux/features/bidding/biddingSlice';
import { 
    useSelector,
    useDispatch 
} from 'react-redux';
import NormalCard from '../../../../ui/Card/NormalCard';
import './index.less';
import { 
    Link 
} from 'react-router-dom';


const BiddingLists=()=>{
    const dispatch=useDispatch();
    const UserId=localStorage.getItem("UserId");
    const {socketInstance,setSocketInstance}=useContext(SocketContextApi);
    const {}=useGetBiddingListsQuery({UserId:parseInt(UserId),Take:10,Skip:0},{refetchOnMountOrArgChange:true});
    const {tenderLists,count}=useSelector((state)=>state.tender);
    const {biddingLists}=useSelector((state)=>state.bidding);

    const [dataLists,setDataLists]=useState([]);


    useEffect(()=>{
        if(socketInstance?.connected){
            socketInstance.on("notify-tender-new-bid",async(data)=>{
                getDataLists(UserId,100,0)
            })
        }
    },[socketInstance]);

    const getDataLists=async(UserId,Take,Skip)=>{
        ConfigureAxios();
        axios.get(`/getBiddingLists?UserId=${UserId}&Take=${Take}&Skip=${Skip}`)
        .then((response)=>{
            if(response.status==200){
                const lists=response?.data?.data?.lists
                if(lists.length){
                    dispatch(getBiddingLists(lists))
                }
            }
        }).catch((error)=>{
            console.log("Get Bidding Lists Error.");
        })
    }



    const columns=[
        {
            title:"Tender No",
            dataIndex:"TenderNo",
            key:"TenderNo",
            // width:"9%",
            align:'left'
        },
        {
            title:"Numbver Of Bid",
            dataIndex:"NumberOfBid",
            key:"NumberOfBid",
            align:'center'
        },
        {
            title:"Highest Bid",
            dataIndex:"HigestBid",
            key:"HigestBid",
            // width:"15%",
            align:'right'
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
                        backgroundColor:record.Status=="On Going"?'#52c41a':record.Status=="Not Pubished"?'#faad14':'#faad14',
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
                    <Link to={`/tender/bidding/lists/${record.TenderNo}`}>
                        <a className='table-action-link'>
                            Details
                        </a>
                    </Link>
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
                            data:biddingLists?.length?biddingLists:[],
                            height:500,
                            columns,
                            IsBidding:true
                        }}
                        />
                    </NormalCard>
                </Col>
            </Row>
        </>
    )
}
export default BiddingLists;