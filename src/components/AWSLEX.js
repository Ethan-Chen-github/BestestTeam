import logo from "./bp.png";
import React from "react";
import { useState } from "react";
import { Divider, Button } from "antd";
import { AudioTwoTone } from "@ant-design/icons";

export default function App() {
  const [showVoice, setShowVoice] = useState(false);

  function Voice() {
    setShowVoice(true);
  }

  return (
    <div className="App">
      {showVoice ? (
        <>
          Place holder for AWS LEX
        </>
      ) : (
        <>
          <img src={logo} className="App-logo" alt="logo" />

          <Divider />

          <h2>Start the AWS Lex Bot</h2>

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
    </div>
  );
}
