import React from 'react';
import {
    Button
}  from 'antd';
import {
    FundViewOutlined
} from '@ant-design/icons'
import { 
    useSelector 
} from 'react-redux';
import './index.less';


const ViewButton=({onSubmit,children})=>{
    const {
        classLists
    }=useSelector((state)=>state.ui)
    return(
        <>
            <Button
            size='small'
            type='primary'
            icon={<FundViewOutlined />}
            onClick={onSubmit}
            className={`${classLists?.globalViewButton?classLists.globalViewButton:''}`}
            >
                {children}
            </Button>
        </>
    )
}
export default ViewButton;