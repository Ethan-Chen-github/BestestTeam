import logo from "./bp.png";
import "../App.css";
import React from "react";
import { ReactMic } from "react-mic";
import { useEffect, useState } from "react";
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
import Sample from "./Demo_Sub";

export default function App() {
  const [record, setRecord] = useState(false);
  const [file, setFile] = useState("waiting");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { Header, Footer, Sider, Content } = Layout;
  const [visible, setVisible] = useState(false);

  const openNotification = () => {
    notification.open({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };
  const contentStyle = {
    height: "90px",
    color: "#fff",
    lineHeight: "90px",
    textAlign: "center",
    background: "green",
  };

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const content = (
    <div>
      <p>Don't be shy! say something! </p>
    </div>
  );

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    // openNotification();
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  useEffect(() => {}, []);

  function startRecording() {
    setRecord(true);
  }

  function stopRecording() {
    setRecord(false);
  }

  function onData(recordedBlob) {
    console.log("chunk of real-time data is: ", recordedBlob);
  }

  function onStop(recordedBlob) {
    setFile(recordedBlob.blobURL);
    setIsModalVisible(true);
  }

  return (
    <div className="App">

      <img src={logo} className="App-logo" alt="logo" />

      <Divider />

      <h2>Hold to Record Voice Command</h2>

      <ReactMic
        record={record}
        className="sound-wave"
        onStop={onStop}
        onData={onData}
        strokeColor="green"
        backgroundColor="white"
        mimeType="audio/mp3"
      />

      <br />
      <Popover content={content}>
        <Button
          shape="circle"
          icon={<AudioTwoTone id="aud" />}
          size="large"
          onMouseDown={startRecording}
          onMouseUp={stopRecording}
        />
      </Popover>

      <br />
      <br />
      <br />


      {/* <Sample />   */}

      {/* <Button type="primary" icon={<MenuOutlined id='aud'/>} size='middle' id='menu'/> */}

      <Popover content={<div>Help</div>}>
        <Button
          type="primary"
          shape="circle"
          size="large"
          id="help"
          icon={<QuestionOutlined id="aud" />}
          onClick={showDrawer}
        />
      </Popover>

      <Drawer
        title="Help"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>

      <Modal
        title="Voice Command"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1100}
      >
        <iframe src={file}  />
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27702.085128008992!2d-95.6353049!3d29.784562!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7d423a5fdf0dbbad!2sbp%20Center%20For%20High%20Performance%20Computing!5e0!3m2!1sen!2sus!4v1623265059348!5m2!1sen!2sus"
          id="map"
        /> */}
      </Modal>

      {/* <span>link to voice file: </span>
      <a href={file}>{file}</a> */}
    </div>
  );
}