import React from 'react';
import {Card} from 'antd';
class MovieActors extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let {isloading,director,actors} = this.props;
        let movieAlt = director[0].alt;//导演详细信息的网站地址
        let imgUrl = director[0].avatars.large;
        let name = director[0].name;
        /*console.log(director[0],'ddddd',movieAlt);*/
        let actorList = actors.map((item,index) => {
            return <li key={index}>
                {index == 0 ? <p>主演</p> : <p></p>}
                <a href={item.alt}>
                    <img src={item.avatars.small} alt=""/>
                </a>
                <p>{item.name}</p>
            </li>
        });
        return(
            <div style={{marginTop: '20px'}}>
                <Card title="演职人员" extra={<a href="">了解更多></a>}>
                    <ul className="movie-Info-staff">
                        <li>
                            <p>导演</p>
                            <a href={movieAlt}>
                                <img src={imgUrl} alt=""/>
                            </a>
                            <p>{name}</p>
                        </li>
                        {actorList}
                    </ul>
                </Card>
            </div>
        )
    }
}
export default MovieActors;