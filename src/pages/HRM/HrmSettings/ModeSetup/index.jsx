import React,{useState,useRef} from 'react';
import {
    Button,
    Form
} from 'antd';
import { useSelector } from 'react-redux';
import { 
    useAddUpdateUserModeMutation 
} from '../../../../Redux/api/apiSlice';
import { 
    Success 
} from '../../../../utils/Message';
import ContentContainer from '../../../../components/ui/Container/ContentContainer';
import ComponentHeader from '../../../../components/ui/ComponentHeader';
import ModeSetup from '../../../../components/HRM/Settings/ModeSetup';

const ModeSetupPage=()=>{
    const modeFormRef=useRef(null);
    const [form] = Form.useForm();

    const {classLists}=useSelector((state)=>state.ui);
    const {info}=useSelector((state)=>state.user);
    const [addUpdateUserMode, { isLoading:createLoding, isSuccess, isError:createError }] = useAddUpdateUserModeMutation();

    // For Reset Mode Setup Form
    const handleResetForm=()=>{
        modeFormRef.current.resetFields();
    }

    // Handle On Save Form
    const onSave=(values)=>{
        //console.log(values)
        const myObj={
            "p_call_name":"saveHrmModeinfo",
            "p_HRMModeId":values.mode,
            "p_UserId":values.user.value,
            "p_EntryUserId":info?.UserId?info.UserId:''
        }
        // axios.post(`/hrm/createUpdateMode`,JSON.stringify(myObj))
        // .then((response)=>{
        //     if(response.status===200 && response.data.IsSuccess){
        //         Success("Successfully Mode Updated.",{},{})
        //         ref.current.resetFields();
        //         dispatch(getUserListsData({UserId:info.UserId,SearchKey:''}))
        //     }
        // }).catch((error)=>{
        //     Error("Mode Updated Failed!",{},{},{});
        //     ref.current.resetFields();
        // })
        addUpdateUserMode({data:JSON.stringify(myObj)}).then((response)=>{
            if(response.data===1){
                Success("Successfully Mode Updated.",{},{})
                form.resetFields();
            }
        });
        
    }
    return(
        <>
            <ComponentHeader>
                <Button
                size='small'
                className={`${classLists?.globalResetButton?classLists.globalResetButton:''}`}
                icon={<i className="fas fa-window-restore"></i>}
                onClick={handleResetForm}
                >
                    Reset
                </Button>
                <Button 
                size='small'
                style={{
                    marginLeft:'10px'
                }}
                icon={<i className="fas fa-save"></i>}
                className={`${classLists?.globalSaveButton?classLists.globalSaveButton:''}`}
                onClick={()=>form.submit()}
                //onClick={handleOnSave}
                >
                    Save
                </Button>
            </ComponentHeader>
            <ContentContainer>
                <ModeSetup
                propsLists={{
                   form,
                   onSave
                }}
                ref={modeFormRef}
                />
            </ContentContainer>
        </>
    )
}
export default ModeSetupPage;