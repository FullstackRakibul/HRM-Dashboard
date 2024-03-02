import React from 'react';
import {
    Button
} from 'antd';
import {
    ClearOutlined
} from '@ant-design/icons'
import { useSelector } from 'react-redux';
import './index.less';

const ResetButton=({onSubmit,children})=>{
    const {classLists}=useSelector((state)=>state.ui);
    return(
        <>
            <Button
            size='small'
            type='primary'
            className={`${classLists?.globalResetButton?classLists.globalResetButton:''}`}
            icon={<ClearOutlined/>}
            onClick={onSubmit}
            >
                {children}
            </Button>
        </>
    )
}

export default ResetButton;