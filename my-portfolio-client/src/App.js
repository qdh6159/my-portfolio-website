import React from 'react';
import './App.css';
import { Button } from 'reactstrap';
import MainBox from './components/MainBox'
import MyNav from './components/Nav'

function App() {
  return (
    <div className="App">
        <MyNav />
        <MainBox />
    </div>
  );
}

export default App;
