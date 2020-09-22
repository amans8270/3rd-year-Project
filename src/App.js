import { Widgets } from '@material-ui/icons';
import React from 'react';
import './App.css';
import Feed from "./Components/Feed";
import Sidebar from './Components/Sidebar';
import Widget from "./Components/Widgets";

function App() {
  return (
    <div className="app">
     <Sidebar/>
      <Feed/>
      <Widget/>
    </div>
  );
}

export default App;
