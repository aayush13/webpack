import React from 'react';
import ReactDOM from 'react-dom';
import "./main.css";
import logo from "./images/apple.png"

class App extends React.Component {
    render() {
       return (
          <div>
             <img src={logo} alt="Apple" />
          </div>
       );
    }
 };


  ReactDOM.render(<App/>,document.getElementById('root'));