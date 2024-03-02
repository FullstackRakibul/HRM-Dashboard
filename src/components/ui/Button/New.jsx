import React from 'react';
import {
    Button
} from 'antd';
import {
    PlusOutlined
} from '@ant-design/icons'
import { useSelector } from 'react-redux';
import './index.less';

const NewButton=({onSubmit,children})=>{
    const {classLists}=useSelector((state)=>state.ui);
    return(
        <>
            <Button
            size='small'
            type='primary'
            onClick={onSubmit}
            className={`${classLists?.globalNewButton?classLists.globalNewButton:''}`}
            icon={<PlusOutlined />}
            >
                {children}
            </Button>
        </>
    )
}

export default NewButton;