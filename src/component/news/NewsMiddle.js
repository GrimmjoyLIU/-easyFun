import React from 'react';
import {Tabs} from 'antd';
import NewsItem from './NewsItem';

const TabPane = Tabs.TabPane;
class NewsMiddle extends React.Component{

    render(){
        return(
            <div style={{marginLeft: '15px'}}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="国内" key="1"><NewsItem type="guonei" count={5}/></TabPane>
                    <TabPane tab="国际" key="2"><NewsItem type="guoji" count={5}/></TabPane>
                    <TabPane tab="娱乐" key="3"><NewsItem type="yule" count={5}/></TabPane>
                    <TabPane tab="体育" key="4"><NewsItem type="tiyu" count={5}/></TabPane>
                    <TabPane tab="军事" key="5"><NewsItem type="junshi" count={5}/></TabPane>
                    <TabPane tab="社会" key="6"><NewsItem type="shehui" count={5}/></TabPane>
                </Tabs>
            </div>

        )
    }
}
export default NewsMiddle;