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

const ContentContainer=({children})=>{
    const [inProp, setInProp] = useState(false);
    const nodeRef = useRef(null);
    return(
        <>
            <CSSTransition nodeRef={nodeRef} in={inProp} timeout={3000} classNames="my-node">
                <Row
                className='content-inner-container'
                >
                    <Col 
                    span={24}
                    >
                        {children}
                    </Col>
                </Row>
            </CSSTransition>
        </>
    )
}
export default ContentContainer;