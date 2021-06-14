import logo from "./bp.png";
import React from "react";
import { ReactMic } from "react-mic";
import { useEffect, useState } from "react";
import {
  Divider,
  Button,
  Layout,
  Modal,
  Carousel,
  Popover,
  Drawer,
  notification,
} from "antd";
import {
  AudioTwoTone,
  QuestionOutlined,
  MenuOutlined,
} from "@ant-design/icons";

export default function App() {
  const [showVoice, setShowVoice] = useState(false);

  const contentStyle = {
    height: "90px",
    color: "#fff",
    lineHeight: "90px",
    textAlign: "center",
    background: "green",
  };

  const { Header, Footer, Sider, Content } = Layout;

  function Voice() {
    setShowVoice(true);
  }

  return (
    <div className="center">
      <Header className="header">
        <h2 id="headerText">BP Voice Interface</h2>
      </Header>

      {showVoice ? (
        <>
          <iframe
            frameBorder="0"
            src="https://creator.voiceflow.com/prototype/60c3c2173f3741000603c680"
            allow="camera;microphone"
            id="map"
          />
        </>
      ) : (
        <>
          <img src={logo} className="App-logo" alt="logo" />

          <Divider />

          <h2>Start the VoiceFlow</h2>

          <Button
            shape="circle"
            icon={<AudioTwoTone id="aud" />}
            size="large"
            onClick={Voice}
          />
        </>
      )}

      <br />
      <br />
      <br />

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
        <div>
          <h3 style={contentStyle}>
            You can say: Who is the best team for Grand Challenge?
          </h3>
        </div>
      </Carousel>

      <Footer>@2021 Bestest Team</Footer>

      {/* <span>link to voice file: </span>
      <a href={file}>{file}</a> */}
    </div>
  );
}
