import React from 'react';
import {Layout} from 'antd'
import {Card} from 'antd';
import MovieColumn from '../component/Movie/MovieColumn';

const {Content, Sider} = Layout;
class MovieContainer extends React.Component{

    render(){
        return(
            <div >
               {/* <MovieColumn title="热门电影" link="/movie" total="30" type="in_theaters" pageTruth={true}/>*/}
                <Card className="home">
                    <Layout>
                        <Sider>sasas</Sider>
                        <Content style={{ padding: '0 16px',background: '#fff'}}>
                            <div>
                                <MovieColumn title="热门电影" link="/movie" total="30" type="in_theaters" pageTruth={true}/>
                                <MovieColumn title="即将上映" link="/movie" total="30" type="coming_soon" pageTruth={true}/>
                                <MovieColumn title="TOP25" link="/movie" total="30" type="top250" pageTruth={true}/>
                                <MovieColumn title="北美电影榜" link="/movie" total="30" type="us_box" pageTruth={true}/>

                            </div>
                        </Content>
                    </Layout>
                </Card>
            </div>
        )
    }
}
export default MovieContainer;