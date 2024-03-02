/*
* Author: Asib Al Hasan
* Title: Icon
* Description: Reusable Icon Component
* Date: 07-09-2023
*/

import React from 'react';
import {
    Row,
    Col
} from 'antd';

const MyIcon=({icon})=>{
    return(
        <Row>
            <Col span={24}>
                <strong style={{marginRight:'8px'}}><span className={`${icon}`}></span></strong>
            </Col>
        </Row>
    )
}

export default MyIcon;