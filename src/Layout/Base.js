import React from "react";
import { Sidebar } from "../Components/Sidebar";
function Base(props) {
  return (
    <div id="Layout">
      {/* Header */}
      <Sidebar></Sidebar>
        {/* main */}
        {props.children}
        {/* main End */}
      {/* Footer */}
    </div>
  );
}

export default Base;
