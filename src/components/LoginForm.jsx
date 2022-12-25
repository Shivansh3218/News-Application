import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import Typography from "@mui/material/Typography";
import bgVid from '../Assets/loginVideo.mp4'
import '../components/css/LoginForm.css'

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="loginForm">
    <video autoPlay loop muted id="myVid">
      <source src={bgVid} type="video/mp4"/>
    </video>
    <Typography variant="h3" gutterBottom textAlign='center' marginTop='2rem' color='white'>
      Welcome to The News App
    </Typography>
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{width:'400px', margin:'auto'}}
    >
     <Typography variant="h5" gutterBottom textAlign='center' marginTop='2rem' color='white'>
      Login to get latest news
    </Typography>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};
export default LoginForm;
