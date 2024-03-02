import React,{
    useState,
    useEffect,
    useContext
} from 'react';
import { 
    SocketContextApi 
} from '../../../../../context/SocketContext';
import axios from 'axios';
import ConfigureAxios from '../../../../../utils/axios';
import {
    Row,
    Col,
    Divider
} from 'antd';
import './index.less';
import { 
    convertActualtDateString 
} from '../../../../../utils/DateConfig';



const BiddingDetails=({TenderNo,props})=>{
    //console.log(TenderNo)
    const {socketInstance,setSocketInstance}=useContext(SocketContextApi);
    const [initDataLists,setInitDataLists]=useState([]);
    const [dynamicColumnLists,setDynamicColumnLists]=useState([]);
    const [topInfo,setTopInfo]=useState({});

    const [detailsLists,setDetailsLists]=useState([]);

    useEffect(()=>{
        initLoad(TenderNo)
    },[TenderNo])

    useEffect(()=>{
        if(socketInstance?.connected){
            socketInstance.on("notify-tender-new-bid",async(data)=>{
                initLoad(TenderNo)
            })
        }
    },[socketInstance])

    // useEffect(()=>{
    //     if(initDataLists?.length){
    //         configDataLists(initDataLists)
    //     }
    // },[initDataLists])

    const initLoad=async(TenderNo)=>{
        const initData=await initDataLoading(TenderNo);

        //console.log(initData)
        if(initData.length){
            const infos={
                TenderNo:initData[0]?.TenderNo,
                OpenDate:initData[0]?.OpenDate?convertActualtDateString(initData[0]?.OpenDate):"",
                CloseDate:initData[0]?.CloseDate?convertActualtDateString(initData[0]?.CloseDate):""
            }
            setTopInfo(infos)
            props.setDetailsInfo(infos);
            const {lists}=initData[0];
            //console.log('Lists : ',lists)
            configDataLists(lists)
            setInitDataLists(lists)
        }else{
            setInitDataLists([])
        }
    }


    const initDataLoading=async(TenderNo)=>{
        let emptyLists=[];
        if(TenderNo){
            ConfigureAxios();
            emptyLists=await axios.get(`/getBiddingListsDetails?TenderNo=${TenderNo}`)
            .then((response)=>{
                if(response.status===200){
                   
                    const {data}=response.data.data;
                    //console.log(data)
                    if(data?.length){
                        //console.log(data)
                       return data;
                    }else{
                        return [];
                    }
                }
            }).catch((error)=>{
                console.log("Get bidding lists details error!");
                return []
            })

        }

        return emptyLists;
    }

    const configDataLists=(lists)=>{
        const newLists=[...lists];
        const myLists=[];
        if(newLists.length){
            const dynamicColumns= dynamicColumnsConfig(newLists);
            //console.log("D_Columns",dynamicColumns);
            //console.log("Caleedd")
            if(dynamicColumns?.length){
                const len=dynamicColumns.length;
                setDynamicColumnLists(dynamicColumns)
                props.setDynamicColumn(dynamicColumns);
                props.setDlen(len);
            }else{
                setDynamicColumnLists([])
                props.setDynamicColumn([])
                props.setDlen(0);
            }
            const dynamicBidders= dynamicBiddersConfig(newLists,dynamicColumns);
            const configDetailsData= configDetailsDataLists(newLists,dynamicColumns,dynamicBidders)
           // console.log("LLL",configDetailsData)
            if(configDetailsData.length){
                setDetailsLists(configDetailsData)
                props.setDatas(configDetailsData)
            }else{
                setDetailsLists([])
                props.setDatas([])
            }
        }
    }
    const dynamicColumnsConfig=(lists)=>{
        const newLists=[...lists];
        let myLists=[];

        if(newLists?.length){
            newLists.map((dta)=>{
                if(myLists?.length){
                    const index = myLists.map(e => parseInt(e.id)).indexOf(dta.TenderUserId);
                    if(index>=0){
                        
                    }else{
                        const newObj={
                            id:dta.TenderUserId,
                            name:dta.CompanyEmail,
                            title:dta.CompanyName
                        }
                        myLists=[...myLists,newObj]
                    }
                }else{
                    const newObj={
                        id:dta.TenderUserId,
                        name:dta.CompanyEmail,
                        title:dta.CompanyName
                    }
                    myLists=[...myLists,newObj]
                }
            })
        }

        return myLists;
    }
    const dynamicBiddersConfig=(lists,columns)=>{
        const newLists=[...lists];
        const newColumns=[...columns];
        let myLists=[];

        if(newLists?.length && newColumns?.length){
            newColumns.map((dta)=>{
                newLists.map((dta2)=>{
                    if(dta.name==dta2.CompanyEmail){
                        const newObj={
                            ItemId:dta2.ItemId,
                            name:dta2.CompanyEmail,
                            BidPrice:dta2.BidPrice
                        }
                        myLists=[...myLists,newObj]
                    }
                })
            })
        }
        return myLists;
    }
    const configDetailsDataLists=(lists,columns,bidders)=>{
        const newLists=[...lists];
        const newColumns=[...columns];
        const newBidders=[...bidders];
        let myLists=[];

        if(newLists?.length && newColumns?.length && newBidders?.length){
            const firstLayerData= configDataFirstLayer(newLists,newColumns);
            //console.log("First Layer: ",firstLayerData)
            if(firstLayerData?.length){
                firstLayerData.map((dta)=>{
                    const newDynamic=[...dta.dynamic];
                    const newObject={...dta};
                    if(newDynamic?.length){
                        newDynamic.map((dta2,index2)=>{
                            newBidders.map((dta3)=>{
                                if(dta2.name==dta3.name && dta2.ItemId==dta3.ItemId){
                                   newObject.dynamic[index2].quantity=dta3.BidPrice;
                                }
                            })
                        })
                    }
                    myLists=[...myLists,newObject]
                })
            }
            //console.log("First Layer Data : ",firstLayerData);
        }

        return myLists;
    }
    const configDataFirstLayer=(lists,columns)=>{
        const newLists=[...lists];
        const newColumns=[...columns];
        let myLists=[];

        // console.log("DD",newLists)
        // console.log("DD",newColumns)
        if(newLists.length){
            newLists.map((dta)=>{
                if(myLists?.length){
                    const index = myLists.map(e => parseInt(e.ItemId)).indexOf(dta.ItemId);
                    if(index>=0){
                        
                    }else{
                        let winners=dta.Winner;
                        const newObject={
                            ItemId:dta.ItemId,
                            ItemName:dta.ItemName,
                            ItemGrade:dta.GradeName,
                            LastPrice:dta?.LastPrice,
                            LastBidDate:dta?.LastBidDate,
                            ItemUnit:dta.UnitOfMeasurement,
                            ItemQuantity:dta.ItemQuantity,
                            TopPrice:dta.TopPrice,
                            Winner:winners[0].CompanyName,
                            dynamic:[]
                        }
                        newColumns.map((dta2)=>{
                            const newObj={
                                id:dta2.id,
                            ItemId:dta.ItemId,
                            name:dta2.name,
                            quantity:0
                            }
                            newObject.dynamic=[...newObject.dynamic,newObj]
                        })
                        myLists=[...myLists,newObject]
                    }
                }else{
                    let winners=dta.Winner
                    const newObject={
                        ItemId:dta.ItemId,
                        ItemName:dta.ItemName,
                        ItemGrade:dta.GradeName,
                        ItemUnit:dta.UnitOfMeasurement,
                        LastPrice:dta?.LastPrice,
                        LastBidDate:dta?.LastBidDate,
                        ItemQuantity:dta.ItemQuantity,
                        TopPrice:dta.TopPrice,
                        Winner:winners[0].CompanyName,
                        dynamic:[]
                    }
                    newColumns.map((dta2)=>{
                        const newObj={
                            id:dta2.id,
                            ItemId:dta.ItemId,
                            name:dta2.name,
                            quantity:0
                        }
                        newObject.dynamic=[...newObject.dynamic,newObj]
                    })
                    myLists=[...myLists,newObject]
                }

            })
        }
        return myLists;
    }

    
    return(
        <>
            <Row>
                <Col 
                span={24}
                className='bidding-lists-details'
                >
                    <h5>Ha-Meem Group</h5>
                    <h5>387,TML Building, Tejgaon industrial Area</h5>
                    <h5>Dhaka-1208</h5>
                    <Divider style={{minWidth:'82vw'}}/>
                    <Row>
                        <Col 
                        span={24}
                        style={{
                            display:'flex',
                            justifyContent:'space-between',
                            alignItems:'center',
                            // border:'1px solid red',
                            minWidth:'82vw'
                        }}
                        >
                            <h6>Tender No : {TenderNo}</h6>
                            <h6>Bid Opened : {topInfo?.OpenDate?topInfo?.OpenDate:""}</h6>
                            <h6>Bid End : {topInfo?.CloseDate?topInfo?.CloseDate:""}</h6>
                        </Col>
                    </Row>
                    <Divider style={{minWidth:'82vw'}}/>
                    <Row>
                        <Col 
                        span={24}
                        style={{
                            //display:'flex',
                            // justifyContent:'space-between',
                            // alignItems:'center',
                            width:'82vw',
                           flexWrap:'nowrap',
                            overflowX:'scroll',
                            // padding:'6px 8px'
                        }}
                        >
                            <Row
                            style={{
                                width:'82vw',
                                flexWrap:'nowrap',
                            }}
                            >
                                <Col
                                className='tender-reports-header company-small-column'
                                >
                                    <b>Sl</b>
                                </Col>
                                <Col 
                                className='tender-reports-header company-item-name'
                                >
                                    <b>Item Name</b>
                                </Col>
                                <Col className="tender-reports-header company-normal-column">
                                    <b>Grade</b>
                                </Col>
                                <Col className="tender-reports-header company-normal-column">
                                    <b>Unit</b>
                                </Col>
                                <Col className="tender-reports-header company-money-column">
                                    <b>Qty</b>
                                </Col>
                                {
                                    dynamicColumnLists?.length?dynamicColumnLists.map((dta)=>{
                                        return <Col key={dta.id} className="tender-reports-header company-name-column">
                                        <b>{dta.title}</b>
                                    </Col>
                                    }):""
                                }
                                {/* <Col className="tender-reports-header company-name-column">
                                    <b>Hisan Mastery</b>
                                </Col>
                                <Col className="tender-reports-header company-name-column">
                                    <b>Hisan Mastery</b>
                                </Col>
                                <Col className="tender-reports-header company-name-column">
                                    <b>Hisan Mastery</b>
                                </Col>
                                <Col className="tender-reports-header company-name-column">
                                    <b>Shuvo & Company</b>
                                </Col>
                                <Col className="tender-reports-header company-name-column">
                                    <b>Shuvo & Company</b>
                                </Col>
                                <Col className="tender-reports-header company-name-column">
                                   <b> Shuvo & Company</b>
                                </Col> */}
                                <Col className="tender-reports-header company-money-column">
                                    <b>Last Price</b>
                                </Col>
                                <Col className="tender-reports-header company-medium-column">
                                    <b>Last Selling Date</b>
                                </Col>
                                <Col className="tender-reports-header company-money-column">
                                    <b>Top Price</b>
                                </Col>
                                <Col className="tender-reports-header company-money-column">
                                    <b>Rise/Fall</b>
                                </Col>
                                <Col className="tender-reports-header company-name-column">
                                    <b>Winner</b>
                                </Col>
                                <Col className="tender-reports-header company-medium-column">
                                    <b>Earned Value</b>
                                </Col>
                            </Row>
                            {/* <Row
                            style={{
                                width:'82vw',
                                flexWrap:'nowrap',
                            }}
                            >
                                <Col
                                className='tender-reports-content company-small-column'
                                >
                                    <span>1</span>
                                </Col>
                                <Col 
                                className='tender-reports-content company-item-name'
                                >
                                    <span>Mens Denim Long Pant (v) Some with carpenter & austor approx. up to 10% oversize ( more than 44"waist)</span>
                                </Col>
                                <Col className="tender-reports-content company-normal-column">
                                    <span>A+</span>
                                </Col>
                                <Col className="tender-reports-content company-normal-column">
                                    <span>Pieces</span>
                                </Col>
                                <Col className="tender-reports-content company-money-column">
                                    <span>3000</span>
                                </Col>
                                <Col className="tender-reports-content company-name-column">
                                    <span>0</span>
                                </Col>
                                <Col className="tender-reports-content company-name-column">
                                    <span>0</span>
                                </Col>
                               <Col className="tender-reports-content company-name-column">
                                    <span>0</span>
                                </Col>
                                 <Col className="tender-reports-content company-name-column">
                                    <span>0</span>
                                </Col>
                                <Col className="tender-reports-content company-name-column">
                                    <span>0</span>
                                </Col>
                                <Col className="tender-reports-content company-name-column">
                                    <span>0</span>
                                </Col>
                                <Col className="tender-reports-content company-name-column">
                                   <span>0</span>
                                </Col>
                                <Col className="tender-reports-content company-money-column">
                                    <span>0</span>
                                </Col>
                                <Col className="tender-reports-content company-medium-column">
                                    <span>12-12-2023</span>
                                </Col>
                                <Col className="tender-reports-content company-money-column">
                                    <span>0</span>
                                </Col>
                                <Col className="tender-reports-content company-money-column">
                                    <span>0</span>
                                </Col>
                                <Col className="tender-reports-content company-name-column">
                                    <span>Shuvo & Company</span>
                                </Col>
                                <Col className="tender-reports-content company-medium-column">
                                    <span>0</span>
                                </Col>
                            </Row> */}
                            {
                                detailsLists.length?detailsLists.map((dta,index)=>{
                                    return <Row
                                    style={{
                                        width:'82vw',
                                        flexWrap:'nowrap',
                                    }}
                                    key={dta.ItemId}
                                    >
                                        <Col
                                        className='tender-reports-content company-small-column'
                                        >
                                            <span>{index+1}</span>
                                        </Col>
                                        <Col 
                                        className='tender-reports-content company-item-name'
                                        >
                                            <span>{dta.ItemName}</span>
                                        </Col>
                                        <Col className="tender-reports-content company-normal-column">
                                            <span>{dta.ItemGrade}</span>
                                        </Col>
                                        <Col className="tender-reports-content company-normal-column">
                                            <span>{dta.ItemUnit}</span>
                                        </Col>
                                        <Col className="tender-reports-content company-money-column">
                                        <span>{dta.ItemQuantity}</span>
                                        </Col>
                                        {
                                            dta.dynamic.length?dta.dynamic.map((dta2)=>{
                                                return <Col key={dta2.id} className="tender-reports-content company-name-column">
                                                    <span>{dta2.quantity}</span>
                                                </Col>
                                            }):""
                                        }
                                        
                                        <Col className="tender-reports-content company-money-column">
                                            <span>{dta?.LastPrice}</span>
                                        </Col>
                                        <Col className="tender-reports-content company-medium-column">
                                            <span>{dta?.LastBidDate && dta?.LastBidDate!="1900-01-01T00:00:00.000Z" && dta?.LastBidDate!="1900-01-01T00:00:00"?convertActualtDateString(dta.LastBidDate):""}</span> 
                                        </Col>
                                        <Col className="tender-reports-content company-money-column">
                                            <span>{dta.TopPrice}</span>
                                        </Col>
                                        <Col className="tender-reports-content company-money-column">
                                            <span>{parseInt(dta.TopPrice-dta.LastPrice)}</span>
                                        </Col>
                                        <Col className="tender-reports-content company-name-column">
                                            <span>{dta?.Winner}</span>
                                        </Col>
                                        <Col className="tender-reports-content company-medium-column">
                                            <span>{parseFloat(parseInt(dta.ItemQuantity)*parseInt(dta.TopPrice)).toFixed(2)}</span>
                                        </Col>
                                    </Row>
                                }):""
                            }
                          
                            
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default BiddingDetails;