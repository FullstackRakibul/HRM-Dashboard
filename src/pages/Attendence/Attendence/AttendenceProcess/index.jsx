import React,{
    useState,
    useEffect
} from 'react';
import {
    Row,
    Col
} from 'antd';
import axios from 'axios';
import ConfigureAxios from '../../../../utils/axios';
import { useNavigate } from 'react-router-dom';
import { 
    useSelector,
    useDispatch 
} from 'react-redux';
import { getUserLists } from '../../../../Redux/features/search/searchSlice';
import ComponentHeader from '../../../../components/ui/ComponentHeader';
import NormalContainer from '../../../../components/ui/Container/NormalContainer';
import ResetButton from '../../../../components/ui/Button/Reset';
import SaveButton from '../../../../components/ui/Button/Save';
import AttendenceProcess from '../../../../components/Attendence/Attendence/AttendenceProcess';

const AttendenceProcessPage=()=>{
    const history=useNavigate();
    const dispatch=useDispatch();


    const handleOnClick=()=>{
       
       // console.log('DDDD')
    }
    return(
        <>
            <ComponentHeader>
                <Row>
                    <Col span={12}>
                        <ResetButton
                        handleOnClick={()=>history('/hrm/settings/CompanyInfo')}
                        />
                        <SaveButton
                        onSave={handleOnClick}
                        //onClick={handleOnSave}
                        >
                            Search
                        </SaveButton>
                    </Col>
                </Row>
            </ComponentHeader>
            <NormalContainer>
                <AttendenceProcess/>
            </NormalContainer>
        </>
    )
}

export default AttendenceProcessPage;