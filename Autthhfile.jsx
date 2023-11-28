import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-86042n0lf1281uoh.us.auth0.com"
    clientId="qKuetmrd2d8lpDzvRQuG8lALOqSAHK0R"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

    <App />
  </Auth0Provider>,
);