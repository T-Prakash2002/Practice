import React, { useState } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import Content5 from "./components/Content5";
import Content6 from "./components/Content6";

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedHeaderKey, setSelectedheaderKey] = useState<string>("Home");
  const [keyContentMenu, setKeyContentMenu] = useState<string>("1");
  const [selectedMenuKey, setSelectedMenuKey] = useState<string>("subnav 1");
  const [selectedSubNav, setSelectedSubNav] = useState<string>("option 1");

  const items1: MenuProps["items"] = ["Home", "About", "Service"].map(
    (key) => ({
      key,
      label: `${key}`,
    })
  );

  const items2: MenuProps["items"] = [
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  ].map((icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(2).fill(null).map((_, j) => {
        const subKey = index * 2 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });

  const handleHeaderItemKeys = (e: { key: string }) => {
    setSelectedheaderKey(e.key);
  };
  const handleMenuKey = (e: { key: string }) => {
    setKeyContentMenu(e.key);
    if (["1", "2"].includes(e.key)) {
      setSelectedMenuKey("subnav 1");
    } else if (["3", "4"].includes(e.key)) {
      setSelectedMenuKey("subnav 2");
    } else {
      setSelectedMenuKey("subnav 3");
    }
    setSelectedSubNav(`option ${e.key}`);
  };

  const renderContent = () => {
    switch (keyContentMenu){
      case '1':
        return <Content1/>
      case '2':
        return <Content2/>
      case '3':
        return <Content2/>
      case '4':
        return <Content3/>
      case '5':
        return <Content5/>
      case '6':
        return <Content6/>
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[selectedHeaderKey]}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
          onClick={handleHeaderItemKeys}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
            selectedKeys={[selectedMenuKey]}
            onClick={handleMenuKey}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>{selectedHeaderKey}</Breadcrumb.Item>

            <Breadcrumb.Item>{selectedMenuKey}</Breadcrumb.Item>

            <Breadcrumb.Item>{selectedSubNav}</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {renderContent()}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
