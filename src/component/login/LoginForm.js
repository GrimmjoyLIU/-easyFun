import React from 'react';
import {Form, Icon, Input, Button, Checkbox,message} from 'antd';

class LoginForm extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err && values.username === '1111' && values.password === '1111') {
                //注册时用户名和密码会保存在缓存中，登录的时候要和缓存中的内容进行判断是否一致
                this.props.handleIsLogin();   //调用Handleislogin去改变islogin和visible的值
                message.success("登录成功");
            }
            else{
                message.error("登录失败!");
            }
        });
    };

    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>

                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                        /*为输入框添加头部图标*/
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住我</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">忘记密码？</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登陆
                    </Button>
                   或者 <a onClick={this.props.toRegister}>立即注册!</a>
                </Form.Item>
            </Form>
        )
    }
}
export default LoginForm = Form.create({})(LoginForm);