import fetchJsonp from 'fetch-jsonp';
//fetchJsonp只支持GET方法，和JSONP一样
import * as config from '../config/path'
require('es6-promise').polyfill();
/*export const SERVER_PATH = 'https://api.douban.com/v2/';
export const LOGIN_PATH = 'http://newsapi.gugujiankong.com/Handler.ashx';
export const DEFAULT_COUNT = 4;
export const DEFAULT_START = 0;*/

export function getMovie(obj) {
    //传入的对象包含三个参数，type表示类型，start表示起始数据的编号，count表示要请求几条数据
    if(obj) {
        let detail = '';
        //进行url地址的拼接，调用豆瓣的api 如：https://api.douban.com/v2/movie/in_theaters?&start=0&count=10
        if(obj.type !== 'us_box'){
            detail = `?start=${obj.start}&count=${obj.count}`;
        }
        return fetchJsonp(`${config.SERVER_PATH}movie/${obj.type}${detail}`) //fetchjsonp返回一个promise对象，函数的第二个参数是个对象，可以设置timrout，默认值为5秒
            .then(function (response) {
                return response.json()
            }).then(function (json) {
                //console.log(json,typeof json,json.subjects);
                return json;
        }).catch(function (ex) {
            console.log('获取数据失败', ex)
        })
    }
}
export function getMovieDetail(obj) {
    if(obj){
        return fetchJsonp(`${config.SERVER_PATH}movie/subject/${obj.id}`)
            .then(function (responce) {
                return responce.json();
            })
            .then(data => {console.log(data);return data})

    }
}
export function getMovieComments(obj) {
    if(obj){
        return fetchJsonp(`https://movie.douban.com/subject/${obj.id}/comments`)
            .then(function (responce) {
                return responce.json();
            })
            .then(data => {console.log(data);return data;})
            .catch(function (error) {
                console.log(error,'获取评论失败')
            })
    }
}
// 获取新闻热点
export function getNews(obj) {
    return fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${obj.type}&count=${obj.count}`,
        {method: 'GET'})
        .then(response=> {
            return response.json();
        })
}