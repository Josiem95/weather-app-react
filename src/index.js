import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./Weather.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container mt-6">
        <Weather defaultCity="Vancouver" />
        <footer>
          <a
            href="https://github.com/Josiem95/weather-app-react"
            className="footer-link"
          >
            Open source code
          </a>{" "}
          by{" "}
          <a
            href="https://happy-meitner-b5fe96.netlify.app"
            className="footer-link"
          >
            Josie Mortison{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
