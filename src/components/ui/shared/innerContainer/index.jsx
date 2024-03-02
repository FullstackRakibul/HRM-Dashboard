import React,{
    useRef,
    useState
} from 'react';
import {
    Row,
    Col
} from 'antd';
import { CSSTransition } from 'react-transition-group';
import './index.less';

const InnerContainer=({children})=>{
    const [inProp, setInProp] = useState(false);
    const nodeRef = useRef(null);
    return(
        <>
            <CSSTransition nodeRef={nodeRef} in={inProp} timeout={3000} classNames="my-node">
                <Row
                className='content-inner-container'
                style={{
                    marginTop:'65px',
                    padding:'0px',
                    minHeight:'calc(100vh - 200px)'
                }}
                >
                    <Col 
                    span={24} 
                    style={{
                        padding:'0px 0px 5px 6px'
                    }}>
                        {children}
                    </Col>
                </Row>
            </CSSTransition>
        </>
    )
}
export default InnerContainer;