import logo from "./bp.png";
import "./App.css";
import { React } from "react";
import { ReactMic } from "react-mic";
import { useEffect, useState } from "react";
import { Divider, Button, Layout } from "antd";
import { AudioTwoTone } from "@ant-design/icons";

export default function App() {
  const [record, setRecord] = useState(false);
  const [file, setFile] = useState("waiting");

  const { Header, Footer, Sider, Content } = Layout;

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
    console.log(recordedBlob.blobURL);
  }

  return (
    <div className="App">
      <Header className="header">
        <h2 id="headerText">BP Voice Interface</h2>
      </Header>

      <img src={logo} className="App-logo" alt="logo" />

      <Divider />

      <h2>Press Button for Voice Command</h2>

      <ReactMic
        record={record}
        className="sound-wave"
        onStop={onStop}
        onData={onData}
        strokeColor="green"
        backgroundColor="white"
      />

      <br />

      {/* <Button onClick={startRecording} type="button">
        Start
      </Button>
      <Button onMouseDown={stopRecording} type="button">
        Stop
      </Button> */}

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

      {file == "waiting" ? <div/>: <iframe src={file} />}

      <Divider />
      <Footer>@2021 Bestest Team</Footer>
    </div>
  );
}
