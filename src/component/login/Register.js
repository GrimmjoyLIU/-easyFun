import React from 'react';
import {Form, Input, Tooltip, Icon, Cascader, Select,message, Checkbox, Button, AutoComplete} from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class Register extends React.Component {
    state = {
        confirmDirty: false,

    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            //values = {username: "xxx",password:"xxx",phone:"xxx",confirm:"XXX",agreement:"xxx"}
            if (!err) {
                for(let val in values){
                   // console.log(val,values[val],values);
                    //利用浏览器缓存来存储
                    localStorage.setItem(val,values[val]);
                }
                setTimeout(() => {
                    message.success('注册成功!');
                    this.props.handleIsLogin();//调用父组件的函数将islogin变为true，visible变为false
                },1000)
            }
        });
    };

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次输入的密码不一致');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    render() {
        const { getFieldDecorator } = this.props.form; //用户和表单双向绑定

        const formItemLayout = {
            labelCol: { //label 标签布局，同 <Col> 组件，设置 span offset 值，
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: { //需要为输入控件设置布局样式时，使用该属性，用法同 labelCol
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 6,
                },
            },
        };

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item {...formItemLayout} label="用户名" >
                    {getFieldDecorator('username', {
                        rules: [{
                            type: 'string', message: '请输入正确的用户名!',
                        }, {
                            required: true, message: '请输入用户名!',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="密码"
                >
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: '请输入密码!',
                        }, {
                            validator: this.validateToNextPassword,
                        }],
                    })(
                        <Input type="password" />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="确认密码"
                >
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: '请确认密码!',
                        }, {
                            validator: this.compareToFirstPassword,
                        }],
                    })(
                        <Input type="password" onBlur={this.handleConfirmBlur} />
                    )}
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="电话号码"
                >
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(
                        <Input style={{ width: '100%' }} />
                    )}
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                    )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button onClick={this.props.toLogin}>返回</Button>
                    <Button type="primary" htmlType="submit" className="register-button">注册</Button>
                </Form.Item>
            </Form>
        );
    }
}
export default Register = Form.create({})(Register);