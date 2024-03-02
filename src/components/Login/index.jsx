import { 
    Col, 
    Row,
    Card,
    Button,
    Input,
    Form,
    Checkbox
} from 'antd';
import React,{
    useEffect,
    useState
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { 
    Success,
    Warning 
} from '../../utils/Message';
import { 
    getAllModuleMenu 
} from '../../Redux/features/menus';
import axios from 'axios';
import configureAxios from '../../utils/axios';
import LogoImage from '../../assets/images/login-logo.png'
import { getMenuLists } from '../../utils/getMenus';
import getModuleLists from '../../utils/getModule';

import './index.less'

const Login=()=>{
    const history=useNavigate();
    const dispatch=useDispatch();

    useEffect(()=>{
        configureAxios();
    },[])


    const handleLogin=async(state)=>{
        // if(state.userId==="Reporter" && state.password==="1234"){
        //     localStorage.setItem("token",state.userId);
        //     localStorage.setItem("role","reporter");
        //     Success("Login Success.",{},{})
        //     history('/');
        // }else if(state.userId==="Approver" && state.password==="1234"){
        //     localStorage.setItem("token",state.userId);
        //     localStorage.setItem("role","approver");
        //     Success("Login Success.",{},{})
        //     history('/');
        // }else if(state.userId==="Printer" && state.password==="1234"){
        //     localStorage.setItem("token",state.userId);
        //     localStorage.setItem("role","printer");
        //     Success("Login Success.",{},{})
        //     history('/');
        // }else{
        //     Warning("User Id or Password are wrong",{},{});
        // }
        let data={
            email:state.userId,
            password:state.password
        }


        // localStorage.setItem("token", true);
        // Success("Login Success.",{},{})
        // history('/dashboard/user');
        axios.post('/login',JSON.stringify(data))
        .then((response)=>{
            //console.log(response)
            if(response.status===200 && response.data.data.UserId){
                const {token}=response.data.data;
                //console.log(token);
                localStorage.setItem("token", JSON.stringify(token));
                localStorage.setItem("UserId",JSON.stringify(response.data.data.UserId))
                // localStorage.setItem("UserId",response.data.UserId);
                // localStorage.setItem("EmpId",response.data.EmpId);
                // localStorage.setItem("EmpNo",response.data.EmpNo);
                // //getMenuLists();
                // getModuleLists();
                // //localStorage.setItem("role","printer");
                // Success("Login Success.",{},{})
                history('/dashboard/user');
            }
        }).catch((error)=>{
            Warning("User Id or Password are wrong",{},{});
        })
    }
    return(
        <>
            <Row
            style={{
                display:'flex'
            }}
            className='login-main-container'
            >
                <Col span={12}>
                </Col>
                <Col 
                span={12}
                className='login-container'
                >
                   <Row>
                    <Col 
                    span={24}
                    >
                        <img 
                        src={LogoImage}
                        className='login-logo'
                        />
                    </Col>
                   </Row>
                   <Card
                   className='login-card-container'
                   style={{
                    width:'40rem',
                    borderRadius:"2px !important"
                   }}
                   >
                        <Row>
                            <Col span={24}>
                                <Form
                                wrapperCol={{
                                    span:24
                                }}
                                labelCol={{
                                    span:0
                                }}
                                autoComplete="off"
                                onFinish={handleLogin}
                                >
                                    <Row>
                                        <Col 
                                        span={24}
                                        style={{
                                            display:'flex',
                                            flexDirection:'column',
                                            justifyContent:'center',
                                            alignItems:'center'
                                        }}
                                        >
                                            <h3 className='sign-in-title'>Sign In</h3>
                                            <span className='sign-in-description'>Sign in and start automating your everyday operations!</span>
                                        </Col>
                                    </Row>
                                    <Form.Item
                                    colon={false}
                                    tooltip={{
                                        placement:"bottom",
                                        title:"User Id"
                                    }}
                                  
                                    labelAlign='left'
                                    name="userId"
                                    rules={[
                                        {
                                            required:'true',
                                            message:"Email is required."
                                        }
                                    ]}
                                    >
                                        <Input
                                        placeholder='youremail@gmail.com'
                                        />
                                    </Form.Item>

                                    <Form.Item
                                    colon={false}
                                    tooltip={{
                                        placement:"bottom",
                                        title:"Password"
                                    }}
                                    // label="Password"
                                    labelAlign='left'
                                    name="password"
                                    rules={[
                                        {
                                            required:true,
                                            message:"Password is required."
                                        }
                                    ]}
                                    >
                                        <Input.Password
                                         placeholder='******'
                                        />
                                    </Form.Item>
                                    <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    wrapperCol={{
                                        offset: 0,
                                        span: 24,
                                    }}
                                    >
                                    <Checkbox>Remember me</Checkbox>
                                    </Form.Item>
                                    <Form.Item
                                    wrapperCol={{
                                        offset:0,
                                        span:24
                                    }}
                                    >
                                        <Row>
                                            <Col 
                                            span={24}
                                            style={{
                                                textAlign:'right'
                                            }}
                                            >
                                                <Button
                                                type='primary'
                                                htmlType='submit'
                                                className='login-button'
                                                // size='large'
                                                >
                                                    Sign In
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                   </Card>
                </Col>
            </Row>
        </>
    )
}
export default Login;