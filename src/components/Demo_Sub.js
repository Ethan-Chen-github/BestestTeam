import React from "react";
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
  Statistic,
  Row,
  Col,
  Tabs,
  Card,
  Progress,
  Timeline,
} from "antd";
import {
  AudioTwoTone,
  QuestionOutlined,
  MenuOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";

export default function Sample() {
  function callback(key) {
    console.log(key);
  }
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const { TabPane } = Tabs;

  const { Countdown } = Statistic;
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

  function onFinish() {
    console.log("finished!");
  }

  function onChange(val) {
    if (4.95 * 1000 < val && val < 5 * 1000) {
      console.log("changed!");
    }
    function callback(key) {
      console.log(key);
    }
  }
  return (
    <>
      <Button
        type="primary"
        icon={<MenuOutlined id="aud" />}
        size="middle"
        id="menu"
        onClick={showDrawer}
      />
      <Drawer
        title="Sample Output"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={1000}
      >
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Statitics" key="1">
            <Row gutter={16}>
              <Col span={12}>
                <Card>
                  <Statistic
                    title="Active"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: "#3f8600" }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card>
                  <Statistic
                    title="Idle"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: "#cf1322" }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Countdown
                  title="Countdown"
                  value={deadline}
                  onFinish={onFinish}
                />
              </Col>
              <Col span={12}>
                <Countdown
                  title="Million Seconds"
                  value={deadline}
                  format="HH:mm:ss:SSS"
                />
              </Col>
              <Col span={12}>
                <Countdown
                  title="Countdown"
                  value={Date.now() + 10 * 1000}
                  onChange={onChange}
                />
              </Col>
            </Row>
            ,
          </TabPane>
          <TabPane tab="Progress" key="2">
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <br />
            <br />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Progress type="circle" percent={75} />
            <Progress type="circle" percent={70} status="exception" />
            <Progress type="circle" percent={100} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Progress percent={30} steps={5} />
            <Progress percent={50} steps={3} />
          </TabPane>
          <TabPane tab="Timeline" key="3">
            <Timeline>
              <Timeline.Item color="green">
                Create a services site 2015-09-01
              </Timeline.Item>
              <Timeline.Item color="green">
                Create a services site 2015-09-01
              </Timeline.Item>
              <Timeline.Item color="red">
                <p>Solve initial network problems 1</p>
                <p>Solve initial network problems 2</p>
                <p>Solve initial network problems 3 2015-09-01</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
              </Timeline.Item>
              <Timeline.Item color="gray">
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
              </Timeline.Item>
              <Timeline.Item color="gray">
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
              </Timeline.Item>
            </Timeline>
            ,
          </TabPane>
        </Tabs>
      </Drawer>
    </>
  );
}
