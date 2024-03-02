import React,{ Fragment } from 'react'
import {Row,Col,Tabs,Avatar, Badge,Segmented, Button  } from 'antd'
import UpcomingConfirmation from './component/UpcomingConfirmation';
import UpcomingRetirement from './component/UncomingRetirement';
import UpcomingContractEnd from './component/UpcomingContractEnd';
import {
    FileExcelOutlined,
    NotificationOutlined,
    BellOutlined
  } from '@ant-design/icons';
import './index.css';

class EmploymentStatus extends React.Component{
    constructor(){
        super()
        this.state={
            activeKey:"1",
            upcomingConfirmation:true,
            upcomingRetirement:false,
            upcomingContractEnd:false
        }
    }
    tabChange=(key)=>{
        this.setState({
            activeKey:key
        })
    }
    handleSegment=(key)=>{
        if(key==="1"){
            this.setState({
                upcomingConfirmation:true,
                upcomingRetirement:false,
                upcomingContractEnd:false
            })
        }else if(key==="2"){
            this.setState({
                upcomingConfirmation:false,
                upcomingRetirement:true,
                upcomingContractEnd:false
            })
        }else if(key==="3"){
            this.setState({
                upcomingConfirmation:false,
                upcomingRetirement:false,
                upcomingContractEnd:true
            })
        }

        this.setState({
            activeKey:key
        })
    }
    render(){
        let activeComponent;
        if(this.state.upcomingConfirmation){
            activeComponent=<UpcomingConfirmation/>
        }else if(this.state.upcomingRetirement){
            activeComponent=<UpcomingRetirement/>
        }else if(this.state.upcomingContractEnd){
            activeComponent=<UpcomingContractEnd/>
        }

        let {activeKey}=this.state;
        return(
            <Fragment>
                <Row
                 style={{
                    height:"8%",
                    width:"100%",
                    display:"flex",
                    background:"#0050b3",
                    textAlign:"center",
                    alignItems:"center",
                    color:"#fff",
                }}
                >
                    <Col span={24} style={{textAlign:"center !important"}}>
                        <h4 style={{color:"#fff"}}>Employment Status</h4>
                    </Col>
                </Row>
                <Row
                style={{height:"11%"}}
                >
                    {/* <Col span={24}>
                        <Segmented
                        onChange={this.handleSegment} 
                        block 
                        options={oprions}
                        />
                    </Col> */}
                    <Col 
                    span={8}
                    className={activeKey=="1"?"employment-status-button employment-status-button-active":"employment-status-button"}
                    >
                        <div
                        className="employment-status-button-div"
                        onClick={this.handleSegment.bind(this,"1")}
                        >
                            <Row
                            className="employment-status-row"
                            >
                                <Col span={15}>
                                    <span style={{fontSize:"11px"}}>
                                        Upcoming Confirmation
                                    </span>
                                </Col>
                                <Col span={5}>
                                    <Badge count={99} style={{marginTop:"3px"}}>
                                        <BellOutlined style={{fontSize:"20px",marginTop:"8px"}}/>
                                    </Badge>
                                </Col>
                                <Col span={4}>
                                    <FileExcelOutlined 
                                    style={{fontSize:"20px",marginTop:"8px"}}/>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col 
                    span={8}
                    className={activeKey==="2"?"employment-status-button employment-status-button-active":"employment-status-button"}
                    onClick={this.handleSegment.bind(this,"2")}
                    >
                        <Row
                        className="employment-status-row"
                        >
                            <Col span={15}>
                                <span style={{fontSize:"11px"}}>
                                    Upcoming Retirement
                                </span>
                            </Col>
                            <Col span={5}>
                                <Badge count={99} style={{marginTop:"3px"}}>
                                    <BellOutlined style={{fontSize:"20px",marginTop:"8px"}}/>
                                </Badge>
                            </Col>
                            <Col span={4}>
                                <FileExcelOutlined 
                                style={{fontSize:"20px",marginTop:"8px"}}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col 
                    span={8}
                    className={activeKey==="3"?"employment-status-button employment-status-button-active":"employment-status-button"}
                    onClick={this.handleSegment.bind(this,"3")} 
                    >
                        <Row
                        className="employment-status-row"
                        >
                            <Col span={15}>
                                <span style={{fontSize:"11px"}}>
                                    Upcoming Contract End
                                </span>
                            </Col>
                            <Col span={5}>
                                <Badge count={99} style={{marginTop:"3px"}}>
                                    <BellOutlined style={{fontSize:"20px",marginTop:"8px"}}/>
                                </Badge>
                            </Col>
                            <Col span={4}>
                                <FileExcelOutlined 
                                style={{fontSize:"20px",marginTop:"8px"}}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{overflow:"hidden",height:"81%"}}>
                    <Col span={24}
                    style={{
                        overflow:"hidden",
                        height:"100%"
                    }} 
                    >
                        {activeComponent}
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
export default EmploymentStatus;