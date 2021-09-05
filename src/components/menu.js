import React from 'react';
import { Menu } from 'antd';
import { MailOutlined, DotChartOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const centerStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center'
};

class MainMenu extends React.Component {
  state = {
    current: 'mail',
  };

  

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu style={centerStyle} theme="light" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home" icon={<MailOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="compare" icon={<DotChartOutlined />}>
          Compare
        </Menu.Item>
        <Menu.Item key="admin" icon={<SettingOutlined />}>
          Admin
        </Menu.Item>
      </Menu>
    );
  }
}

export default MainMenu;