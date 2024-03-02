import React from 'react';
import NoData from '../../../assets/images/no-data.png';
import NoDataGif from '../../../assets/images/nodata.gif'
import {
    Table,
    Row,
    Col,
    Dropdown,
    Badge,
    Space
} from 'antd';
import './NestedTable.less';



const ChildTable=({details})=>{
    //console.log("record",details)
    const columns = [
        {
          title: 'Item Name',
          dataIndex: 'ItemName',
          key: 'ItemName',
        },
        {
          title: 'Unit Of Measurement',
          dataIndex: 'UnitOfMeasurement',
          key: 'UnitOfMeasurement',
          align:'center',
        },
        {
          title: 'Item Quantity',
          dataIndex:'ItemQuantity',
          key: 'ItemQuantity',
        },
        {
          title: 'Item Rate',
          dataIndex: 'ItemRate',
          key: 'ItemRate',
          align:'right',
        },
        {
          title: 'Item Value',
          dataIndex: 'ItemValue',
          key: 'ItemValue',
          align:'right',
        },
    ];

    return(
      <>
        <Row>
          <Col 
          span={24}
          className='child-table-container'
          >
            <Table 
            columns={columns} 
            dataSource={details} 
            pagination={false}
            className='child-table'
              //className={tableProps?.height?'child-table overflow-y-true':'child-table overflow-y-false'}
            rowClassName={(record, index) => index % 2 === 0 ? 'table-row-dark' :  'table-row-light'}
            />
          </Col>
        </Row>
      </>
    )
}
export default ChildTable
