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
  Empty,
} from "antd";
import "./App.less";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

const { Option } = Select;
const { Title } = Typography;

export default function Audio() {
  return (
    <>
      <Empty
        style={{
          display: "grid",
          justifyContent: "center",
          alignContent: "center",
          verticalAlign: "middle",
          height: "100%",
        }}
      />
    </>
  );
}
