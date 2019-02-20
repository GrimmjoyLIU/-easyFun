# -easyFun
react+react-router+antd+webpack实现的简易娱乐网站<br>
### 在项目目录下运行
```
npm install
```
### 项目开发版启动
```
npm run start
```
### 遇到的问题
**1、使用了antd之后再react组件中使用箭头函数会报错**，错误如下：<br>
产生错误的位置：
```
> 14 |     showModel = () => {   //当点击登陆按钮是会触发该函数，显示model窗口
     |               ^
  15 |         this.setState({
  16 |             visible: true
  17 |         });
```
控制台报错：ERROR in ./src/component/login/login.js .    Module build failed: SyntaxError:......<br>
***解决方法***：<br>
1）安装插件：`babel-preset-es2015`,`babel-preset-react`,`babel-preset-stage-0`,`babel-plugin-transform-class-properties`.<br>
2) 在根目录中添加.babelrc文件，文件中写入：
```
{
presets: [ "react","es2015","stage-0"],
   "plugins": ["transform-class-properties"]
}

```
3)在webpack的配置文件中添加配置：
```
{test: /\.js$/, 
exclude: /node_modules/, 
loader:'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0'}
```
**2、合并对个对象的方法？** <br>可以使用ES6的新语法：`object.assign()`方法<br>

**3、如何能够保留用户曾经的登录账号和密码？？？**<br>
由于没有服务器端，所以我这里只简单的用localStorge来保存用户信息，使得登录过的用户再次访问时可以直接登录。<br>
主要用到了`setItem()`和`getItem()`方法。<br>

**4、 关于对象的取值操作** <br>
使用for in循环遍历表单得到的values对象时，用values.val去取值只能得到undefined，要用values[val]来取值才行。

**5、使用webpack时，img标签引用本地图片的问题**<br>
当我使用常规方法引入图片时：
```
<img src="../image/movie_carousel_1.jpg"/>//这样做图片会加载失败，裂开的
```
解决：[用require](#用require)
```
<img src={require("../image/movie_carousel_1.jpg")}/>
```
**6、关于react组件内部的函数如何传参数的问题** <br>
在写电影简介的组件时，组件内定义了一个info函数，通过点击事件调用infi并为组件的info函数传参数。<br>
#####我的尝试1：（感觉会立即执行info函数）
```
<div className="movie-summary" onClick={this.info(summary)}>简介：{summary}</div>//果然不行，info立即执行了，并没有等我点击。。。。
```
#####我的尝试2：（用一个箭头函数包裹？？）
```
<div className="movie-summary" onClick={(summary) => {this.info(summary)}}> {summary}</div>//不行，报了一大堆错。。
```
#####我的尝试3：（想到了用bind函数）
```
<div className="movie-summary" onClick={this.info.bind(this,summary)}>简介：{summary}</div>//正解
```
**7、切换路由时报错** <br>
`Warning: Can't perform a React state update on a unmounted component. .....`
意思为：我们不能在组件销毁后设置state，防止出现内存泄漏的情况<br>
本问题出现的原因就是：我应该在组件销毁的时候将异步请求撤销
所以应在componentWillMount中加上一个变量unmount，如果组件即将卸载则unmount为true，在操作state之前判断unmount的状态，为false的时候才能操作。

**8、关于豆瓣api请求次数有限制导致图片请求失败**<br>
豆瓣API请求图片次数多了会返回403。据说是豆瓣服务器会限制请求图片的次数，解决方法就是在index.html中加上如下语句：
```
<meta name="referrer" content="no-referrer" />
```
### 还在完善其他功能。。。
