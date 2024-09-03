import React, { useContext } from "react";
import { ContextOperation, UserDataType } from "../Operation/Operation";
import { Typography, Result, Avatar, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const { userData, isLoggedIn } = useContext(ContextOperation) as {
    userData: UserDataType;
    isLoggedIn: boolean;
  };

  const navigate=useNavigate()

  const { Title, Text } = Typography;
  return (
    <div
      className="flex flex-col items-center
      pt-6
    w-4/5
    justify-center m-9
    rounded-md shadow-sm
    bg-slate-100
    border-2 border-green-100
    "
    >
      <div className="profileLogo ">
        <sup
          className="
          text-4xl
         text-gray-500 rounded-full 
        p-4 hover:text-green-800
        hover:bg-green-0
        hover:border-green-200
        hover:cursor-pointer
        "
        >
          {isLoggedIn ? (
            <Avatar
              style={{
                backgroundColor: "#f56a00",
                verticalAlign: "center",
                fontSize: "42px",
                textTransform: "uppercase",
              }}
              size={100}
            >
              {userData.username[0]}
            </Avatar>
          ) : (
            null
          )}
        </sup>
      </div>

      {isLoggedIn ? (
        <Title level={3} className="text-center">
          <div className="flex flex-col p-4 items-center">
            <Title level={3} className="text-center uppercase">{userData.username}</Title>
            
          </div>

          <div
            className="flex flex-col p-14 gap-5 
       bg-white border m-3 rounded-md
       hover:cursor-context-menu
       text-green-300
       hover:border-green-300
       hover:text-green-900
      "
          >
            <Text strong keyboard type="secondary">
              Email: {userData.email}
            </Text>
            <Text strong>Age: {userData.age}</Text>
            <Text strong>Date of Birth:{userData?.DOB?.slice(0, 10)}</Text>
            <Text strong>
              Phone Number:{userData.prefix} {userData.phoneNumber}
            </Text>
            <Text strong>Blood Group: {userData.bloodGroup}</Text>

            <Text strong>Gender: {userData.gender}</Text>
            <Text strong> Address: {userData.address}</Text>
          </div>
        </Title>
      ) : (
        <Result
          status="warning"
          title="No user Data Found"
          extra={<Button type="dashed" onClick={()=>navigate('/login')
          }>Please Login</Button>}
        />
      )}
    </div>
  );
};

export default Profile;