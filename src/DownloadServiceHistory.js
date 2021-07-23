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
        // width: "100%",
        textAlign: "center",
        marginLeft: "12.5%",
        marginRight: "12.5%",
      }}
    >
      Service History is a way to store observations about a particular Wind
      Turbine. The format of this download will be a CSV File. Inside the CSV,
      there is the turbine number, date of the observation, and the observation
      itself.
      <Button
        type="primary"
        shape="round"
        icon={<DownloadOutlined />}
        size="large"
        onClick={downloadFile}
        style={{
          width: "50%",
          marginLeft: "25%",
          marginTop: "5%",
          marginRight: "25%",
        }}
      >
        Download
      </Button>
    </div>
  );
};

export default DownloadServiceHistory;
