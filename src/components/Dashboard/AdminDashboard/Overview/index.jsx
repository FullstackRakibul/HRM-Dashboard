import { Row ,Col,Card} from 'antd';
import React, { Fragment } from 'react'
import { Responsive, WidthProvider } from "react-grid-layout";
import Employee from './Employee';
import Female from './Female';
import Male from './Male';
import EmployeeOnLeave from './EmployeeOnLeave';
import EmployeeSiteDuty from './EmployeeOnSiteDuty';
import Expatriate from './Expatriate/Expatriate';
import TodayAbsentWeekOffEmployee from './TodayAbsentWeekOffEmployee';
import TodayPresentEmployee from './TodayPresentEmployee';
import './index.css'

const ResponsiveGridLayout = WidthProvider(Responsive);


class EmployeeOverview extends React.Component{
    constructor(){
        super();
        this.state={
            layout:[
                {i: '1', x: 0, y: 0, w: 3, h: .75},
                {i: '2', x: 3, y: 0, w: 3, h: .75},
                {i: '3', x: 6, y: 0, w: 3, h: .75},
                {i: '4', x: 9, y: 0, w: 3, h: .75},
                {i: '5', x: 0, y: .75, w: 3, h: .75},
                {i: '6', x: 3, y: .75, w: 3, h: .75},
                {i: '7', x: 6, y: .75, w: 3, h: .75},
                {i: '8', x: 9, y: .75, w: 3, h: .75},
            ]
        }
    }
    componentDidMount=()=>{
        let test=window.innerWidth;
        console.log("WIDTH:: ",test)
        if(test>1366){
            let layout=[...this.state.layout]
            layout=[
                {i: '1', x: 0, y: 0, w: 4, h: 1},
                {i: '2', x: 4, y: 0, w: 4, h: 1},
                {i: '3', x: 8, y: 0, w: 4, h: 1},
                {i: '4', x: 12, y: 0, w: 4, h: 1},
                {i: '5', x: 16, y: 0, w: 4, h: 1},
                {i: '6', x: 20, y: 0, w: 4, h: 1},
                {i: '7', x: 24, y: 0, w: 4, h: 1},
                {i: '8', x: 28, y: 0, w: 4, h: 1},
            ];

            this.setState({
                layout
            })

        }else if(test===1366){
            let layout=[...this.state.layout]
            layout=[
                {i: '1', x: 0, y: 0, w: 4, h: 1},
                {i: '2', x: 4, y: 0, w: 4, h: 1},
                {i: '3', x: 8, y: 0, w: 4, h: 1},
                {i: '4', x: 12, y: 0, w: 4, h: 1},
                {i: '5', x: 16, y: 0, w: 4, h: 1},
                {i: '6', x: 20, y: 0, w: 4, h: 1},
                {i: '7', x: 24, y: 0, w: 4, h: 1},
                {i: '8', x: 28, y: 0, w: 4, h: 1},
            ];

            this.setState({
                layout
            })
        }
    }
    render(){
        const gridItems = [
            { 
                id: 1, 
                content:<Employee/>
            },
            { 
                id: 2,
                content:<Male/> 
            },
            { 
                id: 3,
                content:<Female/>
            },
            { 
                id: 4,
                content:<Expatriate/>
            },
            { 
                id: 5,
                content:<TodayPresentEmployee/>
            },
            { 
                id: 6,
                content:<TodayAbsentWeekOffEmployee/>
            },
            { 
                id: 7,
                content:<EmployeeOnLeave/>
            },
            { 
                id: 8, 
                content:<EmployeeSiteDuty/>
            }
        ];
        return(
            <Fragment>
                <ResponsiveGridLayout
                layouts={{ lg: this.state.layout }}
                // breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                // cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 32.5, md: 10, sm: 6, xs: 4, xxs: 2 }}
                measureBeforeMount={true}
                className="layout"
                // rowHeight={this.props.rowHeight}
                isDragable={true}
                isResizable={true}
                // onDrag={this.onDragging}
                // onDragStop={this.onMoveCard}
                // onResizeStop={this.onResizeCard}
                margin={[8, 15]}
                >
                    {gridItems.map((item, i) => {
                        return (
                            <div  key={item.id} className="grid-item overview-card" style={{background:"#fff"}}>
                                {item.content}
                            </div>
                        );
                    })}
                </ResponsiveGridLayout>
            </Fragment>
        )
    }
}
export default EmployeeOverview