import React from "react";
import logo from "../Assets/pre.svg"

function Pre({ load }) {
  return (
    <div id={load ? "preloader" : "preloader-none"}>
      <img src={logo} alt="Logo" />
      <span>Loading...</span>
    </div>
  );
}

export default Pre;
