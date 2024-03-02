import React,{
    useEffect,
    useState
} from 'react';
import {
    Row,
    Col,
    Tabs
} from 'antd';
import { 
    useNavigate,
    useLocation 
} from 'react-router-dom';
import {
    CloseCircleOutlined
} from '@ant-design/icons';
import { 
    removeItems 
} from '../../Redux/features/tabs/tabsSlice';
import { 
    useSelector,
    useDispatch
} from 'react-redux';
import './index.less';

const {TabPane}=Tabs;
const TabNavigation=()=>{
    const dispatch=useDispatch();
    const history=useNavigate();
    const location = useLocation();
    const {
        items
    }=useSelector((state)=>state.tab);
    const [itemsLists,setItemLists]=useState([]);

    useEffect(()=>{
        if(items.length){
            let lists=configItemLists(items);

            if(lists.length){
                setItemLists(lists);
            }else{
                setItemLists([])
            }
        }
    },[items])

    const configItemLists=(lists)=>{
        let myLists=[...lists];
        let newLists=[];
        if(myLists.length){
            myLists.map((dta)=>{
                const newObj={
                    label:dta.MenuName,
                    key:"/"+dta.MenuPath
                }
                newLists=[...newLists,newObj];
            })
        }

        return newLists;
    }
    const onChange=(e)=>{
        history(e)
    }
    const onEdit=(e)=>{
        let path=e.slice(1);
        let position=0;
        const newLists=items.filter((d,index)=>{
            if(d.MenuPath==path){
                position=index;
                return false;
            }
            return true;
        })
        dispatch(removeItems(newLists));
        
        history(items[position-1]?.MenuPath)
    }
    return(
        <>
            <Row 
            style={{
                position:'fixed',
                top:'85px',
                zIndex:'10',
                left:'219px',
                minHeight:'47px',
                overflow:'hidden',
                width:'calc(100vw - 42px)',
                backgroundColor:'#F1F1F1'
            }}
            className='tab-navigation-container'
            >
                <Col 
                span={24}
                >
                    <div
                    >
                    <Tabs
                    hideAdd
                    items={itemsLists}
                    //closeIcon={<CloseCircleOutlined />}
                    onChange={onChange}
                    activeKey={location.pathname.toString()}
                    type="editable-card"
                    onEdit={onEdit}
                    >

                    </Tabs>
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default TabNavigation;