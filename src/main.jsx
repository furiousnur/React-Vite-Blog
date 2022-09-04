import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {AppProvider} from "./components/context/Context";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain="dev-1gw7y12l.us.auth0.com"
        clientId="MKMrv8GzGo2Bm0EpZFSXaYFrFqoHkLR2"
        redirectUri={window.location.origin}  >
      <AppProvider>
          <App />
      </AppProvider>
    </Auth0Provider>
)
