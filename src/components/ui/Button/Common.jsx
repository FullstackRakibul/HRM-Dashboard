import React from 'react';
import {
    Button
} from 'antd';
import { useSelector } from 'react-redux';
import './index.less';

const CommonButton=({handleOnClick,children,icon})=>{
    const {classLists}=useSelector((state)=>state.ui);
    return(
        <>
            <Button
            size='small'
            style={{
                marginRight:'6px'
            }}
            icon={<i className="fas fa-list"></i>}
            className={`${classLists?.globalListsButton?classLists.globalListsButton:''}`}
            onClick={handleOnClick}
            disabled={IsDisable?IsDisable:false}
            >
                {children}
            </Button>
        </>
    )
}

export default CommonButton;