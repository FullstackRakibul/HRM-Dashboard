import React from 'react';
import {
    Button
} from 'antd';
import {
    DeleteOutlined,
} from '@ant-design/icons'
import { 
    useSelector 
} from 'react-redux';
import './index.less';

const DeleteButton=({onSubmit,children})=>{
    const {classLists}=useSelector((state)=>state.ui);
    return(
        <>
            <Button
            size='small'
            type='primary'
            danger
            className={`${classLists?.globalDeleteButton?classLists.globalDeleteButton:''}`}
            icon={<DeleteOutlined/>}
            onClick={onSubmit}
            >
                {children}
            </Button>
        </>
    )
}

export default DeleteButton;