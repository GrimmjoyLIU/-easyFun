import React from 'react';
import Loading from '../Loading';
import { Modal } from 'antd';
import { Rate } from 'antd';

class MovieBanner extends React.Component{
    constructor(props){
        super(props);
    }
    //点击简介的时候会调用的info函数，显示简介的全部内容
    info = (summary) => {
        Modal.info({
            title: '简介：',
            content: (
                <div>
                   <p>{summary}</p>
                </div>
            ),
            onOk() {},
        });
    };
    render(){
        let {movieDetailData,isloading} = this.props;
        let image,title,EnglishTitle,directors,actors,countries,genres,year,summary,rate,star;
        if(movieDetailData){
            image = movieDetailData.images.large;
            title = movieDetailData.title;
            EnglishTitle = movieDetailData.aka[0];
            directors = movieDetailData.directors.map((item,index) => {
                return item.name;
            }).toString();//这里需要在赋值的时候就调用toString方法。如果不是在这里调用而是在下面的p标签内写成<p>导演：{directors.toString()}</p>，就会报错，
            // 错误显示toString方法调用失败，因为directors为null。directors为null的原因我猜是因为
            console.log(directors);
            actors = movieDetailData.casts.map((item,index) => {
                return item.name
            }).toString();
            countries = movieDetailData.countries;
            genres = movieDetailData.genres.toString();
            year = movieDetailData.year;
            summary = movieDetailData.summary;
            rate = movieDetailData.rating.average;
            console.log(rate);
            star = movieDetailData.rating.stars/10;
        }
        return(
                isloading ?
                <Loading />
                :
                <div className="movie-detail">
                    <div className='movie-detail-img'><img src={image} alt="加载失败"/></div>
                    <div className="movie-detail-info">
                        <h1>电影名称：{title}</h1>
                        <h4>外文名：{EnglishTitle}</h4>
                        <p>导演：{directors}</p>
                        <p>演员：{actors}</p>
                        <p>国家：{countries}</p>
                        <p>类型：{genres}</p>
                        <p>时间：{year}</p>
                        <div className="movie-summary" onClick={this.info.bind(this,summary)}>简介：{summary}</div>
                    </div>
                    <div className="movie-detail-rate">
                        <p>评分：{rate}</p>
                        <Rate allowHalf value={star} />
                    </div>
                </div>
        )
    }
}
export default MovieBanner;