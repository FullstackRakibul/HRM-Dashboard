import React from 'react';
import{
    Row,
    Col,
    Button
} from 'antd';
import {
    UserOutlined
} from '@ant-design/icons'
import Logo from '../../../../assets/images/User.png'
import Module from './index.module.css'
import './index.css';

const MyProfile=()=>{
    return(
        <>
            <Row className={`user-profile `+Module.userProfile}>
                <Col span={24}>
                    <img src={Logo}/>
                    <h2>Rahajul Amin Shuvo</h2>
                    <Button size='small' type='primary' icon={<i className="fas fa-user"></i>} className='view-profile-button'>View Full Profile</Button>
                    <Row style={{padding:'0px 5px'}}>
                        <Col span={24} className='user-profile-card'>
                            <table style={{width:'100%'}} className='employee-user-table'>
                                <tr>
                                    <td colSpan={6} style={{width:'50%',textAlign:'center'}}>
                                       <span className='info-data'><strong> 001548</strong></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={12} style={{width:'50%',textAlign:'center'}}>
                                        <span className='info-data'><strong>Assistant Manager</strong></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={6} style={{width:'50%',textAlign:'center'}}>
                                        <span className='info-data'><strong>Information Technology</strong></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={6} style={{width:'50%',textAlign:'center'}}>
                                        <span className='info-data'><strong>shuvo.it@hameemgroup.com</strong></span>
                                    </td>
                                </tr>
                                <tr>

                                    <td colSpan={6} style={{width:'50%',textAlign:'center'}}>
                                        <span className='info-data'><strong>0139999999</strong></span>
                                    </td>
                                </tr>
                            </table>
                        </Col>
                    </Row>
                </Col>
            </Row> 
        </>
    )
}
export default MyProfile;