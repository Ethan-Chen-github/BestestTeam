import { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import Requester from "./requesters/Requester";
import VoiceFlow from "./components/VoiceFlow";
import Demo from "./components/Demo";
import {
  Divider,
  Button,
  Modal,
  Carousel,
  Popover,
  Drawer,
  notification,
} from "antd";
import AWSLEX from "./components/AWSLEX";

export default function App() {
  const [current, setCurrent] = useState("awslex");

  const { Header, Footer, Sider, Content } = Layout;

  const contentStyle = {
    height: "90px",
    color: "#fff",
    lineHeight: "90px",
    textAlign: "center",
    background: "green",
  };

  function handleClick(e) {
    setCurrent(e.key);
  }

  return (
    <div className="App">
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="awslex">AWS Lex</Menu.Item>
        <Menu.Item key="voiceflow">VoiceFlow</Menu.Item>
        <Menu.Item key="demo">Demo</Menu.Item>
      </Menu>
      <Header className="header">
        <h2 id="headerText">BP Voice Interface</h2>
      </Header>
      {current == "voiceflow" ? (
        <VoiceFlow />
      ) : current == "awslex" ? (
        <AWSLEX />
      ) : (
        <Demo />
      )}

      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            You can say: Show me the map for Wind Farm
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            You can say: Show me the Schematics for Wind Turbine
          </h3>
        </div>
      </Carousel>

      <Footer>Bestest Microsoft Edgies Team @2021 </Footer>
    </div>
  );
}
