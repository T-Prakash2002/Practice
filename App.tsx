import React, { useContext, useEffect } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu, theme, FloatButton } from "antd";
import {
  UserOutlined,
  UserAddOutlined,
  LoginOutlined,
  LogoutOutlined,
  HomeFilled,
  EditOutlined,
  DatabaseOutlined,
  GoldOutlined,
} from "@ant-design/icons";
import { useNavigate, Outlet } from "react-router-dom";
import { ContextOperation } from "./Operation/Operation";

const { Header, Content, Sider } = Layout;

const items1: MenuProps["items"] = [
  {
    key: "home",
    label: "Home",
    icon: <HomeFilled />,
  },
];

const headerAuth: MenuProps["items"] = [
  {
    key: "register",
    label: "Register",
    icon: <UserAddOutlined />,
  },
  {
    key: "login",
    label: "Login",
    icon: <LoginOutlined />,
  },
];

const loginHeaderMenu: MenuProps["items"] = [
  {
    key: "logout",
    label: "Logout",
    icon: <LogoutOutlined />,
  },
];

const items2: MenuProps["items"] = [
  {
    key: "dashboard",
    label: "Dasboard",
    icon: <GoldOutlined />,
  },
  {
    key: "task",
    label: "Task",
    icon: <EditOutlined />,
  },{
    key:'dataTable',
    label:'Table',
    icon:<DatabaseOutlined />
  }
];

interface contextType {
  isLoggedIn: boolean;
  handleLogout: () => void;
}

const App: React.FC = () => {
  const { isLoggedIn, handleLogout } = useContext(
    ContextOperation
  ) as contextType;

  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {}, []);

  const handleSiderMenu = (e: { key: string }) => {
    if (e.key == "dashboard") {
      navigate("dashboard");
    } else if (e.key == "task") {
      navigate("task");
    }else if(e.key == 'dataTable'){
      navigate('table_data')
    }
  };

  const handleAuth = (e: { key: string }) => {
    if (e.key == "register") {
      navigate("register");
    } else if (e.key == "login") {
      navigate("login");
    } else {
      handleLogout();
    }
  };

  return (
    <Layout>
      <FloatButton
        onClick={() => navigate("profile")}
        icon={<UserOutlined />}
      />
      {/* Header  */}
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: colorBgContainer,
        }}
      >
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
          style={{ flex: 3 }}
        />

        <Menu
          mode="horizontal"
          items={isLoggedIn ? loginHeaderMenu : headerAuth}
          style={{
            flex: 1,
          }}
          onSelect={handleAuth}
        />
      </Header>

      {/* Content */}
      <Layout
        style={{
          padding: "24px 0",
          background: colorBgContainer,
        }}
      >
        <Sider
          style={{ background: colorBgContainer }}
          width={200}
          collapsedWidth={50}
          collapsible
          breakpoint="md"
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%" }}
            items={items2}
            onSelect={handleSiderMenu}
          />
        </Sider>

        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
