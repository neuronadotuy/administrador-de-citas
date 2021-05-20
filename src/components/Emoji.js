/** @format */

import React from "react";

const Emoji = ({ symbol, label }) => {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}>
      {symbol ? symbol : "🐑"}
    </span>
  );
};

export default Emoji;
