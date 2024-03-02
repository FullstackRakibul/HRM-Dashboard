import {
  MenuFoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  UndoOutlined,
  UpOutlined,
  ArrowUpOutlined
} from '@ant-design/icons';
import {
  FloatButton
} from 'antd';
import { 
  Button, 
  Layout, 
  Menu,
  Row,
  Col,
  Card,
  theme,
  BackTop
} from 'antd';
import { 
  useNavigate 
} from 'react-router-dom';
import { 
  useDispatch,
  useSelector 
} from 'react-redux';
import { 
  updateIsOpenModule 
} from '../Redux/features/UI';
import { 
  getAllModuleMenu 
} from '../Redux/features/menus';
import getModuleLists from '../utils/getModule';
import { 
  useEffect, 
  useState 
} from 'react';
import ModuleMain from './Header/Module';
import SiderMain from './Sider';
import ContentMain from './Content';
import HeaderMain from './Header';
import TabNavigation from './TabNavigation';
import BreadCrumb from './BreadCrumb';
import { 
  getUserInfoWithId 
} from '../Redux/features/user/userSlice';
import './index.less';
const { 
  Header, 
  Sider, 
  Content 
} = Layout;


const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 2,
  color: '#fff',
  textAlign: 'center',
  fontSize: 24,
};

const MainLayout = ({}) => {
  const history=useNavigate();
  const dispatch=useDispatch();

  const {
    classLists,
    isOpenModule
  }=useSelector((state)=>state.ui)

  const [collapsed, setCollapsed] = useState(false);

  useEffect(()=>{
    let UserId=localStorage.getItem("EmpId");

    // console.log(UserId)
    dispatch(getUserInfoWithId({userId:UserId}))
  },[])
  useEffect(()=>{
    let UserId=localStorage.getItem("UserId");

    if(UserId){
      getModuleMenuSubmenu(UserId)
    }

  },[])

  const getModuleMenuSubmenu=async(UserId)=>{
    let MenuLists=[];
    if(UserId){
      //MenuLists=await getModuleLists(UserId);
      let menus=sessionStorage.getItem("MenuLists")
      //console.log(menus)
      menus=JSON.parse(menus);

      //console.log("Menu :",menus)
      
      if(menus.length){
        dispatch(getAllModuleMenu(menus))
      }
    }
  }

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout 
      className={`main-layout-container ${classLists?.background?classLists.background:''}`}
      onClick={()=>{
        if(isOpenModule){
          dispatch(updateIsOpenModule(false))
        }
      }}
      >
        <SiderMain 
        collapsed={collapsed}
        setCollapsed={setCollapsed} 
        />
        <Layout 
        style={{
          backgroundColor:'#f1f1f1',
          overflowX:'hidden'
        }}
        className='content-container'
        >
          <HeaderMain 
          collapsed={collapsed} 
          setCollapsed={setCollapsed}
          colorBgContainer={colorBgContainer}
          />
          <TabNavigation/>
          <ContentMain 
          collapsed={collapsed}
          colorBgContainer={colorBgContainer}
          />
        </Layout>
        {/* <BackTop duration="1000">
          <div style={style}>
            <ArrowUpOutlined
            style={{
              color:'green'
            }}
             />
          </div>
        </BackTop> */}
        <FloatButton.BackTop
        visibilityHeight={0} 
        />
      </Layout>
      {/* <Row
      style={{
        position:'fixed',
        top:'42px',
        left:'30px',
        zIndex:100,
      }}
      className={`${isOpenModule?'visible-module-lists-container':'hidden-module-lists-container'}`}
      >
        <Col 
        span={24}
        >
          
          <ModuleMain/>
        </Col>
      </Row> */}

      <Row
      className='module-main-layout'
      // className={`${isOpenModule?'visible-module-lists-container-2':'hidden-module-lists-container-2'}`}
      >
        <Col 
        span={24}
        >
          
          <ModuleMain/>
        </Col>
      </Row>
    </>
  );
};
export default MainLayout;