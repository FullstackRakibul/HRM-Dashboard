import { Col, Row,Card } from 'antd'
import React, { Fragment } from 'react'
import ExpatriateImage from '../../../../../assets/images/expatriate.png'

class Expatriate extends React.Component{
    render(){
        return(
            <Fragment>
                <Card
                    bordered={true}
                    className="overview-items-card"
                >
                    <Row className="dashboard-overview-items-row">
                        {/* <Col span={8} style={{fontSize:"35px"}}>
                            <img 
                            style={{
                                height:"80%",
                                width:"65%"
                            }} 
                            className="dashboard-overview-image"
                            src={ExpatriateImage}/>
                        </Col>
                        <Col span={16}>
                            <span>Total : <strong>6</strong><br/>Per : <strong>1%</strong></span>
                        </Col> */}
                        <Col span={24} >
                            <img 
                            style={{
                                height:"5%",
                                width:"20%"
                            }} 
                            className="dashboard-overview-image"
                            src={ExpatriateImage}/><br/>
                             <span className="title">Expatriate</span><br/>
                            <span>Total : <strong>6</strong><br/>Per : <strong>1%</strong></span>
                        </Col>
                    </Row>
                </Card>
            </Fragment>
        )
    }
}
export default Expatriate