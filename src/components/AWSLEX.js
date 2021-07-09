import logo from "./bp.png";
import { useState, useEffect } from "react";
import { Divider, Button, Input, Form, Checkbox, Popover } from "antd";
import {
  AudioTwoTone,
  QuestionOutlined,
  MenuOutlined,
} from "@ant-design/icons";

export default function App(props) {
  const [botName, setBotName] = useState("");
  const [poolId, setPoolId] = useState("");
  const [region, setRegion] = useState("");

  const onFinish = (values) => {
    setBotName(values["botName"]);
    setPoolId(values["poolId"]);
    setRegion(values["region"]);
  };

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div className="App">

      {props.debug ? (
        <iframe
          frameBorder="0"
          src="http://localhost:8000/"
          allow="camera;microphone"
          allowFullScreen
          id="map"
        />
      ) : (
        <>
          <img src={logo} className="App-logo" alt="logo" />
          <Divider />
        </>
      )}

      {botName !== "" && poolId !== "" && region !== "" ? (
        <>
          <iframe
            frameBorder="0"
            src="http://localhost:8000/"
            allow="camera;microphone"
            id="map"
          />
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
              <Button type="primary" htmlType="submit" id="bp-but">
                Start Lex Bot
              </Button>
              <Popover content={<div>Help</div>}>
                <Button
                  type="primary"
                  shape="circle"
                  size="large"
                  id="helpLex"
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
