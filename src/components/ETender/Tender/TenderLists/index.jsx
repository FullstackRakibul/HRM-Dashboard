import React,{
    useEffect,
    useState
} from 'react';
import { 
    useNavigate 
} from 'react-router';
import {
    Row,
    Col,
    Space,
    Badge
} from 'antd';
import ListsTable from '../../../ui/ListsTable/NestedTable';
import { 
    useGetTenderListsQuery 
} from '../../../../Redux/features/tender/tenderApi';
import { 
    useSelector 
} from 'react-redux';
import NormalCard from '../../../ui/Card/NormalCard';
import './index.less';


const TenderListMain=()=>{
    const history=useNavigate();
    const UserId=localStorage.getItem("UserId");
    const {}=useGetTenderListsQuery({UserId:parseInt(UserId),Take:100,Skip:0},{refetchOnMountOrArgChange:true});
    const {tenderLists,count}=useSelector((state)=>state.tender);

    const [dataLists,setDataLists]=useState([]);
    //const []

    // useEffect(()=>{
    //     if(tenderLists.length){
    //         const lists=configDataLists(tenderLists);
    //         if(lists.length){
    //             setDataLists(lists);
    //         }
    //     }
    // },[tenderLists])

    const configDataLists=(lists)=>{
        let myLists=[...lists];
        let emptyLists=[];

        if(myLists.length){
            myLists.map((dta)=>{
                const newObj={
                    key:dta.TenderId,
                    ...dta
                }
                emptyLists=[...emptyLists,newObj]
            })
        }

        return emptyLists;
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
            title:"Tender Title",
            dataIndex:"TenderTitle",
            key:"TenderTitle",
            align:'center'
        },
        {
            title:"Tender Description",
            dataIndex:"TenderDescription",
            key:"TenderDescription",
            align:'center'
        },
        {
            title:"Total",
            dataIndex:"TotalAmount",
            key:"TotalAmount",
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
                    <a 
                    className='table-action-link'
                    onClick={()=>{
                        if(record.Mode!=4 && record.Mode!=3){
                            history(`/tender/tender/newTender`,{state:{IsUpdate:true,TenderNo:record.TenderNo,IsNotPublished:record.Mode==5?true:false,IsGoing:record.Mode==1?true:false}})
                        }else{
                            //history(`/tender/tender/newTender`,{state:{IsUpdate:true,TenderNo:record.TenderNo,IsNotPublished:record.Mode==5?true:false,IsGoing:record.Mode==1?true:false}})
                        }
                    }}
                    >
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
                            data:tenderLists?.length?tenderLists:[],
                            height:500,
                            columns,
                            IsTender:true
                        }}
                        />
                    </NormalCard>
                </Col>
            </Row>
        </>
    )
}
export default TenderListMain;