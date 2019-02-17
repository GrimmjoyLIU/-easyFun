import React from 'react';
import { Pagination } from 'antd';
import {getMovie} from '../../static/fetch'
import ColumnHeader from '../ColumnHeader';
import * as config from '../../config/path';
import Loading from '../Loading';
import MovieList from './MovieList';

/*export const SERVER_PATH = 'https://api.douban.com/v2/';
export const LOGIN_PATH = 'http://newsapi.gugujiankong.com/Handler.ashx';
export const DEFAULT_COUNT = 4;
export const DEFAULT_START = 0;*/

class MovieColumn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentPage: 1,//表示当前的页码
            isloading: false, //表示页面是否在加载数据
            movieData: null //用来存储数据，初始化是空
        }
    }
    componentDidMount(){ //组件渲染完成后去发送请求获取数据，这期间 isloading的值为true
        this.setState({
            isloading: true
        });

        getMovie({
            type: this.props.type,
            start: config.DEFAULT_START,
            count: config.DEFAULT_COUNT,
        }).then( (data) => {
            if(data && ! this.unmount){
                this.setState({
                    isloading: false,
                    movieData: data.subjects//subjects是个数组，数组的每个值是个对象，存放的是电影的详细信息
                })
            }

        })

    }
    componentWillUnmount(){
        this.unmount = true;
    }
    pageChange = (page) => {//页码改变时调用的函数
        this.setState({
            currentPage: page,
            isloading: false
        });
        //根据当前的页码改变去重新获取数据
        getMovie({
            type: this.props.type,
            start: config.DEFAULT_START + (page-1)*config.DEFAULT_COUNT,
            count: config.DEFAULT_COUNT,
        }).then( (data) => {
            this.setState({
                isloading: false,
                movieData: data.subjects//subjects是个数组，数组的每个值是个对象，存放的是电影的详细信息,对于北美电影榜来说，data.subjects.subject中存的才是最终数据
            })
        })
    };
    render(){
        const {currentPage,isloading,movieData} = this.state;
        const {title,link,total,type,pageTruth} = this.props;
        return(
            <div className="column">
                <ColumnHeader pageTruth={pageTruth} currentPage={currentPage} title={title} link={link} total={total} pageChange={this.pageChange}/>
                {
                    /*isloading ? 调用loading组件：调用movielist组件*/
                    isloading ?
                        <Loading />
                        :
                        <MovieList movieData={movieData} currentPage={currentPage} type={type}/>

                }
            </div>
        )
    }
}
export default MovieColumn;