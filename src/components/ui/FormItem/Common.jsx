import React from 'react';
import {
    Form
} from 'antd';

const CommonFormItem=({propsLists,children})=>{
    const {tooltip,rules,name,labelAlign,label,wrapperCol,labelCol}=propsLists;
    return(
        <>
            <Form.Item
            colon={false}
            tooltip={{
                placement:tooltip?.placement?tooltip.placement:'bottom',
                title:tooltip?.title?tooltip.title:''
            }}
            rules={[
                {
                    required:rules?.required?rules.required:false,
                    message:rules?.message?rules.message:''
                }
            ]}
            name={name?name:''}
            labelAlign={`${labelAlign?labelAlign:'right'}`}
            label={label?label:''}
            wrapperCol={{
                span:wrapperCol?wrapperCol:16
            }}
            labelCol={{
                span:labelCol?labelCol:8
            }}
            >
                {children}
            </Form.Item>
        </>
    )
}
export default CommonFormItem;