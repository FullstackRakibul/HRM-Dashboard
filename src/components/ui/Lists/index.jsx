import React, { 
  useEffect, 
  useState 
} from 'react';
import { useSelector } from 'react-redux';
import { Avatar, List, message } from 'antd';
import VirtualList from 'rc-virtual-list';
import './index.css';



const MainLists = ({propsLists}) => {
  const {classLists}=useSelector((state)=>state.ui)
  const {loadMoreData,data,height}=propsLists;

  const onScroll = (e) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === height) {
        loadMoreData();
    }
  };

  return (
    <List
    className='main-lists'
    >
      <VirtualList
        data={data}
        height={height}
        itemHeight={47}
        itemKey="email"
        onScroll={onScroll}
      >
        {(item,index) => (
          <List.Item key={item.email} className={`${index%2===0?'dark-lists':'light-lists'}`}>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a className={`${classLists.bodyBoldFont?classLists.bodyBoldFont:''}`} href="https://ant.design">{item.name.last}</a>}
              description={<span className={`${classLists.bodyLightFont?classLists.bodyLightFont:''}`}>{item.email}</span>}
            />
            <a>Action</a>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};
export default MainLists;