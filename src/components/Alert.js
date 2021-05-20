/** @format */

import React from "react";
import Emoji from "./Emoji";

const Alert = ({ cname, mensaje, symbol }) => {
  return (
    <p className={cname ? `${cname} u-full-width` : "u-full-width alert"}>
      <Emoji symbol={symbol === "ok" ? "👌" : "🚫"} />{" "}
      {mensaje ? mensaje : "Escriba un mensaje"}
    </p>
  );
};

export default Alert;
