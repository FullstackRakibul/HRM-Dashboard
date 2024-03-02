import { 
    Avatar, 
    Divider, 
    List, 
    Skeleton,
    Row,
    Col,
    Card,
    Button } from 'antd';
import React from 'react';
import { Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

class UpcomingConfirmation extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loading:false,
            data:[]
        }
    }
    loadMoreData = () => {
        console.log("SCROll CALLED")
        if (this.state.loading) {
          return;
        }
        this.setState({
            loading:true
        })
        fetch('https://randomuser.me/api/?results=5&inc=name,gender,email,nat,picture&noinfo')
          .then((res) => res.json())
          .then((body) => {
            // setData([...data, ...body.results]);
            this.setState({
                data:[...this.state.data,...body.results],
                loading:false
            })
          })
          .catch(() => {
            this.setState({
                loading:false
            })
          });
    };
    componentDidMount=()=>{
        this.loadMoreData();
    }
    handleButton=(item)=>{
        console.log(item);
      }
    render(){
        let {data}=this.state
        return(
            <Fragment>
                <div
                id="scrollableDiv"
                style={{
                    height: "100%",
                    overflow: 'scroll',
                    padding: '0 5px',
                    border: '1px solid rgba(140, 140, 140, 0.35)',
                }}
                >
                    <InfiniteScroll
                        dataLength={data.length}
                        next={this.loadMoreData}
                        hasMore={data.length < 100}
                        loader={
                        <Skeleton
                            avatar
                            paragraph={{
                            rows: 1,
                            }}
                            active
                        />
                        }
                        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                        scrollableTarget="scrollableDiv"
                    >
                        <List>
                        {data.length?data.map((item,index)=>{
                            return(
                                <Card
                                key={index}
                                bordered={true} 
                                className="continuos-list-item"
                                >
                                    <List.Item key={index+2}>
                                        <List.Item.Meta 
                                        avatar={<Avatar src={item.picture.large}/>}
                                        title={<a href="https://ant.design">{item.name.last} {index+1}</a>}
                                        description={item.email}
                                        key={index}
                                        />
                                        <Button
                                        style={{
                                            background:"#0050b3",
                                            borderColor:"#0050b3",
                                            borderRadius:"5px",
                                            padding:"2px 5px",
                                            color:"#fff",
                                            fontSize:"14px"
                                        }}
                                        onClick={this.handleButton.bind(this,item)}
                                        >Action</Button>
                                    </List.Item>
                                </Card>
                            )
                        }):""}
                        </List>
                    </InfiniteScroll>
                </div>
            </Fragment>
        )
    }
}
export default UpcomingConfirmation;