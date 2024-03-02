import React,{
    useEffect,
    useState,
    useContext
} from 'react';
import { 
    SocketContextApi 
} from '../../../../context/SocketContext';
import {
    Row,
    Col,
    Space,
    Badge
} from 'antd';
import ListsTable from '../../../ui/ListsTable/NestedTable';
import PaginationMain from '../../../ui/Pagination';
import { 
    useGetBiddingDetailsListsQuery 
} from '../../../../Redux/features/bidding/biddingApi';
import { 
    getBiddingDetailsLists 
} from '../../../../Redux/features/bidding/biddingSlice';
import {
    useDispatch,
    useSelector 
} from 'react-redux';
import NormalCard from '../../../ui/Card/NormalCard';
import './index.less';
import axios from 'axios';
import ConfigureAxios from '../../../../utils/axios';


const BiddingDetailsLists=()=>{
    const UserId=localStorage.getItem("UserId");
    const dispatch=useDispatch();
    const {socketInstance,setSocketInstance}=useContext(SocketContextApi);
    const {isLoading:loading}=useGetBiddingDetailsListsQuery({UserId:parseInt(UserId),Take:10,Skip:0},{refetchOnMountOrArgChange:true});
    const {tenderLists,count}=useSelector((state)=>state.tender);
    const {
        biddingDetailsLists,
        biddingDetailsListsCount
    }=useSelector((state)=>state.bidding);

    const [dataLists,setDataLists]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [currentPage,setCurrentPage]=useState(1);

    useEffect(()=>{
        if(socketInstance?.connected){
            socketInstance.on("notify-tender-new-bid",async(data)=>{
                getDataLists(UserId,10,0);
                setCurrentPage(1);
            })
        }
    },[socketInstance]);

    const getDataLists=async(UserId,Take,Skip)=>{
        ConfigureAxios();
        setIsLoading(true);
        axios.get(`/getBiddingDetailsLists?UserId=${UserId}&Take=${Take}&Skip=${Skip}`)
        .then((response)=>{
            if(response.status==200){
                setIsLoading(false);
                const lists=response?.data?.data?.lists;
                const count=response?.data?.data?.count;
                if(lists.length){
                    dispatch(getBiddingDetailsLists({lists:lists,count:count}))
                }
            }
        }).catch((error)=>{
            setIsLoading(false);
            console.log("Get Bidding Details Lists Error.");
        })
    }


    const onPaginationChange=(page,pageSize)=>{
        setCurrentPage(page);
        const Skip=(page-1)*pageSize;
        const Take=pageSize
        getDataLists(UserId,Take,Skip)
       //console.log("PPage: ",page+" Page Size: ",pageSize)
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
            title:"Company Name",
            dataIndex:"CompanyName",
            key:"CompanyName",
            align:'center'
        },
        {
            title:"Base Total",
            dataIndex:"BaseAmount",
            key:"BaseAmount",
            // width:"15%",
            align:'right'
        },
        {
            title:"Bid Total",
            dataIndex:"TotalAmount",
            key:"TotalAmount",
            // width:"15%",
            align:'right'
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
                            data:biddingDetailsLists?.length?biddingDetailsLists:[],
                            height:500,
                            columns,
                            IsBiddingDetails:true,
                            pagination:false,
                            isLoading:loading?loading:isLoading,
                            //onChange:onTableChange,
                            //count:biddingDetailsListsCount?biddingDetailsListsCount:0
                        }}
                        />
                        <PaginationMain
                        onPaginationChange={onPaginationChange}
                        count={biddingDetailsListsCount?biddingDetailsListsCount:0}
                        currentPage={currentPage}
                        />
                    </NormalCard>
                </Col>
            </Row>
        </>
    )
}
export default BiddingDetailsLists;