import { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import VoiceFlow from "./components/VoiceFlow";
import Demo from "./components/Demo";
import {
  Carousel,
  Modal,
  Form,
  Input,
  Button,
  Popconfirm,
  message,
  Content,
  Drawer,
} from "antd";
import AWSLEX from "./components/AWSLEX";
import {
  AudioTwoTone,
  QuestionOutlined,
  MenuOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";

export default function App() {
  const [current, setCurrent] = useState("awslex");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [visible, setVisible] = useState(false);

  const { Header, Footer, Sider, Content } = Layout;

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

  function handleClick(e) {
    setCurrent(e.key);
    setVisible(false);
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log(values);
    setUser(values["userName"]);
    localStorage.setItem("user", JSON.stringify(values["userName"]));
  };

  function confirm(e) {
    setUser("");
    localStorage.clear();
  }

  function cancel(e) {
    console.log(e);
  }

  return (
    <div className="App">
      {!user && (
        <Modal
          title="Please enter your user name"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          width={500}
        >
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              label="userName"
              name="userName"
              rules={[
                { required: true, message: "Please input your user name!" },
              ]}
            >
              <Input placeholder="Billy" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      )}

      <Header className="header">
        <span id="headerText">BP Voice Interface</span>
        <Popconfirm
          title="Are you sure to sign out?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <span id="user">Hi , {user}</span>
        </Popconfirm>
        <span id="menuBut">
          <Button
            type="primary"
            icon={<MenuOutlined id="aud" />}
            size="middle"
            id="bp-but"
            onClick={showDrawer}
          />
        </span>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 0 }}
      >
        {current == "awslex" ? <AWSLEX /> : <Demo />}
      </Content>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            You can say: Show me the map for Wind Farm
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            You can say: Show me the Schematics for Wind Turbine
          </h3>
        </div>
      </Carousel>

      <Footer style={{ textAlign: "center" }}>
        Bestest Microsoft Edgies Team @2021{" "}
      </Footer>

      <Drawer
        title="Menu"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={220}
      >
        <Sider trigger={null}>
          <div className="logo" />
          <Menu onClick={handleClick} selectedKeys={[current]} mode="inline">
            <Menu.Item key="awslex">AWS Lex</Menu.Item>
            <Menu.Item key="demo">VoiceNote</Menu.Item>
          </Menu>
        </Sider>
      </Drawer>
    </div>
  );
}
