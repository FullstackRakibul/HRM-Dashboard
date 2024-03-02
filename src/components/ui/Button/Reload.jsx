import React from 'react';
import {
    Button
} from 'antd';
import {
    ReloadOutlined
} from '@ant-design/icons'
import { 
    useSelector 
} from 'react-redux';
import './index.less';

const ReloadButton=({onSubmit,children})=>{
    const {classLists}=useSelector((state)=>state.ui);
    return(
        <>
            <Button
            size='small'
            type='primary'
            icon={<ReloadOutlined />}
            onClick={onSubmit}
            className={`${classLists?.globalReloadButton?classLists.globalReloadButton:''}`}
            >
                {children}
            </Button>
        </>
    )
}
export default ReloadButton;