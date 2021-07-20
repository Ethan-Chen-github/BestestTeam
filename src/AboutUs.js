import React from "react";
import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Rate,
  Typography,
  Space,
  Divider,
} from "antd";
import "./App.less";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";

const { Title } = Typography;

export default function AboutUs() {
  const Names = [
    "Koehne, Christopher,",
    "Razzaq, Bassam",
    "Perille, Daniel",
    "Shieh, John",
    "Roberts, Armisha",
    "Templeton, Sabrina",
    "Reddygari, Praneeth",
    "Nawab, John",
    "Momin, Sarosha",
    "Quadri, Isra",
    "Joshi, Ian",
    "Ivy, Aidan",
    "DeLouise, Alyssa",
    "Chen, Ethan",
    "Getmanchuk, Alice",
    "Dutt, Nikhil",
  ];
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <br/>
      <Title>The Bestest Microsoft Edgies</Title>
      <Divider />
      <QueueAnim
        delay={300}
        style={{
          display: "grid",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {Names.map((name, index) => {
          return (
            <div key={index}>
              <Title level={4}> {name}</Title>
            </div>
          );
        })}
      </QueueAnim>
    </div>
  );
}
