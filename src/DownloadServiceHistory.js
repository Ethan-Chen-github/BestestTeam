import React from "react";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "./App.less";

const downloadFile = () => {
  window.location.href =
    "https://servicehistorybucket.s3.amazonaws.com/service_history_notes.csv";
};

const DownloadServiceHistory = () => {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
        verticalAlign: "middle",
        height: "100%",
      }}
    >
      <Button
        type="primary"
        shape="round"
        icon={<DownloadOutlined />}
        size="large"
        onClick={downloadFile}
      >
        Download
      </Button>
    </div>
  );
};

export default DownloadServiceHistory;
