import React from 'react';
import {
    Button
} from 'antd';
import { useSelector } from 'react-redux';
import './index.less';

const ListsButton=({onSubmit,IsDisable,children})=>{
    const {classLists}=useSelector((state)=>state.ui);
    return(
        <>
            <Button
            size='small'
            style={{
                marginLeft:'10px'
            }}
            icon={<i className="fas fa-list"></i>}
            className={`${classLists?.globalListsButton?classLists.globalListsButton:''}`}
            onClick={onSubmit}
            disabled={IsDisable?IsDisable:false}
            >
                {children}
            </Button>
        </>
    )
}

export default ListsButton;