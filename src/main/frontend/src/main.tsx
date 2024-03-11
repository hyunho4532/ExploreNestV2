import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux";
import store from "./store.ts";
import {GoogleOAuthProvider} from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <GoogleOAuthProvider clientId="699075609532-t5vblk4r6usall6vpgaim10di4cvdle1.apps.googleusercontent.com">
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    </GoogleOAuthProvider>
)
