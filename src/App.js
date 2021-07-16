import React from "react";
import { useState, useEffect } from "react";
import {
  Select,
  Typography,
  Divider,
  Layout,
  Menu,
} from "antd";
import "./App.less";
import { AmazonOutlined, AudioOutlined, UserOutlined,QuestionOutlined } from "@ant-design/icons";
import AboutUs from "./AboutUs";
import Audio from "./Audio";

const { Header, Content, Footer, Sider } = Layout;
const { Option } = Select;
const { Title } = Typography;

export default function App() {
  const [current, setCurrent] = useState("awslex");

  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          width="300"
          style={{ background: "#fff" }}
        >
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["awslex"]}
            style={{ padding: "5%", height: "100%" }}
            onClick={handleClick}
          >
            <div className="logo">
              <img src="https://www.bp.com/apps/settings/wcm/designs/refresh/bp/images/navigation/bp-logo.svg" />
            </div>
            <Divider />
            <Menu.Item key="awslex" icon={<AmazonOutlined />}>
              AWS Lex Bot
            </Menu.Item>
            <Menu.Item key="audio" icon={<AudioOutlined />}>
              Voice Recorder
            </Menu.Item>
            <Menu.Item key="aboutus" icon={<UserOutlined />}>
              About Us
            </Menu.Item>
            <Menu.Item key="help" icon={<QuestionOutlined />}>
              Help
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{height:'100vh'}}>
          <Content style={{ background: "#fff" }}>
            {current === "awslex" ? (
              <iframe
                frameBorder="0"
                src="http://localhost:8000/"
                allow="camera;microphone"
                style={{ width: "100%", height: "100%" }}
              />
            ) : current === 'audio' ?(
              <Audio />
            ):(<AboutUs />)}
          </Content>
          <Footer style={{ textAlign: "center", minHeight: "100px" }}>
            <h3>bp p.l.c.</h3> ©2021 Created by Bestest Microsoft Edges
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}
