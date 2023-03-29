import ReactDOM from "react-dom/client";
import React from "react"
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"
import "./_base.scss"
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>

//     , document.getElementById("root"))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </Provider>

);
    