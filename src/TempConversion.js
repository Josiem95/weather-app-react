import React, { useState } from "react";
import "./TempConversion.css";

export default function TempConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("farneheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === `celsius`) {
    return (
      <div>
        <span className="TempConversion">
          <strong>{props.celsius}</strong>
        </span>
        <span>
          <strong className="active-unit">°C |</strong>
          <a href="/" onClick={convertToFarenheit} className="units">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let farenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span className="TempConversion">
          <strong>{Math.round(farenheit)}</strong>
        </span>
        <span>
          <strong className="active-unit">°F |</strong>
          <a href="/" onClick={convertToCelsius} className="units">
            °C
          </a>
        </span>
      </div>
    );
  }
}
