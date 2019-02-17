import React from 'react';
class NewsItemBlock extends React.Component{

    render(){
        const newsArray = this.props.newsArray;
        let tempArray = null;
        if(!newsArray){
            console.log("数据获取失败");
        }
        else{
            tempArray = newsArray.map(function (item,index) {
                return <li key={index}>
                          <img src={item.picture} alt=""/>
                          <a href=""> {item.title}</a>
                       </li>
            })
        }
        return(
            <div className='news-item'>
               <ul>{tempArray}</ul>
            </div>
        )
    }
}
export default NewsItemBlock;