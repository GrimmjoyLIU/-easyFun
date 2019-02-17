import React from 'react';
import {Row,Col} from 'antd';
import {Link} from 'react-router';
import * as config from "../../config/path";
class MovieItem extends React.Component{

    render(){
        const {id,title,imglink,rate} = this.props;
        return(
            <Col span={24/config.DEFAULT_COUNT}>
            <div>
                <div className="movie-item">
                    <Link to={"/movie/"+id}>
                        <img src={imglink} alt="加载失败"/>
                    </Link>

                </div>
                <div>
                    <div className="movie-title">{title}</div>
                    <div className="movie-rate">{rate}</div>
                </div>
            </div>
            </Col>
        )
    }
}
export default MovieItem;