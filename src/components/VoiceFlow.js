import logo from "./bp.png";
import React from "react";
import { useState } from "react";
import { Divider, Button, Layout } from "antd";
import { AudioTwoTone } from "@ant-design/icons";

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
    <div className="App">
      {showVoice ? (
        <>
          <iframe
            frameBorder="0"
            // https://creator.voiceflow.com/prototype/60c3700ab3a92a0006f483e4
            src="https://creator.voiceflow.com/prototype/60c3700ab3a92a0006f483e4"
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

      {/* <span>link to voice file: </span>
      <a href={file}>{file}</a> */}
    </div>
  );
}
