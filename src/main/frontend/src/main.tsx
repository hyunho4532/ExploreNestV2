import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux";
import store from "./store.ts";
import {GoogleOAuthProvider} from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <GoogleOAuthProvider clientId="695757693710-46iodg6db6levqark3aamuonfba016jt.apps.googleusercontent.com">
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </GoogleOAuthProvider>
    </Provider>
)
