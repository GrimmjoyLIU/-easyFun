import React from 'react';
import {Pagination} from 'antd'

class ColumnHeader extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
       /* currentPage={this.state.currentPage} title="热门电影" link="/movie" total="30" pageChange={this.pageChange}*/
        const {pageTruth,currentPage,title,link,total,pageChange} = this.props;
        return(
            <div>
                <div className="column-head">
                    {/* 热门电影四个字放在最左边*/}
                    <span>
                        <a href={link}>{title}</a>    {/*这里以后要改成react-router的link标签*/}
                    </span>
                    {/* 分页工具放在最右边*/}
                    {
                        pageTruth?  //判断是否要显示分页工具
                            <div className="page"><Pagination Current={currentPage} total={parseInt(total)} onChange={pageChange}/></div>
                            :
                            <div></div>
                    }


                </div>
            </div>
        )
    }
}
export default ColumnHeader;