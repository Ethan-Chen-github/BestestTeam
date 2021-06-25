import logo from "./bp.png";
import React from "react";
import { useState } from "react";
import { Divider, Button, Input, Form, Checkbox } from "antd";
// import LexChat from "react-lex";
import LexChat from "react-lex-plus";

export default function App() {
  const [botName, setBotName] = useState("");
  const [poolId, setPoolId] = useState("");
  const [region, setRegion] = useState("");
  const [showChat, setShowChat] = useState(false);

  const onFinish = (values) => {
    setBotName(values["botName"]);
    setPoolId(values["poolID"]);
    setRegion(values["region"]);
    setShowChat(true);
    console.log(botName, poolId,region);
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
          label="poolId"
          name="poolId"
          rules={[{ required: true, message: "Please input your poolId!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="region"
          name="region"
          rules={[{ required: true, message: "Please input your region! ex: us-west-2" }]}
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
          botName={botName}
          IdentityPoolId={poolId}
          placeholder="Placeholder text"
          backgroundColor="#FFFFFF"
          height="430px"
          region={region}
          headerText="Chat with our awesome bot"
          headerStyle={{ backgroundColor: "#ABD5D9", fontSize: "30px" }}
          greeting={
            "Hello, how can I help? You can say things like 'help' to get more info"
          }
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
