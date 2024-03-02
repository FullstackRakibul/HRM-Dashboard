import React from 'react';
import {
    Row,
    Col
} from 'antd';
import './index.less';

const CardTitle=({children})=>{
    return(
        <>
            <Row>
                <Col span={24}>
                    <span>{children}</span>
                </Col>
            </Row>
        </>
    )
}
export default CardTitle;