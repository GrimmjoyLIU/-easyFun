import React from 'react';
import Head from '../component/Header'
import HomeContainer from '../containers/HomeContainer'
class AppContainer extends React.Component{
    /*容器组件，由header组件，中间的内容，footer组件组成，中间的内容是由路由决定的*/

    render(){
        return(
            <div className='appContain_base'>
                <Head />  {/*首页的头部组件*/}
                {/*<HomeContainer />*/}
                {this.props.children}
            </div>
        )
    }
}
export default AppContainer;