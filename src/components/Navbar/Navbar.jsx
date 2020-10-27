import React, { Component } from "react";
import { Menu, Drawer } from "antd";
import {
  BarsOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UserSwitchOutlined
} from "@ant-design/icons";

class Navbar extends Component {
  state = {
    current: "bars",
    visible: false,
    placement: "right"
  };

  handleClick = e => {
    this.setState({ current: e.key });
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value
    });
  };

  render() {
    const { current, visible, placement } = this.state;
    return (
      <>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item
            key="bars"
            icon={
              <BarsOutlined
                onClick={this.showDrawer}
                style={{ fontSize: "20px" }}
              />
            }
          />
          <Menu.Item key="app" icon={<AppstoreOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="users" icon={<UserSwitchOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="settings" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>

        <Drawer
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={visible}
          key="left"
        >
          <h1>I am Hridoy</h1>
        </Drawer>
      </>
    );
  }
}

export default Navbar;
