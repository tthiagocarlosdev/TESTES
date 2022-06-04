import React from 'react';
import Button from './components/Button';
import Header from './components/Header';

// components
import './App.css'

const App = () => {
  return ( 
    <div className="app">
      <div className="header">
      <Header> Physical Assessment System </Header>
    </div>
    <div className="start-assessment-button">
      <Button> Start Assessment </Button>
    </div>
    <div className="finish-assessment-button">
      <Button> Finish Assessment </Button>
    </div>
    </div>
   );
}
 
export default App;