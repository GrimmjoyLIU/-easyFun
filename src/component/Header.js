import React from 'react';
import {Layout,Row,Col} from 'antd';
import Login from './login/login';
import {Link,IndexLink} from 'react-router'
const {Header} = Layout; //用解构赋值的形式将Header组件提取出来

class Head extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
                <Header>
                    <Row>
                        <Col span={6}>
                            <a href="/" className='logo' />
                        </Col>
                        <Col span={12} offset={2}>
                            <ul className="head_ul">
                                {/*记得添加超链接在鼠标移上去的时候会变黄色，且底部会变蓝*/}
                                <li className="head_li"><IndexLink to='/' activeClassName='linkActive'>首页</IndexLink></li>
                                <li className="head_li"><Link to='/movie' activeClassName='linkActive'>电影</Link></li>
                                <li className="head_li"><Link to='/news' activeClassName='linkActive'>热点</Link></li>
                                <li className="head_li"><Link to='/music' activeClassName='linkActive'>音乐</Link></li>
                                <li className="head_li"><Link to='/books' activeClassName='linkActive'>书籍</Link></li>
                            </ul>
                        </Col>
                        <Col span={4}>
                            <Login />
                        </Col>
                    </Row>
                </Header>

        )
    }
}
export default Head;