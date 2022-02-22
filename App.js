import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import { Apps } from "./App/index";

const App = () => {
  return(
    <Provider store={store}>
      <Apps />
    </Provider>
  )
}

export default App;