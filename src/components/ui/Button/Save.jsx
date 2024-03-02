import React from 'react';
import {
    Button
} from 'antd';
import {
    SaveOutlined
} from '@ant-design/icons'
import { 
    useSelector 
} from 'react-redux';
import './index.less';

const SaveButton=({onSubmit,children,disabled=false})=>{
    const {
        classLists
    }=useSelector((state)=>state.ui);
    return(
        <>
            <Button
            size='small'
            type='primary'
            icon={<SaveOutlined />}
            onClick={onSubmit}
            disabled={disabled}
            className={`${classLists?.globalSaveButton?classLists.globalSaveButton:''}`}
            >
                {children}
            </Button>
        </>
    )
}

export default SaveButton;