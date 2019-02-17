import React from 'react';

export function TopList({dataArray,title,link}) {
    let list = null;
    if(!dataArray){
        console.log("数据获取失败！");
    }
    else{
        list = dataArray.map(function (item,index) {
            return <li key={index+1} style={{listStyle: 'none'}}>

                <a href="">
                   {/* width: 300px; 定义块元素的宽度
                   white-space: nowrap;内容超宽后禁止换行显示
                    overflow: hidden;超出部分隐藏
                    text-overflow:ellipsis;文字超出部分以省略号显示*/}
                    <div className='hotnews-item'>
                        {
                            (index+1)<4 ?
                            <span className='hotnews-sign'>{index+1}</span>
                            :
                            <span className='hotnews-black'>{index+1}</span>
                        }

                        {item}
                    </div>
                </a>
            </li>
        })
    }
    return(
        <div className="news-right">
            <div className='reDianXinWen'>{title}</div>
            <ul>{list}</ul>
        </div>)
}