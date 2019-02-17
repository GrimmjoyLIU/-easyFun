import React from 'react';
import {Router,Route,IndexRoute,hashHistory} from 'react-router'
import './css/style.css';
import AppContainer from './containers/AppContainer';
import HomeContainer from './containers/HomeContainer'
import MovieContainer from './containers/MovieContainer'
import MovieDetailContainer from './containers/MovieDetailContainer'
/*class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            //这个地方留着以后写路由用，app当做是最外层的组件
            <div>
                <AppContainer />
            </div>

        )
    }
}*/
const App = (
    <Router history={hashHistory}>
        <Route path='/' component={AppContainer}>
            <IndexRoute component={HomeContainer}></IndexRoute>
            <Route path="/index"  component={ HomeContainer }/>
            <Route path="/movie"  component={ MovieContainer }/>
            <Route path="/movie/:id"  component={ MovieDetailContainer }/>
            <Route path="/news"  component={ MovieContainer }/>

        </Route>
    </Router>
);
export default App;