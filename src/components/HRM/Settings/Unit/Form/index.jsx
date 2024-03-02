import React,{
    useState,
    useEffect
} from 'react';
import {
    Form, 
    Row,
    Col,
    Input,
    Checkbox,
    Select
} from 'antd';
import { 
    useSelector 
} from 'react-redux';
import { 
    useNavigate 
} from 'react-router-dom';
import { 
    useGetCompanyListsQuery,
    useGetCompanyByIdQuery,
    useGetZoneListsQuery,
    useCreateUpdateCompanyMutation
} from '../../../../../Redux/features/HRM/hrmAPI';
import axios from 'axios';
import ConfigureAxios from '../../../../../utils/axios';
import { 
    Success 
} from '../../../../../utils/Message';
import CommonFormItem from '../../../../ui/FormItem/Common';
import CheckBoxForItem from '../../../../ui/FormItem/Checkbox';
import SaveButton from '../../../../ui/Button/Save';
import ResetButton from '../../../../ui/Button/Reset';


const UnitForm=({IsUpdate,UnitId})=>{
    const history=useNavigate();
    const [form] = Form.useForm();
    const {info}=useSelector((state)=>state.user);
    return(
        <>
            <Form
            size='small'
            form={form}
            >
                <Row>
                    <Col span={12}>
                        <CommonFormItem
                        propsLists={{
                            tooltip:{
                                title:"Company"
                            },
                            rules:{
                                required:true,
                                message:"Company Is Required."
                            },
                            name:"Company",
                            label:"Company"
                        }}
                        >
                            <Select
                            labelInValue={true}
                            optionFilterProp='label'
                            showSearch
                            allowClear
                            />
                        </CommonFormItem>
                    </Col>
                    <Col span={12}>
                        <CommonFormItem
                        propsLists={{
                            tooltip:{
                                title:"Unit Name"
                            },
                            rules:{
                                required:true,
                                message:"Unit Name Is Required."
                            },
                            name:"unitName",
                            label:"Unit Name"
                        }}
                        >
                            <Input/>
                        </CommonFormItem>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <CommonFormItem
                        propsLists={{
                            tooltip:{
                                title:"Unit Name (Bangla)"
                            },
                            name:"unitNameBan",
                            label:"Unit Name (Bangla)"
                        }}
                        >
                            <Select
                            labelInValue={true}
                            optionFilterProp='label'
                            showSearch
                            allowClear
                            />
                        </CommonFormItem>
                    </Col>
                    <Col span={12}>
                        <CommonFormItem
                        propsLists={{
                            tooltip:{
                                title:"Unit Name"
                            },
                            rules:{
                                required:true,
                                message:"Unit Name Is Required."
                            },
                            name:"unitName",
                            label:"Unit Name"
                        }}
                        >
                            <Input/>
                        </CommonFormItem>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
export default UnitForm;