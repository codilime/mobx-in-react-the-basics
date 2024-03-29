import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./app/App";
import reportWebVitals from "./reportWebVitals";

declare global {
  interface Window {
    settings: any;
    friend: any;
    observableFriend: any;
    makeObservableRoss: any;
    ross: any;
    rachel: any;
    emily: any;
    chandler: any;
    joey: any;
    Friend: any;
    FriendWithDecorators: any;
    friends: any;
    friendsStore: any;
  }
}

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
