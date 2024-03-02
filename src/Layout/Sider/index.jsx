import {
    useState,
    useEffect
} from 'react'
import {
    MenuFoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    MenuUnfoldOutlined,
    FileAddOutlined,
    IdcardOutlined,
    PrinterOutlined,
    ContainerOutlined,
    CopyrightOutlined
} from '@ant-design/icons';
import { 
    Button, 
    Layout,
    Menu, 
    theme,
    Row,
    Col
} from 'antd';
import { 
    Link,
    useLocation
} from 'react-router-dom';
import { 
    useDispatch,
    useSelector 
} from 'react-redux';
import { getMenuWithModuleId } from '../../Redux/features/menus';
import {
    getMenuItemDetailsWithPath 
} from '../../utils/commonMethod';
import { 
    addItems 
} from '../../Redux/features/tabs/tabsSlice';
import menuConfig from '../../config/menuConfig'
import { getMenuLists } from '../../utils/getMenus';
import MyIcon from '../../../src/components/ui/Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import staticMenu from './staticMenu';
import myMenu from './staticMenu2';
import './index.less'
const {  
    Sider 
} = Layout;
const SubMenu = Menu.SubMenu;


const SiderMain=({setCollapsed,collapsed})=>{
    const location=useLocation();
    const dispatch=useDispatch();
    const {isSidebar}=useSelector((state)=>state.ui)
    let {pathname}=location;
    const [current,setCurrent]=useState("");
    const roles=localStorage.getItem('role')
    const filterMenu=menuConfig.filter((mnu)=>mnu.roles.includes(roles))
    const [menuLists,setMenulists]=useState([]);

    const MenuLists=useSelector((state)=>state.menu.all);

    // For Set Current Active Key
    useEffect(()=>{
        let myPath=pathname?pathname.substr(1):'';
        if(myPath){
            let pathArray=myPath.split('/');

            let pathArraylen=pathArray.length;

            if(pathArraylen){
                let lastPath=pathArray[pathArraylen-1];
                let secondLastPath=pathArray[pathArraylen-2];

                if(lastPath=="lists" || secondLastPath=="lists"){
                    let myCurrent="";
                    if(lastPath=="lists"){
                        pathArray.pop();
                        myCurrent=pathArray.join('/');
                       
                        setCurrent(myCurrent);
                        
                    }else if(secondLastPath=="lists"){
                        let newArray=pathArray.slice(0,-2);
                        myCurrent=newArray.join('/');
                        setCurrent(myCurrent);
                    }
                }else{
                    setCurrent(pathname?pathname.substr(1):'')
                }
            }else{
                setCurrent(pathname?pathname.substr(1):'')
            }
        }
    },[pathname])

    useEffect(()=>{
        // let MenuLists=sessionStorage.getItem("ModuleLists");
        // MenuLists=JSON.parse(MenuLists)
        //console.log(MenuLists.length)
        // if(MenuLists.length){
        //     let menus=getMenuNodeReduce(myMenu);
        //     setMenulists(menus)
        // }
        let menus=getMenuNodeReduce(MenuLists);
        setMenulists(menus)
    },[MenuLists])


    // handle on menu change / module change
    const handleOnChange=async(item)=>{
        //console.log(item)
        let {ModuleID}=item;
        
        //init menu
        let MenuLists=[];

        // Check Module Id is Valid
        if(ModuleID){
            MenuLists=await getMenuLists(ModuleID);

            if(MenuLists.length){
                dispatch(getMenuWithModuleId(MenuLists));
            }
        }else{
            console.log("Invalid Module ID")
        }
    }

    const handleItemChange=(item)=>{
        console.log("items: ",item)
    }
    // Menu lists reduce
    const getMenuNodeReduce=(menuListss)=>{
        return menuListss.reduce((pre,item)=>{
            if(!item.children){
                pre=[...pre,(
                    <Menu.Item 
                    className={`${item.IconName?'static-dashboard-menu':'normal-menu-item'}`}
                    key={item.MenuPath?item.MenuPath:''}
                    style={{
                        paddingLeft:'0px !important'
                    }}
                    // style={{overflow:'scroll'}}
                    icon={<MyIcon icon={`${item.IconName}`}></MyIcon>}
                    >
                        <Link  to={item.MenuPath}>
                            <strong>
                                {item.MenuName}
                            </strong>
                        </Link>
                    </Menu.Item>
                )
                ]
            }else{
                pre=[...pre,(
                    <SubMenu
                    key={item.MenuPath}
                    icon={item.IconName?<MyIcon icon={`${item.IconName}`}></MyIcon>:''}
                    title={
                    <span>
                        <span>{item.MenuName}</span>
                    </span>
                    }
                    className={`${item.IconName?'module-menu-item ':'sub-module-menu-item'}`}
                    >
                       {/* <ul
                       className={`sub-module-menu-wrapper`}
                       eventkey={item.MenuPath}
                       > */}
                        {getMenuNodeReduce(item.children)}
                       {/* </ul> */}
                    </SubMenu>
                )]
            }
            return pre;
        },[])
    }

    function handleClick(e) {
        const {key}=e;
        if(key=="/dashboard/user"){
            const obj={
                MenuPermissionId: '79494',
                key: 83,
                MenuName: 'Home',
                MenuPath: 'dashboard/user',
                SortOrder: 10,
                ModuleId: 3
            }
            dispatch(addItems(obj))
        }else{
            const path=e.key;
            const data=getMenuItemDetailsWithPath(MenuLists,"MenuPath",path);
            dispatch(addItems(data))
        }
        

    }
    const handleOnOpenKeyChange=(e)=>{
       
    }
    // console.log(location)
    return(
        <>
            <Sider 
            // trigger={null} 
            trigger={<Row
                style={{
                    // position:'absolute',
                    // bottom:'0',
                    // display:'flex',
                    // justifyContent:'flex-start',
                    // paddingLeft:'19px',
                    // alignItems:'center',
                    // minHeight:'35px'
                }}
                >
                    <Col 
                    span={24}
                    style={{
                        display:'flex',
                        alignItems:'center',
                        position:'relative',
                        // minWidth:'219px'
                    }}
                    >
                        <MenuFoldOutlined
                        //onClick={setCollapsed}
                        className='expand-collapsed-trigger'
                        />
                        &nbsp;&nbsp;&nbsp; 
                        
                       
                        <span className='copyright-text'>
                            <CopyrightOutlined
                            style={{
                                color:'#52c41a'
                            }} 
                            />
                            &nbsp;
                            IT Department
                        </span>
                    </Col>
                </Row>
            } 
            collapsible 
            collapsed={collapsed}
            className={`${collapsed?'collapsed-sidebar static-class-sidebar':'expand-sidebar static-class-sidebar'}`}
            style={{
                // backgroundColor:'#1d39c4',
                background:"#fff",
                overflow:'auto',
                overflowY:'none !important',
                position:'relative',
                height:'calc(100vh - 127px)',
                paddingTop:'5px'
            }}
            >
                <div className="logo" />
                <Row>
                    <Col 
                    span={24}
                    style={{
                        height:'calc(100vh - 190px)',
                        overflowY:'scroll'
                    }}
                    >
                        <Menu
                        style={{
                            // height:'calc(100vh - 300px) !important',
                            minHeight:'calc(100vh - 20px) !important',
                            background:'transparent',
                            opacity:'.8',
                            paddingRight:'3px'
                        }}
                        // theme="light"
                        onClick={handleClick}
                        mode="inline"
                        //selectedKeys={[current]}
                        selectedKeys={[current]}
                        onOpenChange={handleOnOpenKeyChange}
                        // defaultSelectedKeys={['1']}
                        >
                            <Menu.Item 
                            // onClick={()=>{
                            //     handleOnChange(item)
                            // }}
                            style={{
                                paddingLeft:'10px !important'
                            }}
                            key={"dashboard/user"}
                            className='static-dashboard-menu'
                            icon={<MyIcon icon={`glyphicon glyphicon-home`}></MyIcon>}
                            >
                                <Link key="/dashboard/user" to="/dashboard/user">
                                    <strong>
                                        Home
                                    </strong>
                                </Link>
                            </Menu.Item>
                            {
                                menuLists
                            }

                        </Menu>
                    </Col>
                </Row>
                {/* <hr/> */}
                {/* <Row
                style={{
                    position:'absolute',
                    bottom:'0',
                    display:'flex',
                    justifyContent:'flex-start',
                    paddingLeft:'19px',
                    alignItems:'center',
                    minHeight:'35px'
                }}
                >
                    <Col 
                    span={24}
                    style={{
                        display:'flex',
                        alignItems:'center',
                        position:'relative',
                        minWidth:'219px'
                    }}
                    >
                        <MenuFoldOutlined
                        onClick={setCollapsed}
                        className='expand-collapsed-trigger'
                        />
                        &nbsp;&nbsp;&nbsp; 
                        
                       
                        <span className='copyright-text'>
                            <CopyrightOutlined
                            style={{
                                color:'#52c41a'
                            }} 
                            />
                             &nbsp;
                            IT Department
                        </span>
                    </Col>
                </Row> */}
                
            </Sider>
        </>
    )
}
export default SiderMain;

