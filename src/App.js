
import { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import Requester from "./requesters/Requester";
import VoiceFlow from "./components/VoiceFlow";
import Demo from "./components/Demo"

export default function App() {
  const [current, setCurrent] = useState("voiceflow");

  function handleClick(e) {
    setCurrent(e.key);
  }

  return (
    <div className="center">
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="voiceflow">VoiceFlow</Menu.Item>
        <Menu.Item key="demo">Demo</Menu.Item>
      </Menu>
      {
        current == 'voiceflow'?
        <Task1 />:
        current == 'task1_2'?
        <Task1_2 />:
        current == 'task2'?
        <Task2 />:
        current == 'task2_2'?
        <Task2_2 />:
        current == 'task3'?
        <Task3 />:
        current == 'task3_2'?
        <Task3_2 />:
        <Task4 />
      }
    </div>
  );
}