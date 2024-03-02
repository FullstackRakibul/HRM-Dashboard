import React,{
  useState,
  useEffect
} from 'react';
import {
    Layout,
    Row,
    Col,
    Button,
    Drawer,
    Radio,
    Space,
    Divider,
    Tabs,
    Avatar,
    Badge
} from 'antd'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SettingOutlined,
    UserSwitchOutlined
} from '@ant-design/icons';
import { 
  useDispatch,
  useSelector 
} from 'react-redux';
import { 
  handleSidebar,
  updateIsOpenModule
} from '../../Redux/features/UI';
import { Link } from 'react-router-dom';
import HOne from './Heading/HOne';
import HTwo from './Heading/HTwo';
import Profile from './Profile';
import Notification from './Notification';
import Announcement from './Announcement';
import HaMeemLogo from '../../assets/images/hlogo.png';
import Logo from '../../assets/images/User.png'
import CompanyLogo from '../../assets/images/company_logo_round.png'
import TopBarContainer from './TopBar';
import TabNaivigationContainer from './TabNavigation';
import ModuleMain from './Module';
import './index.less'
const { Header, Sider, Content } = Layout;

const HeaderMain=({collapsed,setCollapsed,colorBgContainer})=>{
  const dispatch=useDispatch();
  const {
    isSidebar,
    isOpenModule
  }=useSelector((state)=>state.ui)
  const {moduleName}=useSelector((state)=>state.menu)
  const [open, setOpen] = useState(false);
  const [profileDrawer,setProfileDrawer]=useState(false);
  const [notification,setNotification]=useState(false);
  const [announcement,setAnnouncement]=useState(false);

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    //console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const items = [
    {
      key: '1',
      label: `H1`,
      children: <HOne/>,
    },
    {
      key: '2',
      label: `H2`,
      children: <HTwo/>,
    },
    {
      key: '3',
      label: `H3`,
      children: <HTwo/>,
    },
    {
      key: '4',
      label: `H4`,
      children: <HTwo/>,
    },
    {
      key: '5',
      label: `H5`,
      children: <HTwo/>,
    },
    {
      key: '6',
      label: `H6`,
      children: <HTwo/>,
    },
    {
      key: '7',
      label: `P`,
      children: <HTwo/>,
    },
    {
      key: '8',
      label: `SPAN`,
      children: <HTwo/>,
    },
  ];


  return(
    <>
      <Header
      className='top-header-container'
      id={`${collapsed?"collapsed-header":"expand-header"}`}
      style={{
        padding: 0,
          // background: '#f2f3f8',
      }}
      >
        <TopBarContainer/>
        <Row className='header-bottom'>
          <Col span={2} 
          className={`expand-expand-button`}
          >
            <div
            style={{
              position:'relative'
            }}
            >
              <img 
              src={CompanyLogo}
             
              className='company-logo'
              />
            </div>
          </Col>
          <Col 
          span={18}
          className='inner-top-container-module-name'
          >
            <span className='module-title-name'>{moduleName?moduleName:""}</span>
          </Col>
          <Col 
          span={4}
          style={{
            lineHeight:'0px',
            display:'flex',
            flexDirection:'column',
            padding:'5px 0px',
            textAlign:'right',
            overflow:'hidden'
          }}
          >
              <span className='user-info'>
              14, December 2023, Thursday
              </span><br/>
              <span className='user-info'>
              <b>Hello Admin User</b>
              </span>
          </Col>
        </Row>
        <TabNaivigationContainer/>
      </Header>


      {/* Drawer Section */}
      <Drawer
      className='settings-drawer'
      title={<Row>
        <Col 
        style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}
        span={24}>
          <span className='setting-title'>Basic Theme Settings</span>
        </Col>
      </Row>}
      placement="right"
      width={500}
      onClose={()=>{
        setOpen(!open)
      }}
      open={open}
      >
        <Row>
          <Col 
          span={24}
          className='body-container'
          >
            <Row>
              <Col span={24}>
                <p className='inner-title'>
                  Theme Color
                </p>
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={1} style={{}}>Dark</Radio>
                  <Radio value={2}>White</Radio>
                  <Radio value={3}>Yellow</Radio>
                  <Radio value={4}>Dark</Radio>
                </Radio.Group>
              </Col>
            </Row>
            <Divider/>

            <Row>
              <Col span={24}>
                <p className='inner-title'>
                  Typography
                </p>
                <Row>
                  <Col span={24}>
                    <Tabs 
                    defaultActiveKey="1"
                    size='small' 
                    items={items} 
                    onChange={onChange}
                    type='card'
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Divider/>
          </Col>
        </Row>
      </Drawer>

      {/* Profile Drawer Section */}
      <Profile profileDrawer={profileDrawer} setProfileDrawer={setProfileDrawer}/>

      {/* Notification Drawer */}
      <Notification notification={notification} setNotification={setNotification}/>

      {/* Announcement Drawer */}
      <Announcement announcement={announcement} setAnnouncement={setAnnouncement}/>
    </>
  )
}
export default HeaderMain;