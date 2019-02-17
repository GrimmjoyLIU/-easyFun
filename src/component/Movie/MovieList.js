import React from 'react';
import {Row,Col} from 'antd';
import * as config from "../../config/path";
import MovieItem from './MovieItem';

class MovieList extends React.Component{

    render(){
        let itemlist = null;
        let {movieData,currentPage,type} = this.props;
        if(movieData){
            if(type == 'us_box'){
                itemlist = movieData.map((item,index) => {
                    return <MovieItem id={item.subject.id} key={item.subject.id} title={item.subject.title} imglink={item.subject.images.large}
                                      rate={item.subject.rating.average}/>
                });
                let end = currentPage*4-1 < itemlist.length ? currentPage*4 : itemlist.length;
                itemlist = itemlist.slice((currentPage-1)*4,end);
            }
            else{
                itemlist = movieData.map(function (item,index) {
                    return <MovieItem id={item.id} key={item.id} title={item.title} imglink={item.images.large} rate={item.rating.average}/>
                });
            }
        }
        return(
            <div>
              <Row gutter={16}>
                  {
                      itemlist
                  }
              </Row>
            </div>
        )
    }
}
export default MovieList;