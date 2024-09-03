import { Form, Input, Button } from "antd";
import React,{ useContext} from "react";
import { ContextOperation } from "../Operation/Operation";
import { useNavigate } from "react-router-dom";


interface UserData {
  username: string;
  email: string;
  password: string;
}

interface context{
  handleLogin: (value: UserData) => boolean;
}

const Login: React.FC = () => {
    const navigate=useNavigate()
  const { handleLogin } = useContext(ContextOperation) as context;
  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
    
  const handleClick = (value: UserData) => {
    if(handleLogin(value)){
        navigate("/")
    }
  };


  return (
    <div className="flex flex-col items-center">
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        layout="vertical"
        className="m-5 p-5 rounded-md w-4/5"
        variant="outlined"
        onFinish={(value) =>handleClick(value)}
        // initialValues={{
        //   username: "username",
        //   email: "email@gmail.com",
        //   password: "password",
        // }}
      >
        <Form.Item>
          <h1 className="text-center text-4xl font-bold">SIGN IN</h1>
        </Form.Item>

        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="Please input your username" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Please input your email" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input placeholder="Please input your password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
