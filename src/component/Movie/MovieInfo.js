import React from 'react';
import {Row,Col,Card} from 'antd'
import MovieActors from './MovieActors'
import MovieComments from './MovieComments'
class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {movieDetailData,isloading,id} = this.props;
        let actor;
        if(movieDetailData){
            /*console.log(movieDetailData.directors,'获取到数据');*/
             actor = <MovieActors isloading={isloading}
                //如果直接写director = {movieDetailData.directors}那么在没有数据之前或报错，因为movieDetailData为null，没有directors属性
                                       director = {movieDetailData.directors}
                                       actors = {movieDetailData.casts}
            />
        }
        return(
            <div style={{marginTop:'25px'}}>
               {/* 演职人员信息*/}
                <Row>
                    <Col span={18}>
                        {actor}
                    </Col>
                    <Col span={6}>

                    </Col>
                </Row>
                {/*评论信息*/}
                <Row>
                    <Col span={18}>
                        <MovieComments />
                    </Col>
                    <Col span={6}>

                    </Col>
                </Row>
            </div>
        )
    }
}
export default App;