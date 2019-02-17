import React from 'react';
import {Row,Col,Carousel} from 'antd';
import ColumnHeader from '../ColumnHeader';
import NewsMiddle from './NewsMiddle';
import NewsRight from './NewsRight';

class NewsColumn extends React.Component{
    render(){
        return(
            <div className="column">
                <ColumnHeader pageTruth={false} currentPage="" title="热门新闻" link="/news" total="" pageChange=""/>
                <Row gutter={10}>
                    <Col span={7}>
                        <div className="newsleft">
                            <Carousel autoplay>
                                <div><img src={require("../../image/news_carousel_1.jpg")} alt="平壤居民罕见用韩国品牌相机拍照"/></div>
                                <div><img src={require("../../image/news_carousel_2.jpg")} alt="土耳其公投成功海外公民有喜有悲"/></div>
                                <div><img src={require("../../image/news_carousel_3.jpg")} alt="镜头记录雄安新区街头即景"/></div>
                                <div><img src={require("../../image/news_carousel_4.jpg")} alt="长沙现微型古籍疑是科举作弊用书"/></div>
                            </Carousel>
                        </div>
                    </Col>
                    <Col span={11}>
                        <NewsMiddle />
                    </Col>
                    <Col span={6}>
                        <NewsRight />
                    </Col>
                </Row>
            </div>
        )
    }
}
export default NewsColumn;