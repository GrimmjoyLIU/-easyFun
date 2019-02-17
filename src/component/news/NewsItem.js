import React from 'react';
import {getNews} from '../../static/fetch'
import NewsItemBlock from './NewsItemBlock'
import Loading from '../Loading';

class NewsItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newsLoading: false,
            newsArray: null
        }
    }
    componentWillMount(){
        this.setState({
            newsLoading: true
        });
        getNews({type: this.props.type,count: this.props.count})
            .then((data) => {
                let temp = data.map(function (item,index) {
                    return {id: index,picture: item.thumbnail_pic_s, title: item.title}
                });
                this.setState({
                    newsArray: temp,
                    newsLoading: false
                })
            })
            .catch(err=>console.log('parsing failed', err))
    }
    render(){
        const {newsLoading,newsArray} = this.state;

        return(
            <div>
                {
                    newsLoading ?
                        <Loading />
                        :
                        <NewsItemBlock newsArray={newsArray}/>
                }
            </div>
        )
    }
}
export default NewsItem;