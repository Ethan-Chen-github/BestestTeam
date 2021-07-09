import logo from "./bp.png";
import React from "react";
import { useState } from "react";
import { Divider, Button, Input, Form, Checkbox, Popover} from "antd";
import {
  AudioTwoTone,
  QuestionOutlined,
  MenuOutlined,
} from "@ant-design/icons";

export default function App() {
  const [botName, setBotName] = useState("");
  const [poolId, setPoolId] = useState("");
  const [region, setRegion] = useState("");

  const onFinish = (values) => {
    setBotName(values["botName"]);
    setPoolId(values["poolId"]);
    setRegion(values["region"]);
  };

  return (
    <div className="App">
      <br />

      <iframe
        frameBorder="0"
        src="http://localhost:8000/"
        allow="camera;microphone"
        allowFullScreen
        id="map"
      />

      {botName !== "" && poolId !== "" && region !== "" ? (
        <>
          <iframe
            frameBorder="0"
            src="http://localhost:8000/"
            allow="camera;microphone"
            id="map"
          />
          <div>Your BotName: {botName}</div>
          <div>Your PoolID: {poolId}</div>
          <div>Your Region: {region}</div>
        </>
      ) : (
        <>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              label="botName"
              name="botName"
              rules={[
                { required: true, message: "Please input your botName!" },
              ]}
            >
              <Input placeholder="Wendy" />
            </Form.Item>

            <Form.Item
              label="poolId"
              name="poolId"
              rules={[{ required: true, message: "Please input your poolId!" }]}
            >
              <Input placeholder="us-west-2:xxxxx-xxxx-xxxx-xxxx-xxxxxxx" />
            </Form.Item>

            <Form.Item
              label="region"
              name="region"
              rules={[
                {
                  required: true,
                  message: "Please input your region! ex: us-west-2",
                },
              ]}
            >
              <Input placeholder="us-west-2" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Start Lex Bot
              </Button>
              <Popover content={<div>Help</div>}>
            <Button
              type="primary"
              shape="circle"
              size="large"
              id='helpLex'
              icon={<QuestionOutlined id="aud" />}
            />
          </Popover>
            </Form.Item>
          </Form>

        </>
      )}

      <br />
    </div>
  );
}
