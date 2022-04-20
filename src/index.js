import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { HoroscopeContext } from './context/HoroscopeContext';
import HoroscopeProvider from "./context/HoroscopeContext";


//Wrap our app in the horoscope provider instead of the context.provider
const Root = () => {
  return (
    <HoroscopeProvider>
      <App />
    </HoroscopeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
