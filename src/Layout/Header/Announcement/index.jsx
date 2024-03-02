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
import './index.css';
import Lists from './lists';




const Announcement=({announcement,setAnnouncement})=>{
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
                <span className='profile-title'>Announcement</span>
                </Col>
            </Row>}
            placement="right"
            width={400}
            onClose={()=>{
                setAnnouncement(!announcement)
            }}
            open={announcement}
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
export default Announcement;