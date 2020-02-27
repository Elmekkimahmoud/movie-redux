import React from 'react';
import './App.css';
import Movies from './movies';
import Find from './findmovie';
import Add from './addmov' ;
import Descrip from './description' ;
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function App() {
  return (
    <Router> 
    <div className="container">
      <Find/>
      <Movies/>
      <Add/>
 
        <Route exact path="/more/:mohamed" component={Descrip}/>
    
    </div>
    </Router>
  );
}

export default App;
