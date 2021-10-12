import React, {useState} from 'react';
import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';
import { useIsAuthenticated, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';


function RequestAccessToken() {
    const isAuthenticated = useIsAuthenticated();
const { instance, accounts, inProgress } = useMsal();
const [accessToken, setAccessToken] = useState(null);

    const request = {
        ...loginRequest,
        account: accounts[0]
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance.acquireTokenSilent(request).then((response) => {
        setAccessToken(response.accessToken);
    }).catch((e) => {
        instance.acquireTokenPopup(request).then((response) => {
            setAccessToken(response.accessToken);
            return response.accessToken;
        });
    });
}

function DebounceSelect({ fetchOptions, debounceTimeout = 800, ...props }) {
  const [fetching, setFetching] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const fetchRef = React.useRef(0);

  const debounceFetcher = React.useMemo(() => {
    const loadOptions = (value) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);
      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);
  
  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
} // Usage of DebounceSelect


async function fetchUserList(username) {

  console.log('fetching user', username);


    axios.get('https://randomuser.me/api/?results=10')
.then((response) => {
    
    return response.data.results.map((user) => ({
        label: `${user.name.first} ${user.name.last}`,
        value: user.login.username,
        }))
    })

//   return fetch('https://randomuser.me/api/?results=10')
//     .then((response) => response.json())
//     .then((body) => {
//         body.results.map((user) => ({
//             label: `${user.name.first} ${user.name.last}`,
//             value: user.login.username,
//           }))
//           console.log("fetch")
//           console.log(body.results.map((user) => ({
//             label: `${user.name.first} ${user.name.last}`,
//             value: user.login.username,
//           })))
//     }
    //   ,
    // );
}

const ProjectSelector = () => {
  const [value, setValue] = React.useState([]);
  const [fetching, setFetching] = React.useState(false);

  return (
    // <DebounceSelect
    // showSearch
    //   value={value}
    //   placeholder="Search for your project"
    //   fetchOptions={fetchUserList}
    //   onChange={(newValue) => {
    //     setValue(newValue);
    //   }}
    //   style={{
    //     width: '50%',
    //   }}
    // />

    <Select
    value={value}
    placeholder="Search for your project"
      labelInValue
      filterOption={false}
      showSearch={() => {fetchUserList()}}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      
    //   options={options}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      style={{
        width: '50%',
      }}
    />
  );
};

export default ProjectSelector;