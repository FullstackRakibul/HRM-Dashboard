import React from 'react';
import {
    Row,
    Col,
    Card,
    Breadcrumb
} from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './index.css';
import { useEffect,useState } from 'react';


const Index=()=>{
    const MenuLists=useSelector((state)=>state.menu.menus);
    const [routes,setRoutes]=useState([{
            path: '/dashboard',
            title: 'Dashboard'
        }
    ]);

    // let routes=[
    //     {
    //       path: '/dashboard',
    //       title: 'Dashboard',
    //     },
    //     // {
    //     //     path: '/user',
    //     //     title: 'User',
    //     //     menu: {
    //     //      items:[
    //     //       {
    //     //           path: '/user1',
    //     //           title: 'User1',
    //     //       },
    //     //       {
    //     //           path: '/user2',
    //     //           title: 'User2',
    //     //       },
    //     //      ]
    //     //     },
    //     //   },
    //   ]
    useEffect(()=>{
        if(MenuLists.length){
            setRoutes(MenuLists)
        }
        //console.log(routes)
    },[MenuLists])
    return(
        <Row >
            <Col span={24} className='breadcrumb-main'>
                <Card className='breadcrumb-card-container'>
                    <Breadcrumb 
                    style={{color:"#133b6c"}}
                    items={routes}
                    >
                        {/* <Breadcrumb.Item 
                        //onClick={handleDashboard}
                        >
                            <Link to="/dashboard" key="/dashboard">Dashboard</Link>
                        </Breadcrumb.Item> */}
                    </Breadcrumb>
                </Card>
            </Col>
        </Row>
    )
}
export default Index;