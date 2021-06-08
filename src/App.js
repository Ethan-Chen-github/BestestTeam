import logo from "./bp.png";
import "./App.css";
import { React } from "react";
import { ReactMic } from "react-mic";
import { useEffect, useState } from "react";
import { Divider, Button, Layout, Modal } from "antd";
import { AudioTwoTone } from "@ant-design/icons";

export default function App() {
  const [record, setRecord] = useState(false);
  const [file, setFile] = useState("waiting");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { Header, Footer, Sider, Content } = Layout;

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

      <Button
        shape="circle"
        icon={<AudioTwoTone />}
        size="large"
        onMouseDown={startRecording}
        onMouseUp={stopRecording}
      />

      <br />
      <br />

      <span>link to voice file: </span>
      <a href={file}>{file}</a>


      <Divider />
      <Footer>@2021 Bestest Team</Footer>



      <Modal title="Voice Command" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Audio Command</p>
        <iframe src={file} />
      </Modal>
    </div>
  );
}
