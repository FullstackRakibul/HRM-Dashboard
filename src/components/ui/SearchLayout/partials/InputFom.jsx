import React, { 
    useState,
    useEffect
} from 'react';
import {
    Row,
    Col,
    Input,
    Select,
    Button,
    Checkbox,
    Divider
} from 'antd';
import { 
    useDispatch,
    useSelector 
} from 'react-redux';
import { 
    useGetAllEmployeeStatusQuery,
    useGetAllEmployeeTypeQuery
} from '../../../../Redux/features/common/commonApi';
import { 
    handleCommonSearchChange 
} from '../../../../Redux/features/search/searchSlice';
import { 
    configDataListForSelect 
} from '../../../../utils/commonMethod';
import { 
    commonSelectProps 
} from '../../../../utils/Contants';
import CommonFormItem from '../../FormItem/Common';
import CheckboxFormItem from '../../FormItem/Checkbox';

const InputForm=({propsLists,onSearch})=>{
    const dispatch=useDispatch();
    const {searchState,setSearchState,isLoading}=propsLists;
    const {commonSearch}=useSelector((state)=>state.search);
    const [typeLists,setTypeLists]=useState([]);
    const [statusLists,setStatusLists]=useState([]);

    const {data:statusData}=useGetAllEmployeeStatusQuery();
    const {data:typeData}=useGetAllEmployeeTypeQuery();

    useEffect(()=>{
        if(statusData){
            if(statusData.length){
                const lists=configDataListForSelect(statusData,"EmpStatusName","EmpStatusID");
                console.log("Lists: ",lists)
                if(lists){
                    if(lists.length){
                        setStatusLists(lists)
                    }
                }
            }
        }
    },[statusData]);

    useEffect(()=>{
        if(typeData){
            if(typeData.length){
                const lists=configDataListForSelect(typeData,"EmpTypeName","EmpTypeID");
                if(lists){
                    if(lists.length){
                        setTypeLists(lists)
                    }
                }
            }
        }
    },[typeData]);

    const handleCheckInput=(e)=>{
        const {name,checked}=e.target;

        setSearchState((state)=>{
            return{
                ...state,
                [name]:checked
            }
        })
        // dispatch(handleCommonSearchChange({
        //     name:name,
        //     value:checked
        // }))
    }

    const handleTextInput=(e)=>{
        const {name,value}=e.target;

        setSearchState((state)=>{
            return{
                ...state,
                [name]:value
            }
        })
        // dispatch(handleCommonSearchChange({
        //     name:name,
        //     value:value
        // }))
    }

    const handleSelect=(name,values)=>{
        const {value}=values;
        setSearchState((state)=>{
            return{
                ...state,
                [name]:value
            }
        })

        // dispatch(handleCommonSearchChange({
        //     name:name,
        //     value:value
        // }))
    }

    const {status,searchKey,selected,type,section,wing,team}=searchState;
    console.log("Calllllldddd")
    return(
        <>
            <Row>
                <Col span={7}>
                    <CommonFormItem
                    propsLists={{
                        tooltip:{
                            title:"Status"
                        },
                        name:"status",
                        label:"Status"
                    }}
                    >
                        <Select
                        onChange={(values)=>{
                            handleSelect("status",values);
                        }}
                        value={status}
                        name="status"
                        {...commonSelectProps}
                        options={statusLists}
                        size='small'/>
                    </CommonFormItem>
                </Col>
                <Col span={7}>
                    <CommonFormItem
                    propsLists={{
                        tooltip:{
                            title:"Type"
                        },
                        name:"type",
                        label:"Type"
                    }}
                    >
                        <Select
                        onChange={(values)=>{
                            handleSelect("type",values);
                        }}
                        name="type"
                        value={type}
                        {...commonSelectProps}
                        options={typeLists}
                        size='small'/>
                    </CommonFormItem>
                </Col>
                <Col span={10}>
                    <CommonFormItem
                    propsLists={{
                        tooltip:{
                            title:"Searck Key"
                        },
                        name:"searchKey",
                        label:"Search Key"
                    }}
                    name="searchKey"
                    >
                        <Input 
                        onChange={handleTextInput}
                        value={searchKey}
                        name="searchKey"
                        size='small'
                        placeholder='Employee ID / Name / Desgination'
                        />
                    </CommonFormItem>
                </Col>
            </Row>
            <Row>
                {/* <Col span={8}>
                    <CommonFormItem
                    propsLists={{
                        tooltip:{
                            title:"Type"
                        },
                        name:"type",
                        label:"Type"
                    }}
                    >
                        <Select
                        onChange={(values)=>{
                            handleSelect("type",values);
                        }}
                        name="type"
                        value={type}
                        {...commonSelectProps}
                        options={typeLists}
                        size='small'/>
                    </CommonFormItem>
                </Col> */}
                <Col span={4}>
                    <CheckboxFormItem
                    propsLists={{
                        tooltip:{
                            title:"Selected"
                        },
                        name:"selected",
                        label:"Selected",
                        wrapperCol:10,
                        labelCol:14
                    }}
                    >
                        <Checkbox
                        onChange={handleCheckInput} 
                        name="selected"
                        size='small'
                        checked={selected}
                        />
                    </CheckboxFormItem>
                </Col>
                <Col span={5}>
                    <CheckboxFormItem
                    propsLists={{
                        tooltip:{
                            title:"No Section"
                        },
                        name:"noSection",
                        label:"No Section",
                        wrapperCol:10,
                        labelCol:14
                    }}
                    >
                        <Checkbox
                        onChange={handleCheckInput}
                        name="section"
                        size='small'
                        checked={section}
                        />
                    </CheckboxFormItem>
                </Col>
                <Col span={5}>
                    <CheckboxFormItem
                    propsLists={{
                        tooltip:{
                            title:"No Wing"
                        },
                        name:"noWing",
                        label:"No Wing",
                        wrapperCol:10,
                        labelCol:14
                    }}
                    >
                        <Checkbox
                        onChange={handleCheckInput}
                        name="wing"
                        size='small'
                        checked={wing}
                        />
                    </CheckboxFormItem>
                </Col>
                <Col span={5}>
                    <CheckboxFormItem
                    propsLists={{
                        tooltip:{
                            title:"No Team"
                        },
                        name:"noTeam",
                        label:"No Team",
                        wrapperCol:10,
                        labelCol:14
                    }}
                    >
                        <Checkbox
                        onChange={handleCheckInput}
                        name="team" 
                        size='small'
                        checked={team}
                        />
                    </CheckboxFormItem>
                </Col>
                <Col 
                span={5}
                style={{
                    textAlign:'right'
                }}
                >
                    <Button
                    size='small'
                    onClick={onSearch}
                    loading={isLoading}
                    style={{
                        background:"#10239e",
                        borderColor:'#10239e',
                        color:"#fff"
                    }}
                    icon={<i class="fas fa-search-plus"></i>}
                    >
                        Search
                    </Button>
                </Col>
            </Row>                        
        </>
    )
}
export default InputForm;