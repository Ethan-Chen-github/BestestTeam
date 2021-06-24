import logo from "./bp.png";
import React from "react";
import { useState } from "react";
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

  function Voice() {
    setShowVoice(true);
  }

  return (
    <div className="App">
      {showVoice ? (
        <>
          <iframe
            frameBorder="0"
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

      <Popover content={<div>Help</div>}>
        <Button
          type="primary"
          shape="circle"
          size="large"
          id="help"
          icon={<QuestionOutlined id="aud" />}
        />
      </Popover>

      <br />
      <br />
      <br />
      <br />
      <br />

    </div>
  );
}
