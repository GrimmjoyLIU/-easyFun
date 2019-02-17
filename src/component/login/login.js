import React from 'react';
import {Modal, Icon, Button, message} from 'antd';
import LoginForm from './LoginForm';
import Register from './Register'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false, //决定model是否可见
            isLogin: false,  //判断缓存是否已经存在用户
            action: 'login',  //判断model显示的小窗口是注册还是登陆
            confirmLoading: false
        };
    }
    showModel = () => {   //当点击登陆按钮是会触发该函数，显示model窗口
        this.setState({
            visible: true
        });
    };
    hideModel = () => {    //当点击model的遮罩层或右上角叉或取消按钮时会触发该函数，隐藏model窗口
        this.setState({
            visible: false,
        });

    };
    handleIsLogin = () => {  //当用户登录之后调用，该函数会作为参数传递给loginform组件
      this.setState({
          isLogin: true,
          visible: false
      })
    };
    toRegister = () => {
        this.setState({
            action: 'register'
        })
    };
    toLogin = () => {
        this.setState({
            action: 'login'
        })
    };
    toLogout = () => {
        this.setState({
            action: 'login',
            isLogin: false
        });
        //localStorage.clear();
    };

    render(){
        return(
            <div className="login">
                <div>
                   {/* 如果islogin是真，则渲染一个显示用户名的按钮，如果是假，则说明没有登陆过，渲染一个登陆的按钮*/}
                    {this.state.isLogin ?
                        <Button type="primary" onClick={this.toLogout}>
                            <Icon type="user" />{localStorage.getItem('username')}
                        </Button>
                        :
                        <Button type="primary" onClick={this.showModel}>
                            <Icon type="user" />登陆
                        </Button>
                    }
                </div>
                {/*<Button type="primary"><Icon type="user" />登录</Button>*/}
                {/*定义弹出对话框组件*/}
                <Modal title="basic model"
                       visible={this.state.visible}
                       onCancel={this.hideModel}
                       footer={null}
                >
                    {
                        /*根据action的值的不同决定渲染那个组件*/
                        this.state.action === 'register' ?
                            <Register toLogin={this.toLogin} handleIsLogin={this.handleIsLogin}/>
                            :
                            <LoginForm handleIsLogin={this.handleIsLogin} toRegister={this.toRegister}/>
                    }
                </Modal>
            </div>
        )
    }
}
export default Login;
