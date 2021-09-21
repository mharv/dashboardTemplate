import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, MailOutlined, DotChartOutlined, SettingOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"

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
        
        <Menu.Item key="home" icon={<HomeOutlined />}>
          
        <Link to="/">
          Home 
          </Link>
        </Menu.Item> 
        <Menu.Item key="NZCinput" icon={<EditOutlined />}>
          
        <Link to="/NZCinput">
          NZC Buildings
        </Link>
        </Menu.Item>
        <Menu.Item disabled={true} key="KPIinput" icon={<EditOutlined />}>
          
        <Link to="/KPIinput">
          KPIs
        </Link>
        </Menu.Item>
        <Menu.Item disabled={true} key="compare" icon={<DotChartOutlined />}>
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