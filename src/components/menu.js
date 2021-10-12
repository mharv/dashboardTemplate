import React, {useState} from 'react';
import { Menu } from 'antd';
import { HomeOutlined, MailOutlined, DotChartOutlined, SettingOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'

const centerStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center'
};




const MainMenu = (props) => {
// class MainMenu extends React.Component {
   let state = {
    current: 'mail',
  };

  
  // const token = props.token;
const url = 'https://sus-kpi-backend.azurewebsites.net';
const urlComplete = url + '/projects?code=' + token;

  
  const [current, setCurrent] = useState('home');

  const saveButtonStyle = {
    color: 'white',
    backgroundColor: '#4BA046'
  }

  
  const JobNumber = useSelector(state => state.JobNumber);
  const SustainabilityChampionEmail = useSelector(state => state.SustainabilityChampionEmail);
  const ProjectClimateChangeRiskReviewComplete = useSelector(state => state.ProjectClimateChangeRiskReviewComplete);
  const MajorRisksNotMitigatedFor2050 = useSelector(state => state.MajorRisksNotMitigatedFor2050);
  const MajorRisksNotMitigatedFor2070 = useSelector(state => state.MajorRisksNotMitigatedFor2070);
  const ProjectTeamEngagement = useSelector(state => state.ProjectTeamEngagement);
  const ProjectClientEngagementDecarbonisation = useSelector(state => state.ProjectClientEngagementDecarbonisation);
  const ProjectClientEngagementResilience = useSelector(state => state.ProjectClientEngagementResilience);
  const ProjectArupImpactCarbon = useSelector(state => state.ProjectArupImpactCarbon);
  const ProjectArupImpactResilience = useSelector(state => state.ProjectArupImpactResilience);

  const save = () => {
    console.log("test save button")
    const axiosConfig = {
      headers: {
        "Access-Control-Allow-Origin": "*", 
        "Access-Control-Allow-Headers": "access-control-allow-origin, access-control-allow-headers"
      }
    };
    const body = { 
      JobNumber: JobNumber,
      SustainabilityChampionEmail: SustainabilityChampionEmail,
      ProjectClimateChangeRiskReviewComplete: ProjectClimateChangeRiskReviewComplete,
      MajorRisksNotMitigatedFor2050: MajorRisksNotMitigatedFor2050,
      MajorRisksNotMitigatedFor2070: MajorRisksNotMitigatedFor2070,
      ProjectTeamEngagement: ProjectTeamEngagement,
      ProjectClientEngagementDecarbonisation: ProjectClientEngagementDecarbonisation,
      ProjectClientEngagementResilience: ProjectClientEngagementResilience,
      ProjectArupImpactCarbon: ProjectArupImpactCarbon,
      ProjectArupImpactResilience: ProjectArupImpactResilience
     };
    axios.patch(urlComplete, JSON.stringify(body), axiosConfig).then(result => {
      console.log(result)
  })
  }  

  const handleClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  // render() {
    // const { current } = this.state;
    return (
      <Menu style={centerStyle} theme="light" onClick={handleClick} selectedKeys={current} mode="horizontal">
        
        <Menu.Item key="home" icon={<HomeOutlined />}>
          
        <Link to="/">
          Home 
          </Link>
        </Menu.Item> 
        <Menu.Item key="KPIinput" icon={<EditOutlined />}>
          
        <Link to="/KPIinput">
          KPIs
        </Link>
        </Menu.Item>
        <Menu.Item disabled={true} key="NZCinput" icon={<EditOutlined />}>
          
        <Link  to="/NZCinput">
          NZC Buildings
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
        <Menu.Item style={saveButtonStyle} onClick={save} key="save" icon={<SaveOutlined />}>
        
          <strong>Save</strong>
        
        </Menu.Item>
      </Menu>
    );
  // }
}

export default MainMenu;