import React from "react";
import {useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import Typography from "@mui/material/Typography";
import bgVid from '../Assets/loginVideo.mp4'
import '../components/css/LoginForm.css'

const LoginForm = () => {
  
  let navigate= useNavigate()

  const onFinish = (values) => {
   let userData=  JSON.parse(localStorage.getItem(('userData')))
    userData.filter((item)=>{
      if(item.email===values['username']&& item.password===values['password']){
         navigate('/MainNews')
      } 
      else alert('Invalid Email or Password.  if you are not registered with us, sign up to continue')
    
    })
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
        label="Email/Username"
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
        label="User Password"
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
          Login
        </Button>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" style={{color:'white'}} onClick={()=>navigate('/SignUp')} htmlType="submit">
          Not a user ? Click here to sign Up 
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};
export default LoginForm;
