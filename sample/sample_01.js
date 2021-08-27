import React from "react";
import { render } from "react-dom";

const DispString = (props) => {
  return (
    <div>
      <p>{props.name}さん</p>は<p>{props.hobby}がすき</p>
    </div>
  );
};
render(
  <DispString name="ながとも" hobby="さっかー" />,
  document.getElementById("root")
);
