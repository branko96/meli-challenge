import React from 'react';
import './App.scss';
import RootNavigator from "./navigators/RootNavigator";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </div>
  );
}

export default App;
