import logo from "./bp.png";
import "./App.css";
import { React } from "react";
import { ReactMic } from "react-mic";
import { useEffect, useState } from "react";
import { Divider, Button, Layout, Modal, Carousel, Popover } from "antd";
import { AudioTwoTone } from "@ant-design/icons";

export default function App() {
  const [record, setRecord] = useState(false);
  const [file, setFile] = useState("waiting");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { Header, Footer, Sider, Content } = Layout;

  const contentStyle = {
    height: "90px",
    color: "#fff",
    lineHeight: "90px",
    textAlign: "center",
    background: "green",
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
      <Header className="header">
        <h2 id="headerText">BP Voice Interface</h2>
      </Header>

      <img src={logo} className="App-logo" alt="logo" />

      <Divider />

      <h2>Hold for Voice Command</h2>

      <ReactMic
        record={record}
        className="sound-wave"
        onStop={onStop}
        onData={onData}
        strokeColor="green"
        backgroundColor="white"
      />

      <br />
      <Popover content={content}>
        <Button
          shape="circle"
          icon={<AudioTwoTone />}
          size="large"
          onMouseDown={startRecording}
          onMouseUp={stopRecording}
        />
      </Popover>

      <br />
      <br />
      <br />

      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>You can say: What is current wind speed?</h3>
        </div>
        <div>
          <h3 style={contentStyle}>You can say: What is current output?</h3>
        </div>
        <div>
          <h3 style={contentStyle}>You can say: Who is the best team for Grand Challenge?</h3>
        </div>
      </Carousel>

      <Footer>@2021 Bestest Team</Footer>

      <Modal
        title="Voice Command"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Audio Command</p>
        <iframe src={file} />
      </Modal>

      <span>link to voice file: </span>
      <a href={file}>{file}</a>
    </div>
  );
}
