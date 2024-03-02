import { 
    Card,
    Progress,
    Row,
    Col,
    Avatar
} from "antd"
import Module from './index.module.css';

const CommonCard=({title,icon,color,minHeight,backgroundColor,children})=>{
    return(
        <>
            <Card style={{width:'100%',minHeight}}>
                <Row>
                    <Col 
                    span={24}
                    style={{
                        flex:1
                    }}
                    >
                        <Row>
                            <Col 
                            span={24}
                            style={{
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                            >
                               <span className={Module.title}>{title}</span>
                            </Col>
                        </Row>
                        <Row
                        style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        >
                            <Col 
                            span={5}
                            style={{
                                flex:1
                            }}
                            >
                                <Avatar
                                icon={icon}
                                size="medium"
                                style={{
                                    color:color,
                                    backgroundColor:backgroundColor
                                }}
                                >
                                    
                                </Avatar>
                            </Col>
                            <Col 
                            span={19}
                            style={{
                                flex:1
                            }}
                            >
                                <span className={Module.description}>
                                    {children}
                                </span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </>
    )
}
export default CommonCard;