import React, { Component, useEffect, useState } from 'react';
import { Button, Col, Row, Select } from 'antd';
import '../App.css';
import { useIsAuthenticated, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import ProjectSelector  from "./ProjectSelector";
import { loginRequest } from "../authConfig";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'

const { Option } = Select;

const HomeView = (props) => {

    const [benchmarks, setBenchmarks] = useState([]);
    const [selectedProject, setSelectedProject] = useState();

    const url = 'https://sus-kpi-backend.azurewebsites.net';
    // const token = props.token;
    const token = 'otMjMu0sAGRDTuuu00lyZ/stG/Z2p14OtPOqPLq672sWfRGSb8Bhwg==';
    const urlComplete = url + '/projects?code=' + token;

    const dispatch = useDispatch();

    const getBau = () => {
        axios.get(urlComplete).then(result => {
            setBenchmarks(result.data);
        })
    }

    useEffect(() => {
        getBau();
        // console.log(benchmarks)
   }, []);

    const isAuthenticated = useIsAuthenticated();
    const { instance, accounts, inProgress } = useMsal();
    const [accessToken, setAccessToken] = useState(null);

    const selectChangeHandler = e => {
        var result = benchmarks.filter(obj => {
        return obj.Id == e.key
        })
        for (const property in result[0]) {
        dispatch({type: 'update', key: [property], payload: result[0][property]})
        }
        dispatch({type: 'recalculate' })
    }

    const name = accounts[0] && accounts[0].name;

    // function RequestAccessToken() {
    //     const request = {
    //         ...loginRequest,
    //         account: accounts[0]
    //     };

    //     // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    //     instance.acquireTokenSilent(request).then((response) => {
    //         setAccessToken(response.accessToken);
    //     }).catch((e) => {
    //         instance.acquireTokenPopup(request).then((response) => {
    //             setAccessToken(response.accessToken);
    //         });
    //     });
    // }

    return (


        <>
        <Row>
            <Col span={24}>
                
            <br />
            <br />
            <br />
            {isAuthenticated ? <h5><center>Welcome to the Buildings Net Zero Carbon tool, {name}!</center></h5> : <SignInButton />}
            </Col>
        </Row>

        <Row>
        <Col span={24}>
        <AuthenticatedTemplate>
        {/* <>
                {accessToken ?
                    <p>Access Token Acquired! {accessToken}</p>
                    :
                    <Button variant="secondary" onClick={RequestAccessToken}>Request Access Token</Button>
                }
            </> */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Select style={{ width: 1000 }} 
            labelInValue 
            value={selectedProject}
            placeholder={'Please select your project...'} 
            onChange={selectChangeHandler}>
            {benchmarks.map(option=> (<Option key={option.Id}>{option.JobNumber} - {option.ProjectTitle}</Option>))}
            </Select>
            </AuthenticatedTemplate>
        </Col>
        </Row>
            
        </>
    );
};


export default HomeView;