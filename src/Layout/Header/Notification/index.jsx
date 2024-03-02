import React,{
    useState,
    useEffect
} from 'react';
import {
    Row,
    Col,
    Button,
    Drawer,
    Divider,
    Space
} from 'antd';
import { 
    useDispatch,
    useSelector 
} from 'react-redux';
import {
    UserOutlined,
    DashboardOutlined,
    UsergroupAddOutlined
} from '@ant-design/icons'
import Lists from './lists';
import './index.css';




const Notification=({notification,setNotification})=>{
    return(
        <>
            <Drawer
            className='profile-drawer'
            title={<Row>
                <Col 
                style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
                }}
                span={24}>
                <span className='profile-title'>Notification</span>
                </Col>
            </Row>}
            placement="right"
            width={400}
            onClose={()=>{
                setNotification(!notification)
            }}
            open={notification}
            >
                <Row>
                    <Col span={24}>
                       <Lists/>
                    </Col>
                </Row>
            </Drawer>
        </>
    )
}
export default Notification;