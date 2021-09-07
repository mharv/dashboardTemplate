import React from 'react';
import { Menu } from 'antd';
import { MailOutlined, DotChartOutlined, SettingOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"

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
          
        <Link to="/">
          Home 
          </Link>
        </Menu.Item> 
        <Menu.Item key="input" icon={<EditOutlined />}>
          
        <Link to="/input">
          Input
        </Link>
        </Menu.Item>
        <Menu.Item key="compare" icon={<DotChartOutlined />}>
        <Link to="/compare">
          Compare
          </Link>
        </Menu.Item>
        <Menu.Item disabled={true} key="admin" icon={<SettingOutlined />}>
        <Link to="/admin">
          Admin
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default MainMenu;