import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { SmileOutlined } from "@ant-design/icons";
import { notification } from "antd";

export const ContextOperation = React.createContext({});

interface Props {
  children: React.ReactNode;
}

export interface UserDataType {
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
  id?: string;
  prefix: string;
}

interface notifyData {
  message: string;
  description?: string;
  icon?: React.ReactNode;
  duration?: number;
  pauseOnHover?: boolean;
  showProgress?: boolean;
  placement?: "top" | 
  "topLeft" | 
  "topRight" |
  "bottom" |
  "bottomLeft" |
  "bottomRight" | undefined;
}

const Operation = ({ children }: Props) => {
  const [api, contextHolder] = notification.useNotification();


  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(localStorage.getItem("isLoggedIn") === "true" || false);
  const [userData, setUserData] = useState<UserDataType>(JSON.parse(localStorage.getItem("loggedInUser")|| "[]"));



  const handleNotification = ({message, description, icon, duration, pauseOnHover, showProgress, placement}: notifyData): void => {
    api.open({
      message,
      description,
      icon,
      duration,
      pauseOnHover,
      showProgress,
      placement,
    });
  };

//   Registeration

  const handleRegisterWrite = (value: UserDataType): boolean => {

    const previousData = JSON.parse(localStorage.getItem("userData") || "[]");


    const inUserData = previousData.some(
      (user: UserDataType) =>
        user.email === value.email && user.phoneNumber === value.phoneNumber
    );

    if (inUserData) {

      handleNotification({
        message: "User already exists",
        description: "Use Another information,try Again!",
        icon: <SmileOutlined style={{ color: "#ff0000" }} />,
        duration: 2,
        pauseOnHover: true,
        showProgress: true,
        placement: "topLeft",
      })


      return false;
    }

    const newData = [
      ...previousData,
      {
        id: uuidv4(),
        ...value,
      },
    ];
    localStorage.setItem("userData", JSON.stringify(newData));

    handleNotification({
      message: "Registration Success",
      description: "You have successfully registered",
      icon: <SmileOutlined style={{ color: "#90f5b8" }} />,
      duration:2,  
      pauseOnHover: true,
      showProgress: true,
      placement: "topLeft",
    })

    return true;
  };

  // Login 

  const handleLogin = (value: UserDataType):boolean => {
    const data = JSON.parse(localStorage.getItem("userData") || "[]");

      if(data.length === 0){

        handleNotification({
          message: "No Account Found",
          icon: <SmileOutlined style={{ color: "#ff0000" }} />,
          duration: 1,  
          pauseOnHover: true,
          showProgress: true,
          placement: "topLeft",
        })

        return false;
      }else{
        const inUserData = data.find(
          (user: UserDataType) =>
            user.email === value.email && user.password === value.password
        );
        
    
        if (!inUserData) {


          handleNotification({
            message: "Login Failed",
            description: "User not found",
            icon: <SmileOutlined style={{ color: "#ff0000" }} />,
            duration: 1,  
            pauseOnHover: true,
            showProgress: true,
            placement: "topLeft",
          })


          return false;
        } else {
          api.open({
            message: "Login Success",
            description: "You have successfully logged in",
            icon: <SmileOutlined style={{ color: "#90f5b8" }} />,
            duration: 1,  
            pauseOnHover: true,
            showProgress: true,
            placement: "topLeft",
          });
                    

          localStorage.setItem("loggedInUser", JSON.stringify(inUserData));
          localStorage.setItem("isLoggedIn", "true");
    
          const user={
            ...inUserData,
            password: "",
          }
    
          setIsLoggedIn(true);
          setUserData(user);
    
          return true;
      }
    }
  };

  const handleLogout = () => {
    
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    setUserData({} as UserDataType);



    handleNotification({
      message: "Logout Success",
      description: "You have successfully logged out",
      icon: <SmileOutlined style={{ color: "#f00" }} />,
      pauseOnHover: true,
      duration: 1,
      showProgress: true,
      placement: "topLeft",
    })

  };

  return (
    <ContextOperation.Provider
      value={{
        handleRegisterWrite,
        handleLogin,
        handleLogout,
        isLoggedIn,
        userData,
      }}
    >
      {contextHolder}
      {children}
    </ContextOperation.Provider>
  );
};

export default Operation;
