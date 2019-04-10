import React from 'react';
import ReactDOM from 'react-dom';
import "./main.css";
import logo from "./images/apple.png"

class App extends React.Component {
   
    render() {
       return (
         <div>
            <div className = 'profile'>
               <img src={logo} alt="Apple" />
               <h1>Apple Store!</h1>
            </div>
            <div>
               Hello! <b>Username</b>
            </div> 
         </div>
       );
    }
 };


  ReactDOM.render(<App/>,document.getElementById('root'));