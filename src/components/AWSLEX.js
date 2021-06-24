import logo from "./bp.png";
import React from "react";
import { useState } from "react";
import { Divider, Button, Input, Form, Checkbox } from "antd";
import { AudioTwoTone } from "@ant-design/icons";
import LexChat from "react-lex";

export default function App() {
  const [botName, setBotName] = useState("");
  const [poolId, setPoolId] = useState("");
  const [showChat, setShowChat] = useState(false);

  const onFinish = (values) => {
    console.log(values);
    setBotName(values["botName"]);
    setPoolId(values["poolID"]);
    setShowChat(true);
  };

  return (
    <div className="App">
      <br />
      <br />
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          label="botName"
          name="botName"
          rules={[{ required: true, message: "Please input your botName!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="poolID"
          name="poolID"
          rules={[{ required: true, message: "Please input your poolID!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Start Lex Bot
          </Button>
        </Form.Item>
      </Form>
      {showChat ? (
        <LexChat
          botName= {botName}
          IdentityPoolId= {poolId}
          placeholder="Placeholder text"
          style={{ position: "absolute" }}
          backgroundColor="#FFFFFF"
          height="500px"
          headerText="Chat with our awesome bot"
        />
      ) : (
        <></>
      )}

      <br />
      <br />
      <br />
    </div>
  );
}
