// This component used for 
import React from 'react';
import { 
    Card 
} from 'antd';
import PropTypes from 'prop-types';
import CardTitle from './partials/index';
import './index.less';

const NormalCard=({Title,className,children,styles})=>{
    return(
        <>
            <Card
            title={Title?<CardTitle>{Title}</CardTitle>:''}
            style={styles?styles:{}}
            className={`normal-card-container normal-card ${className?className:''}`}
            >
                {children}
            </Card>
        </>
    )
}


NormalCard.propTypes ={
    Title:PropTypes.string,
    className:PropTypes.string,
    styles:PropTypes.object,
    children:PropTypes.object
}
export default NormalCard;