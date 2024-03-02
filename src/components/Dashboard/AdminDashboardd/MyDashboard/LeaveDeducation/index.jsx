import React from 'react';
import {
    Tag,
    Space,
    Button
} from 'antd';
import ListsTable from '../../../../ReusableComponent/ListsTable';

const LeaveDeducation=()=>{
    const columns = [
        {
          title: 'Type',
          dataIndex: 'type',
          key: 'type',
          render: (type) => <strong>{type}</strong>,
          width:'20%'
        },
        {
          title: 'CF',
          dataIndex: 'cf',
          key: 'cf',
          width:'10%'
        },
        {
            title: 'Earn',
            dataIndex: 'earn',
            key: 'earn',
            width:'10%'
        },
        {
            title: 'Allocated',
            dataIndex: 'allocated',
            key: 'allocated',
            width:'10%'
        },
        {
            title: 'Used',
            dataIndex: 'used',
            key: 'used',
            width:'10%'
        },
        {
          title: 'Pending',
          dataIndex: 'pending',
          key: 'pending',
          width:'10%'
        },
        {
            title: 'Remaining',
            dataIndex: 'remain',
            key: 'remain',
            width:'10%'
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <Button type='primary'>
                Action
              </Button>
            </Space>
          ),
          width:'20%'
        },
      ];
      const data=[
        {
            key:1,
            type:'Casual Leave',
            cf:'0',
            earn:'0',
            allocated:'10',
            used:'5',
            pending:'0',
            remain:'5'
        },
        {
            key:2,
            type:'Sick Leave',
            cf:'0',
            earn:'0',
            allocated:'14',
            used:'4',
            pending:'0',
            remain:'10'
        },
        {
            key:3,
            type:'Annual Leave',
            earn:'16',
            cf:'50',
            allocated:'66',
            used:'5',
            pending:'0',
            remain:'5'
        }
      ]
      const data2 = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sydney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];
    return(
        <>
            <ListsTable tableProps={{
                data,
                columns
            }}/>
        </>
    )
}

export default LeaveDeducation;