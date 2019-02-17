import React from 'react';
import {getMovieComments} from '../../static/fetch'
class MovieComments extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        getMovieComments({id: 1291546});
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}
export default MovieComments;
