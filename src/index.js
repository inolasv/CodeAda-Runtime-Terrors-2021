import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Survey } from './flowchart';
import reportWebVitals from './reportWebVitals';


class Heading extends Component {
  render() {
    return (
      <div>
      <center>
        <h2 className="description">Take a survey to determine presence of zombie-fication!</h2>
      </center>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Heading />
    <Survey />
  </React.StrictMode>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
