import React, { useState, useContext } from "react";
import {
  Form,
  Button,
  Input,
  InputNumber,
  Select,
  DatePicker,
  Radio,
  Checkbox,
  Modal,
} from "antd";
import dayjs from "dayjs";
import Link from "antd/es/typography/Link";
import AgreementPolicy from "../Shared/agreementRules";
import { ContextOperation } from "../Operation/Operation";
import { useNavigate } from "react-router-dom";
import { UserAddOutlined } from "@ant-design/icons";

interface UserData {
  username: string;
  email: string;
  gender: string;
  age: number;
  country: string;
  phoneNumber: string;
  bloodGroup: string;
  address: string;
  password: string;
  DOB: string;
}

interface context {
  handleRegisterWrite: (value: UserData) => boolean;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
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
      offset: 8,
    },
  },
};

const bloodGroups: string[] = [
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
];

const { Option } = Select;

const countryCodes: { country: string; code: string }[] = [
  { country: "United States", code: "+1" },
  { country: "Canada", code: "+1" },
  { country: "United Kingdom", code: "+44" },
  { country: "Australia", code: "+61" },
  { country: "India", code: "+91" },
  { country: "Germany", code: "+49" },
  { country: "France", code: "+33" },
  { country: "Japan", code: "+81" },
  { country: "China", code: "+86" },
  { country: "Brazil", code: "+55" },
  { country: "South Africa", code: "+27" },
  { country: "Russia", code: "+7" },
  { country: "Mexico", code: "+52" },
];

const prefixSelector = (
  <Form.Item
    name="prefix"
    noStyle
    rules={[{ required: true, message: "Please select your country code!" }]}
  >
    <Select style={{ width: 70 }}>
      {countryCodes.map(({ country, code }, index) => (
        <Option key={index} value={code}>
          {code}
        </Option>
      ))}
    </Select>
  </Form.Item>
);

const Register: React.FC = () => {
  const navigate = useNavigate();

  const { handleRegisterWrite } = useContext(ContextOperation) as context;

  const [modelOpen, setModelOpen] = useState<boolean>(false);

  const handleSubmit = (value: UserData) => {
    if (handleRegisterWrite(value)) {
      navigate("/");
    }
  };

  return (
    <div className="grid items-center justify-start">
      <Form
        {...formItemLayout}
        name="control-hooks"
        onFinish={(value) => handleSubmit(value)}
        className="border-2 px-5 rounded-md"
        // initialValues={{
        //   prefix: "+91",
        //   DOB: dayjs("2015-01-01", "YYYY-MM-DD"),
        //   gender: "male",
        //   bloodGroup: "A+",
        //   phoneNumber: "9876543210",
        //   address: "123 Main Street",
        //   password: "password",
        //   username: "username",
        //   email: "email@gmail.com",
        //   age: 20,
        //   agreement: true,
        // }}
      >
        <Form.Item className="flex py-10 justify-center">
          <h1 className="text-3xl font-bold">REGISTRATION</h1>
        </Form.Item>

        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please input your username" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please input your email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="age"
          label="Age"
          rules={[
            { required: true, message: "Please input your age" },
            { type: "number", min: 0, max: 99 },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Please input your gender" }]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="DOB"
          label="Date of Birth"
          rules={[
            { required: true, message: "Please input your Date of Birth" },
          ]}
        >
          <DatePicker
            minDate={dayjs("2000-01-01", "YYYY-MM-DD")}
            maxDate={dayjs(new Date(), "YYYY-MM-DD")}
          />
        </Form.Item>

        <Form.Item
          name={"bloodGroup"}
          label="Blood Group"
          rules={[{ required: true, message: "Please select Blood Group" }]}
        >
          <Radio.Group buttonStyle={"solid"}>
            {bloodGroups.map((bloodGroup, index) => (
              <Radio.Button key={index} value={bloodGroup}>
                {bloodGroup}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name={"phoneNumber"}
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number" },
          ]}
        >
          <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name={"address"}
          label="Address"
          rules={[
            { required: true, message: "Please input your address" },
            { min: 4, message: "Address must be at least 4 characters" },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          name={"password"}
          label="Password"
          rules={[
            { required: true, message: "Please input your password" },
            { min: 4, message: "Password must be at least 4 characters" },
            { max: 10, message: "Password must be less than 10 characters" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the{" "}
            <Link href="#" onClick={() => setModelOpen(true)}>
              agreement
            </Link>
          </Checkbox>
        </Form.Item>

        <Modal
          title="Agreement"
          open={modelOpen}
          onOk={() => setModelOpen(false)}
          onCancel={() => setModelOpen(false)}
        >
          <AgreementPolicy />
        </Modal>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
