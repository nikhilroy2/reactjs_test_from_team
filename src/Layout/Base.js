import React from "react";
import { Sidebar } from "../Components/Sidebar";
import store from "../Redux_management/store";
import { Provider } from 'react-redux'

function Base(props) {
  return (
    <Provider store={store}>
      <div id="Layout">
        {/* Header */}
        <Sidebar></Sidebar>
        {/* main */}
        {props.children}
        {/* main End */}
        {/* Footer */}
      </div>
    </Provider>
  );
}

export default Base;
