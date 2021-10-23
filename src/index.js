import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import 
import reportWebVitals from './reportWebVitals';


class Heading extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Heading />
  </React.StrictMode>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
