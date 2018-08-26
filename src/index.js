import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';

import { FormContainer } from './containers/FormContainer';

import "./styles.css";

class App extends  Component {
  render() {
  return (
      <AppContainer>
        <FormContainer />
      </AppContainer>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
