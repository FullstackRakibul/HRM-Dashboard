import React,{
    forwardRef,
    useEffect,
    useState
} from 'react';
import { 
    useSelector,
    useDispatch
} from 'react-redux';
import {
    Card,
    Row,
    Col,
    Select,
    Form,
    Button,
    Radio
} from 'antd';
import { 
    useGetUserListsQuery
} from '../../../../Redux/api/apiSlice';
import { getUserListsData } from '../../../../Redux/features/HRM/hrmSlice';
import axios from 'axios';
import ConfigureAxios from '../../../../utils/axios';
import './index.less'
import { Error, Success } from '../../../../utils/Message';

const ModeSetup=forwardRef(({propsLists},ref)=>{
    const dispatch=useDispatch();
    const {classLists}=useSelector((state)=>state.ui);
    // const {userLists}=useSelector((state)=>state.hrm);
    const {info}=useSelector((state)=>state.user);

    const [users,setUsers]=useState([]);
    const [searchkey,setSearchKey]=useState('');
    const {data:userLists,isLoading,isError}=useGetUserListsQuery({UserId:'341319',SearchKey:''});

    // Get Init User Lists
    // useEffect(()=>{
    //     if(info.UserId){
    //         dispatch(getUserListsData({UserId:info.UserId,SearchKey:''}))
    //     }
    // },[])
    
    useEffect(()=>{
        if(userLists?.length){
            const lists=configUserLists(userLists);

            if(lists.length){
                setUsers(lists);
            }
        }
    },[userLists])


    const handleOnSearch=(SearckKey)=>{
        setSearchKey(SearckKey);
       //console.log(SearckKey)
        // if(info.UserId){
        //     dispatch(getUserListsData({UserId:info.UserId,SearchKey:SearckKey}))
        // }
    }
    const configUserLists=(lists)=>{
        let myLists=[];
        const newLists=[...lists];

        if(newLists.length){
            newLists.map((data)=>{
                let newObj={
                    label:data.username,
                    value:data.UserId,
                    key:data.UserId
                }
                myLists=[...myLists,newObj]
            })
        }

        return myLists;
    }
    // const onSave=(values)=>{
    //     const myObj={
    //         "p_call_name":"saveHrmModeinfo",
    //         "p_HRMModeId":values.mode,
    //         "p_UserId":values.user.value,
    //         "p_EntryUserId":info?.UserId?info.UserId:''
    //     }
    //     // axios.post(`/hrm/createUpdateMode`,JSON.stringify(myObj))
    //     // .then((response)=>{
    //     //     if(response.status===200 && response.data.IsSuccess){
    //     //         Success("Successfully Mode Updated.",{},{})
    //     //         ref.current.resetFields();
    //     //         dispatch(getUserListsData({UserId:info.UserId,SearchKey:''}))
    //     //     }
    //     // }).catch((error)=>{
    //     //     Error("Mode Updated Failed!",{},{},{});
    //     //     ref.current.resetFields();
    //     // })
    //     addUpdateUserMode({data:JSON.stringify(myObj)}).then((response)=>{
    //         if(response.data===1){
    //             Success("Successfully Mode Updated.",{},{})
    //             ref.current.resetFields();
    //         }
    //     });

        
    // }

    const handleFormValueChange=(changeValues,allValues)=>{
        try{
            if(changeValues.user){
                // if(searchkey){
                //     dispatch(getUserListsData({UserId:info.UserId,SearchKey:searchkey}))
                // }
                const {value}=changeValues.user;

                axios.get(`/hrm/getHrmModeWithUser?UserId=${value}`)
                .then((response)=>{
                   if(response.status===200 && response.data.IsSuccess){
                        let modeData=response.data.data;
                        console.log(modeData[0].HRMModeId)
                        ref.current.setFieldsValue({
                            mode:`${modeData[0].HRMModeId}`
                        })
                   }
                })
            }
        }catch{

        }
    }

    const {form,onSave}=propsLists;
    return(
        <>
           {
            isLoading?<h2>Loading...</h2>:(
                <Form
                ref={ref}
                form={form}
                onFinish={onSave}
                onValuesChange={handleFormValueChange}
                >
                    <Row>
                        <Col 
                        span={12}
                        >
                            <Form.Item
                            colon={false}
                            tooltip={{
                                placement:"bottom",
                                title:"Select User"
                            }}
                            rules={[
                                {
                                    required:true,
                                    message:"User Is Required."
                                }
                            ]}
                            name="user"
                            labelAlign='left'
                            label="Select User"
                            wrapperCol={{
                                span:18 
                            }}
                            labelCol={{
                                span:6
                            }}
                            >
                               
                                <Select
                                size='small'
                                options={users}
                                labelInValue={true}
                                optionFilterProp='label'
                                showSearch
                                // onPress={()=>{
                                //     if(searchkey){
                                //         console.log("Hello")
                                //     }
                                // }}
                                //onSearch={handleOnSearch}
                                />
                            </Form.Item>
                        </Col>
                        <Col 
                        span={12}
                        >
                            <Form.Item
                             colon={false}
                             tooltip={{
                                placement:"bottom",
                                title:"HRM Mode"
                             }}
                             rules={[
                                {
                                    required:true,
                                    message:"Mode Is Required."
                                }
                            ]}
                            name="mode"
                            label="Select Mode"
                            labelAlign='left'
                            wrapperCol={{
                                span:18  
                             }}
                            labelCol={{
                                span:6
                            }}
                            style={{
                                paddingLeft:'10px'
                            }}
                            >
                                <Radio.Group>
                                    <Radio value="1"> Normal Mode </Radio><br/>
                                    <Radio value="2"> Compliance Mode </Radio><br/>
                                    <Radio value="3"> Third Mode </Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col span={24} style={{
                            textAlign:'right'
                        }}>
                            <Form.Item
                            style={{
                                marginBottom:'0px !important'
                            }}
                            >
                                <Button
                                size="small"
                                htmlType='submit'
                                icon={<i className="fas fa-save"></i>}
                                className={`${classLists?.globalSaveButton?classLists.globalSaveButton:''}`}
                                >
                                    Save
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row> */}
                </Form>
            )
           }
        </>
    )
})
export default ModeSetup;