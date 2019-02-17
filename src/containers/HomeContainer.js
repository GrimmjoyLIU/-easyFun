import React from 'react';
import {Card,Carousel,BackTop,Icon} from 'antd';
import {getMovie} from '../static/fetch';
import MovieColumn from '../component/Movie/MovieColumn'
import NewsColumn from '../component/news/NewsColumn'

class HomeContainer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Card className="home">
                <Carousel autoplay>
                    <div><img src={require("../image/movie_carousel_1.jpg")}/></div>
                    <div><img src={require("../image/movie_carousel_2.jpg")}/></div>
                    <div><img src={require("../image/movie_carousel_3.jpg")}/></div>
                    <div><img src={require("../image/movie_carousel_4.jpg")}/></div>
                </Carousel>
                <div>
                    <MovieColumn title="热门电影" link="/movie" total="30" type="in_theaters" pageTruth={true}/>
                    <NewsColumn />
                </div>
            </Card>
        )
    }
}
export default HomeContainer;