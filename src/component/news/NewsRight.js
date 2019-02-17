import React from 'react';
import {getNews} from '../../static/fetch'
import {TopList} from "../TopList"
class NewsRight extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hotNewsLoading: false,
            hotNewsArray: null
        }
    }
    componentWillMount(){
        this.setState({
            hotNewsLoading: true
        });
        getNews({
            type: 'top',
            count: 10
        }).then((data) => {
          //  console.log(data);
            let temp = data.map(function (item) {
                return item.title;
            });
            this.setState({
                hotNewsLoading: false,
                hotNewsArray: temp
            });
        })
    }
    render(){
        return(
            <div>
                <TopList dataArray={this.state.hotNewsArray} title="热点新闻" link="news"/>
            </div>
        )
    }
}
export default NewsRight;