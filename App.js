import React from 'react';
import { Provider } from "react-redux";
import Store from "./Redux/store/index";
import Navigator from "./Navigation/navigator";

export default function App() {
  return (
    <Provider store={Store}>
      <Navigator />
    </Provider>
  );
}

