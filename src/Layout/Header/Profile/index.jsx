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
} from '@ant-design/icons';
import { Link,useNavigate } from 'react-router-dom';
import MyProfile from './MyProfile';
import './index.css';




const Profile=({profileDrawer,setProfileDrawer})=>{
    const history=useNavigate();
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
                <span className='profile-title'>Profile</span>
                </Col>
            </Row>}
            placement="right"
            width={300}
            onClose={()=>{
                setProfileDrawer(!profileDrawer)
            }}
            open={profileDrawer}
            >
                <Row>
                    <Col span={24}>
                        {/* <MyProfile/> */}
                        {/* <h4>Development in progress.</h4> */}
                    </Col>
                </Row>
                <Divider/>
                <Row>
                    <Col 
                    span={24}
                    style={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        width:'100%',
                        position:'relative'
                    }}
                    >
                        <Button 
                        size='small' 
                        icon={<i className="fas fa-sign-out-alt"></i>} 
                        className='logout-button'
                        onClick={()=>{
                            localStorage.clear();
                            window.location.href="/";
                        }}
                        style={{
                            position:'absolute',
                            top:'200px'
                        }}
                        >
                            Logout
                        </Button>
                    </Col>
                </Row>
            </Drawer>
        </>
    )
}
export default Profile;