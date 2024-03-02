import React from 'react';
import {
    Row,
    Col,
    Form,
    Button,
    Select,
    Input,
    DatePicker,
    TimePicker 
} from 'antd';
import { 
    useSelector 
} from 'react-redux';
import NormalCard from '../../../ui/Card/NormalCard';
import CommonFormItem from '../../../ui/FormItem/Common';
import { 
    useGetTenderListsForPublishQuery 
} from '../../../../Redux/features/publishTender/tenderPublishApi';
import './index.less'


const NewTenderPublishComponent=({props})=>{
    const UserId=localStorage.getItem("UserId");
    const {}=useGetTenderListsForPublishQuery({UserId:parseInt(UserId)});
    const {listsForPublish}=useSelector((state)=>state.publish)
    return(
        <>
            <Col 
            span={24}
            className='new-tender-form'
            >
                <NormalCard
                styles={{
                    marginBottom:'8px'
                }}
                >
                    <Form
                    size='small'
                    form={props.form}
                    onFinish={props.onFormSubmit}
                    >
                        <Row>
                            <Col 
                            span={12}
                            >
                                <CommonFormItem
                                propsLists={{
                                    tooltip:{
                                        title:"Tender Lists"
                                    },
                                    rules:{
                                        required:true,
                                        message:"Tender Lists Is Required."
                                    },
                                    name:"TenderList",
                                    labelAlign:"right",
                                    label:"Tender Lists"
                                }}
                                >
                                    <Select 
                                    labelInValue={true}
                                    optionFilterProp='label'
                                    showSearch
                                    allowClear
                                    options={listsForPublish}
                                    />
                                </CommonFormItem> 
                            </Col>
                            <Col 
                            span={12}
                            >
                                <CommonFormItem
                                propsLists={{
                                    tooltip:{
                                        title:"Open Date"
                                    },
                                    rules:{
                                        required:true,
                                        message:"Open Date Is Required."
                                    },
                                    name:"OpenDate",
                                    labelAlign:"right",
                                    label:"Open Date"
                                }}
                                >
                                    <DatePicker 
                                    style={{
                                        width:'100%'
                                    }}
                                    //format="YYYY-MM-DD HH:mm:ss"
                                    showTime 
                                    />
                                    {/* <TimePicker
                                    style={{
                                        width:'50%'
                                    }}
                                    /> */}
                                </CommonFormItem> 
                            </Col>
                        </Row>
                        <Row>
                            <Col 
                            span={12}
                            >
                                <CommonFormItem
                                propsLists={{
                                    tooltip:{
                                        title:"Close Date"
                                    },
                                    rules:{
                                        required:true,
                                        message:"Close Date Is Required."
                                    },
                                    name:"CloseDate",
                                    labelAlign:"right",
                                    label:"Close Date"
                                }}
                                >
                                    <DatePicker
                                    showTime  
                                    style={{
                                        width:'100%'
                                    }}
                                    //format="YYYY-MM-DD HH:mm:ss"
                                    />
                                </CommonFormItem> 
                            </Col>
                        </Row>
                    </Form>
                </NormalCard>
            </Col>
        </>
    )
}
export default NewTenderPublishComponent;