import React,{
    useRef,
    useState
} from 'react';
import {
    Row,
    Col,
    Card
} from 'antd';
import { CSSTransition } from 'react-transition-group';
import './index.less';

const NormalContainer=({children})=>{
    const [inProp, setInProp] = useState(false);
    const nodeRef = useRef(null);
    return(
        <>
            <CSSTransition nodeRef={nodeRef} in={inProp} timeout={3000} classNames="my-node">
                <Row
                style={{
                    marginTop:'60px',
                    padding:'0px'
                }}
                >
                    <Col 
                    span={24} 
                    style={{
                        padding:'5px 0px 5px 5px'
                    }}>
                        {/* <Card className='content-container'> */}
                        {children}
                        {/* </Card> */}
                    </Col>
                </Row>
            </CSSTransition>
        </>
    )
}
export default NormalContainer;