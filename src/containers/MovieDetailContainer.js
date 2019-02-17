import React from 'react';
import {Card} from 'antd';
import MovieBanner from '../component/Movie/MovieBanner';
import MovieInfo from '../component/Movie/MovieInfo';
import {getMovieDetail} from '../static/fetch'
import Loading from '../component/Loading';


class MovieDetailContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isloading: false,
            detailData: null
        }
    }
    componentDidMount(){
        this.setState({
            isloading: true
        });
        getMovieDetail({id: this.props.params.id})
            .then((data) => {
                if(data && !this.unmount){
                    this.setState({
                        isloading: false,
                        detailData: data,
                    })
                }
            })
            .catch((err) => {console.log('parsing failed', err);})
    }
    componentWillUnmount(){
        this.unmount = true;
    }
    render(){
        return(
            <Card className="home">
                <MovieBanner movieDetailData={this.state.detailData} isloading={this.state.isloading}/>
                {
                    this.state.isloading ?
                        <Loading />
                        :
                        <MovieInfo movieDetailData={this.state.detailData} isloading={this.state.isloading} id={this.props.params.id}/>
                }

            </Card>
        )
    }
}
export default MovieDetailContainer;