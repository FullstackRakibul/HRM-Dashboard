import { 
    Avatar, 
    Divider, 
    List, 
    Skeleton,
    Row,
    Col,
    Card,
    Button 
} from 'antd';
import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import DataTable from '../../../ui/ListsTable/index2';
import MainLists from '../../../ui/Lists/index'
import {
    ExclamationOutlined
} from '@ant-design/icons';
import Module from './index.module.css';
import './index.css';



const fakeDataUrl ='https://randomuser.me/api/?results=5&inc=name,gender,email,nat,picture&noinfo';

class ContinuosAbsent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loading:false,
            data:[]
        }
    }
    loadMoreData = () => {
        console.log("Callll")
        if (this.state.loading) {
          return;
        }
        this.setState({
            loading:true
        })
        fetch(fakeDataUrl)
          .then((res) => res.json())
          .then((body) => {
            // setData([...data, ...body.results]);
            this.setState({
                data:[...this.state.data,...body.results],
                loading:false
            })
          })
          .catch(() => {
            this.setState({
                loading:false
            })
          });
    };

    componentDidMount=()=>{
        this.loadMoreData();
    }

    handleButton=(item)=>{
        console.log(item);
    }

    render(){
        let {data}=this.state;
        const ContainerHeight = 300;
        return(
            <Fragment>
                <Row className={Module.leaveDeduction}>
                    <Col 
                    span={24}
                    style={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                    >
                        <b 
                        className={Module.leaveDeductionTitle}
                        >Continuous Absent (Last 10 days)</b>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <MainLists
                        propsLists={{
                            data,
                            height:ContainerHeight,
                            loadMoreData:this.loadMoreData
                        }}
                        />
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
export default ContinuosAbsent