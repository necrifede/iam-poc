import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { OidcProvider, useOidc } from "@axa-fr/react-oidc";

// const config = {
//   auth: {
//     clientName: "LocalCloudAdmin",
//     url: "https://login.mike-cloud-dev.com",
//   },
// };
const config = {
  auth: {
    clientName: "PlumeCastLocal",
    url: "https://login.mike-cloud-dev.com",
  },
};

const openIdConfig = {
  client_id: config.auth.clientName,
  authority: config.auth.url,
  redirect_uri: `${window.location.origin}/authentication/callback`,
  silent_redirect_uri: `${window.location.origin}/authentication/silent-callback`,
  scope: "openid offline_access", // profile email api
  service_worker_relative_url: "/OidcServiceWorker.js",
  service_worker_only: false,
  demonstrating_proof_of_possession: false,
  refresh_time_before_token_expiration_in_second: 120,
};

// const openIdConfig = {
//     client_id: 'interactive.public.short',
//     redirect_uri: `${window.location.origin}/authentication/callback`,
//     silent_redirect_uri: `${window.location.origin}/authentication/silent-callback`,
//     scope: "openid profile email api offline_access",
//     authority: 'https://demo.duendesoftware.com',
//     service_worker_relative_url: "/OidcServiceWorker.js",
//     service_worker_only: false,
//     demonstrating_proof_of_possession: false,
//     // refresh_time_before_token_expiration_in_second: 120,

// }

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OidcProvider
      configuration={openIdConfig}
      onSessionLost={() => {
        const { login } = useOidc();

        login(); // If the session is lost, automatically retry the login.
      }}
      authenticatingComponent={() => <WaitingForAuthentication />}
      callbackSuccessComponent={() => <WaitingForTokenFetch />}
      authenticatingErrorComponent={() => <AuthenticationError />}
      loadingComponent={() => <LoadingAuthentication />}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </OidcProvider>
  </React.StrictMode>
);

const WaitingForAuthentication = () => <div>Waiting for authentication</div>;
const WaitingForTokenFetch = () => <div>Waiting for token fetch</div>;
const AuthenticationError = () => <div>Authentication Error</div>;
const LoadingAuthentication = () => <div>Loading authentication</div>;
