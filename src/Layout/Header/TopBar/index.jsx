import React,{
    useState,
    useEffect
} from 'react';
import {
    Row,
    Col,
    Button,
    Space,
    Drawer,
    Card,
    Badge,
    Avatar,
    Modal
} from 'antd';
import {
    UpCircleOutlined,
    CloseOutlined
} from '@ant-design/icons';
import { 
    useDispatch, useSelector
} from 'react-redux';
import { 
    getMenuWithModuleId,
    getAllModuleMenu,
    addNewModuleName
} from '../../../Redux/features/menus';
import { 
    updateIsOpenModule 
} from '../../../Redux/features/UI';
import Icons from '@ant-design/icons';
import UserImg from '../../../assets/images/User.png';
import Profile from '../Profile';
import Logo from '../../../assets/images/ha-meem-group-dynamic-365-logo-02.png'
import ModuleMainLogo from '../../../assets/images/erp-module-main-logo.png'
import DownIcons from '../../../assets/images/module_menu.png'
import CustomerImage from '../../../assets/images/Customerservice.png'
import HCM from '../../../assets/images/Hired.png'
import { 
    lists1,
    list2 
} from './data';
import './index.less'
import NormalCard from '../../../components/ui/Card/NormalCard';


const gridStyle = {
    width: '22%',
    margin:'1.5% 1.5%',
    textAlign: 'center',
};

const TopBarContainer=()=>{
    const dispatch=useDispatch();
    const {isOpenModule}=useSelector((state)=>state.ui);
    const [open, setOpen] = useState(false);
    const [openModal,setOpenModal]=useState(false);
    const [profileDrawer,setProfileDrawer]=useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    const handleOnModuleChange=(id)=>{
        if(id==1){
            dispatch(addNewModuleName("Employee Self Service"))
            dispatch(getAllModuleMenu(lists1));
        }else if(id==2){
            dispatch(addNewModuleName("Human Capital Management"))
            dispatch(getAllModuleMenu(list2));
        }else if(id==3){
            dispatch(getAllModuleMenu([]));
            dispatch(addNewModuleName("Support Desk"))
        }else if(id==4){
            dispatch(getAllModuleMenu([]));
            dispatch(addNewModuleName("Industrial Engineering"))
        }else if(id==5){
            dispatch(getAllModuleMenu([]));
            dispatch(addNewModuleName("Production Planning & Control"))
        }
        setOpen(false);
    }
    return(
        <>
            <Row className='header-top light'>
                <Col 
                span={5}
                className='erp-logo-area'
                >
                    <img 
                    className='down-icon-image' 
                    src={DownIcons}
                    // onClick={showDrawer}
                    onClick={()=>{
                        setTimeout(()=>{
                            dispatch(updateIsOpenModule(!isOpenModule))
                        },0)
                    }}
                    />
                    <img
                    src={Logo}
                    className='erp-logo'
                    />
                </Col>
                <Col span={14}>
                </Col>
                <Col 
                span={5}
                className='erp-setting-area'
                >
                    <Badge  dot={true}>
                        <Avatar
                        icon={<i className="fas fa-bullhorn"></i>}
                        onClick={() =>{
                           // setAnnouncement(true)
                        }}
                        >

                        </Avatar>
                    </Badge>
                    <Badge dot={true}>
                        <Avatar
                        icon={<i className="fas fa-bell"></i>}
                        onClick={() =>{
                           // setNotification(true)
                        }}
                        >

                        </Avatar>
                    </Badge>
                    <Badge>
                        <Avatar
                        icon={<i className="fas fa-cog"></i>}
                        onClick={() =>{
                            //setOpen(true)
                        }}
                        >

                        </Avatar>
                    </Badge>
                    <Badge>
                        <Avatar
                        icon={<i className="fas fa-cog"></i>}
                        onClick={() =>{
                            //setOpen(true)
                        }}
                        >

                        </Avatar>
                    </Badge>
                    <Badge>
                        <Avatar
                        icon={<i className="fas fa-cog"></i>}
                        onClick={() =>{
                            //setOpen(true)
                        }}
                        >
                        </Avatar>
                    </Badge>

                    <Badge>
                        <Avatar
                        icon={<i className="fas fa-user-alt"></i>}
                        // icon={<img src={UserImg}/>}
                        onClick={() =>{
                            setProfileDrawer(true)
                        }}
                        >

                        </Avatar>
                    </Badge>
                </Col>
            </Row>
            <Drawer
            // mask={true}
            // maskStyle={{
            //     backgroundColor:'none'
            // }}
            // title="Drawer with extra actions"
            placement="top"
            height={600}
            // onClose={onClose}
            open={open}
            className='module-lists-drawer'
            >
                <Row>
                    <Col 
                    span={24}
                    style={{
                        display:'flex',
                        justifyContent:'flex-end',
                        alignItems:'center'
                    }}
                    >
                        <Button
                        icon={<CloseOutlined />}
                        size={20}
                        shape='circle'
                        style={{
                            backgroundColor:'#cf1322',
                            color:'#fff',
                            border:'1px solid #cf1322'
                        }}
                        onClick={onClose}
                        >

                        </Button>
                    </Col>
                </Row>
                <Row
                className='module-inner-container'
                >
                    <Col 
                    span={24}
                    >
                        <Row>
                            <Col span={24} style={{textAlign:'center'}}>
                                <img src={ModuleMainLogo}/>
                                <br/><br/>
                                <span className='module-title'>
                                Automate and Optimize Core Business Processes.<br/>Helping Everyone in Organization To Accomplish More.
                                </span>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col span={24} style={{textAlign:'center'}}>
                               <Card
                               className='module-card' 
                               >
                                    <Card.Grid 
                                    style={gridStyle}
                                    onClick={()=>{
                                        handleOnModuleChange(1)
                                    }}
                                    >
                                        <img 
                                        src={CustomerImage}
                                        className="module-image"
                                        /><br/><br/>
                                        <span className="module-description">Employee Self Service</span>
                                    </Card.Grid>
                                    <Card.Grid  
                                    style={gridStyle}
                                    onClick={()=>{
                                        handleOnModuleChange(2)
                                    }}
                                    >
                                        <img 
                                        src={HCM}
                                        className="module-image"
                                        /><br/><br/>
                                        <span className="module-description">Human Capital Management</span>
                                    </Card.Grid>
                                    <Card.Grid 
                                    style={gridStyle}
                                    onClick={()=>{
                                        handleOnModuleChange(3)
                                    }}
                                    >
                                        <img 
                                        src={CustomerImage}
                                        className="module-image"
                                        /><br/><br/>
                                        <span className="module-description">Support Desk</span>
                                    </Card.Grid>
                                    <Card.Grid 
                                    style={gridStyle}
                                    onClick={()=>{
                                        handleOnModuleChange(4)
                                    }}
                                    >
                                        <img 
                                        src={CustomerImage}
                                        className="module-image"
                                        /><br/><br/>
                                        <span className="module-description">Industrial Engineering</span>
                                    </Card.Grid>
                                    <Card.Grid 
                                     onClick={()=>{
                                        handleOnModuleChange(5)
                                    }}
                                    style={gridStyle}>
                                        <img 
                                        src={CustomerImage}
                                        className="module-image"
                                        /><br/><br/>
                                        <span className="module-description">Production Planning & Control</span>
                                    </Card.Grid>
                                    <Card.Grid style={gridStyle}>
                                        <img 
                                        src={CustomerImage}
                                        className="module-image"
                                        /><br/><br/>
                                    </Card.Grid>
                                    <Card.Grid style={gridStyle}>
                                        <img 
                                        src={CustomerImage}
                                        className="module-image"
                                        /><br/><br/>
                                    </Card.Grid>
                                    <Card.Grid style={gridStyle}>
                                        <img 
                                        src={CustomerImage}
                                        className="module-image"
                                        /><br/><br/>
                                    </Card.Grid>
                               </Card>
                            </Col>  
                        </Row>
                    </Col>
                </Row>
            </Drawer>

           

            <Profile profileDrawer={profileDrawer} setProfileDrawer={setProfileDrawer}/>
        </>
    )
}
export default TopBarContainer;