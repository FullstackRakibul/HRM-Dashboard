import React from 'react';
import{
    Row,
    Col
} from 'antd'
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
                    <Row style={{padding:'0px 50px'}}>
                        <Col span={24} className='user-profile-card'>
                            <table style={{width:'100%'}} className='employee-user-table'>
                                <tr>
                                    <td colSpan={6} style={{width:'50%',textAlign:'left'}}>
                                        <span>Employee Code</span>
                                    </td>
                                    <td colSpan={6} style={{width:'50%',textAlign:'right'}}>
                                       <span className='info-data'><strong> 001548</strong></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={6} style={{width:'50%',textAlign:'left'}}>
                                        <span>Desgination</span>
                                    </td>
                                    <td colSpan={6} style={{width:'50%',textAlign:'right'}}>
                                        <span className='info-data'><strong>Assistant Manager</strong></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={6} style={{width:'50%',textAlign:'left'}}>
                                        <span>Department</span>
                                    </td>
                                    <td colSpan={6} style={{width:'50%',textAlign:'right'}}>
                                        <span className='info-data'><strong>Information Technology</strong></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={6} style={{width:'50%',textAlign:'left'}}>
                                        <span>Email</span>
                                    </td>
                                    <td colSpan={6} style={{width:'50%',textAlign:'right'}}>
                                        <span className='info-data'><strong>shuvo.it@hameemgroup.com</strong></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={6} style={{width:'50%',textAlign:'left'}}>
                                        <span>Phone</span>
                                    </td>
                                    <td colSpan={6} style={{width:'50%',textAlign:'right'}}>
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