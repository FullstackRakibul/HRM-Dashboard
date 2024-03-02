import React,{
    useState,
    useEffect
} from 'react';
import {
    Form, 
    Row,
    Col,
    Input,
    Checkbox,
    Select
} from 'antd';
import { 
    useSelector 
} from 'react-redux';
import { 
    useNavigate 
} from 'react-router-dom';
import { 
    useGetCompanyListsQuery,
    useGetCompanyByIdQuery,
    useGetZoneListsQuery,
    useCreateUpdateCompanyMutation
} from '../../../../../Redux/features/HRM/hrmAPI';
import axios from 'axios';
import ConfigureAxios from '../../../../../utils/axios';
import { 
    Success 
} from '../../../../../utils/Message';
import CommonFormItem from '../../../../ui/FormItem/Common';
import CheckBoxForItem from '../../../../ui/FormItem/Checkbox';
import SaveButton from '../../../../ui/Button/Save';
import ResetButton from '../../../../ui/Button/Reset';


const CompanyForm=({IsUpdate,CompanyId})=>{
    const history=useNavigate();
    const [form] = Form.useForm();
    const {info}=useSelector((state)=>state.user);

    const [companyLists,setCompanyLists]=useState([]);
    const [zoneLists,setZoneLists]=useState([]);

    const [skipDetails,setSkipDetails]=useState(false);
    const [skipCompany,setSkipCompany]=useState(false);
    const [skipZone,setSkipZone]=useState(false);

    // Rtk Hooks
    const {data:detailsData,isLoading,isSuccess}=useGetCompanyByIdQuery(CompanyId,{refetchOnMountOrArgChange:true,skip:!skipDetails});
    const {data:companyData,compnayIsLoading,companyIsSuccess}=useGetCompanyListsQuery(undefined,{skip:!skipCompany});
    const {data:zoneData,zoneIsLoading,zoneIsSuccess}=useGetZoneListsQuery(undefined,{skip:!skipZone});
    const [createUpdateCompany]=useCreateUpdateCompanyMutation();

    useEffect(()=>{
        if(CompanyId){
            setSkipDetails(true);
        }else{
            form.resetFields();
            setSkipDetails(false);
        }
    },[CompanyId]);

    useEffect(()=>{
        setSkipCompany(true);
    },[])

    useEffect(()=>{
        setSkipZone(true);
    },[])

    // Set Fileds Value if user come from lists
    useEffect(()=>{
        if(detailsData){
           if(detailsData.length){
            const infos=detailsData[0];

            console.log(infos)
            form.setFieldsValue({
                companyName:infos.CompanyName,
                companyNameBangla:infos.CompanyNameBan,
                companyShortName:infos.CompanyShortName?infos.CompanyShortName:'',
                parentCompany:{
                    label:infos?.RootCompanyName?infos.RootCompanyName:'',
                    value:infos?.RootCompanyId?infos.RootCompanyId:'',
                    key:infos?.RootCompanyId?infos.RootCompanyId:''
                },
                isActive:infos.IsActive?true:false,
                companyAddress:infos?.CompanyAddress?infos.CompanyAddress:'',
                companyAddressBangla:infos?.CompanyAddressBan?infos.CompanyAddressBan:'',
                companyZone:{
                    label:infos?.ZoneName?infos.ZoneName:'',
                    value:infos?.ZoneID?infos.ZoneID:'',
                    key:infos?.ZoneID?infos.ZoneID:''
                }
            })
           }
        }
    },[detailsData])

    useEffect(()=>{
        if(companyData){
            if(companyData.length){
                const lists=configCompanyLists(companyData);
                setCompanyLists(lists);
            }
        }
    },[companyData])

    useEffect(()=>{
        if(zoneData){
            if(zoneData.length){
                const lists=configZoneLists(zoneData);
                setZoneLists(lists);
            }
        }
    },[zoneData])

    const configCompanyLists=(lists)=>{
        let myLists=[...lists];
        let returnLists=[];
        if(myLists.length){
            myLists.map((d)=>{
                const myObj={
                    label:d.CompanyName,
                    value:d.CompanyId,
                    key:d.CompanyId
                }
                returnLists=[...returnLists,myObj];
            })
        }

        return returnLists;
    }

    const configZoneLists=(lists)=>{
        let myLists=[...lists];
        let returnLists=[];
        if(myLists.length){
            myLists.map((d)=>{
                const myObj={
                    label:d.ZoneName,
                    value:d.ZoneID,
                    key:d.ZoneID
                }
                returnLists=[...returnLists,myObj];
            })
        }

        return returnLists;
    }

    const handleSave=(values)=>{
        //console.log("vale : ",values)

        const myData={
            p_CompanyId:detailsData?.length?detailsData[0].CompanyId:0,
            p_rootCompany:values?.parentCompany?.value?parseInt(values.parentCompany.value):0,
            p_CompanyName:values.companyName?values.companyName:'',
            p_CompanyNameBan:values.companyNameBangla?values.companyNameBangla:'',
            p_CompanyShortName:values.companyShortName?values.companyShortName:'',
            p_CompanyAddress:values?.companyAddress?values.companyAddress:'',
            p_CompanyAddressBan:values?.companyAddressBangla?values.companyAddressBangla:'',
            p_ZoneID:values?.companyZone?.value?parseInt(values.companyZone.value):0,
            p_IsActive:values.isActive?1:0,
            p_UserId:info.UserId?info.UserId:'',
            p_TerminalId:''
        }

        createUpdateCompany({data:JSON.stringify(myData)})
        .then((response)=>{
            if(response.data===1){
                let msg="";

                if(IsUpdate){
                    msg="Successfully Company Updated.";
                }else{
                    msg="Successfully Company Create."
                }
                Success(msg,{},{})
                form.resetFields();
                history("/hrm/settings/CompanyInfo");
            }
        }).catch((errr)=>{
            console.log(errr)
        })
    }

    const handleFormValueChange=(changeValues,allValues)=>{
        try{
            if(changeValues.companyShortName){
                const companyShortName=changeValues.companyShortName.toUpperCase();

                ConfigureAxios();
                axios.get(`/hrm/checkCompanyShortName?CompanyShortName=${companyShortName}&CompanyId=${CompanyId?CompanyId:0}`)
                .then((response)=>{
                   if(response.status===200 && response.data.IsSuccess){
                        if(response.data.data){
                            form.setFields([
                                {
                                  name: "companyShortName",
                                  errors: ["Company short name should be unique."],
                                },
                            ]);
                        }else{
                        }
                   }
                })
            }
        }catch{

        }
    }
    return(
        <>
            <Form
            size='small'
            form={form}
            onFinish={handleSave}
            onValuesChange={handleFormValueChange}
            >
                <Row>
                    <Col span={12}>
                        <CommonFormItem
                        propsLists={{
                            tooltip:{
                                title:"Company Name"
                            },
                            rules:{
                                required:true,
                                message:"Company Name Is Required."
                            },
                            name:"companyName",
                            labelAlign:"right",
                            label:"Company Name"
                        }}
                        >
                            <Input/>
                        </CommonFormItem>
                    </Col>
                    <Col span={12} style={{paddingLeft:"5px"}}>
                        <CommonFormItem
                        propsLists={{
                            tooltip:{
                                title:"Company Name Bangla"
                            },
                            name:"companyNameBangla",
                            labelAlign:"right",
                            label:"Company Name (Ban)"
                        }}
                        >
                            <Input/>
                        </CommonFormItem>
                    </Col>
                </Row>
                
                <Row>
                    <Col span={12}>
                        <CommonFormItem
                        propsLists={{
                            tooltip:{
                                title:"Company Short Name"
                            },
                            rules:{
                                required:true,
                                message:"Company Short Name Is Required."
                            },
                            name:"companyShortName",
                            labelAlign:"right",
                            label:"Company Short Name"
                        }}
                        >
                            <Input/>
                        </CommonFormItem>
                    </Col>
                    <Col span={12} style={{paddingLeft:"5px"}}>
                        <CommonFormItem
                        propsLists={{
                            tooltip:{
                                title:"Company Zone"
                            },
                            name:"companyZone",
                            labelAlign:"right",
                            label:"Company Zone"
                        }}
                        >
                            <Select
                            options={zoneLists}
                            labelInValue={true}
                            optionFilterProp='label'
                            showSearch
                            allowClear
                            />
                        </CommonFormItem>
                    </Col>
                </Row>
                <Row style={{marginBottom:"5px"}}>
                    <Col span={12}>
                        <CommonFormItem
                        propsLists={{
                            tooltip:{
                                title:"Company Address"
                            },
                            name:"companyAddress",
                            labelAlign:"right",
                            label:"Company Address"
                        }}
                        >
                            <Input.TextArea rows={3}/>
                        </CommonFormItem>
                    </Col>
                    <Col span={12} style={{paddingLeft:"5px"}}>
                        <CommonFormItem
                        propsLists={{
                            tooltip:{
                                title:"Company Address Bangla"
                            },
                            name:"companyAddressBangla",
                            labelAlign:"right",
                            label:"Company Address (Ban)"
                        }}
                        >
                            <Input.TextArea rows={3}/>
                        </CommonFormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <CheckBoxForItem
                        propsLists={{
                            tooltip:{
                                title:"Is Active"
                            },
                            name:"isActive",
                            labelAlign:"right",
                            label:"Is Active",
                            valuePropName:"checked"
                        }}
                        >
                            <Checkbox size='small'>Is Active</Checkbox>
                        </CheckBoxForItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}  style={{textAlign:'right'}}>
                        <Form.Item>
                            <ResetButton
                            onReset={()=>{
                                form.resetFields();
                                if(IsUpdate){
                                    history("/hrm/settings/CompanyInfo");
                                }
                            }}
                            />
                            <SaveButton
                            onSave={()=>form.submit()}
                            >
                                {
                                    IsUpdate?"Update":"Save"
                                }
                            </SaveButton>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
export default CompanyForm;