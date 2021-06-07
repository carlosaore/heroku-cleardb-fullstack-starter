import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import APIProvider from "./context/APIProvider";
import MyProvider from "./context/MyProvider";
import { BrowserRouter } from "react-router-dom";
import Theme from "./styles/Theme";
import GlobalStyle from "./styles/globalStyles";

ReactDOM.render(
    <React.StrictMode>
        <MyProvider>
            <APIProvider>
                <BrowserRouter>
                    <Theme>
                        <GlobalStyle />
                        <App />
                    </Theme>
                </BrowserRouter>
            </APIProvider>
        </MyProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
