import logo from "./bp.png";
import React from "react";
import { useState } from "react";
import { Divider, Button,Input} from "antd";
import { AudioTwoTone } from "@ant-design/icons";
import LexChat from "react-lex";


export default function App() {
  const [showVoice, setShowVoice] = useState(false);
  const [botName, setBotName] = useState('')
  const [poolId, setPoolId] = useState('')
 
  function Voice() {
    setShowVoice(true);
  }

  return (
    <div className="App">
      <Input placeholder="botName" />
      <Input placeholder="IdentityPoolId" />
      <Button type="primary">Primary Button</Button>


      <LexChat
        id = 'lexBot'
        botName= {botName}
        IdentityPoolId= {poolId}
        placeholder="Placeholder text"
        style={{ position: "absolute" }}
        backgroundColor="#FFFFFF"
        height="430px"
        headerText="Chat with our awesome bot"
      />

      <br />
      <br />
      <br />
    </div>
  );
}
