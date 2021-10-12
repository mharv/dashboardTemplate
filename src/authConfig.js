export const msalConfig = {
    auth: {
      clientId: "467e4351-6a51-4dd0-a3ab-5d3e8628651b",
      authority: "https://login.microsoftonline.com/4ae48b41-0137-4599-8661-fc641fe77bea",
      redirectUri: "http://localhost:3000",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
//   export const graphConfig = {
//       graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me"
//   };