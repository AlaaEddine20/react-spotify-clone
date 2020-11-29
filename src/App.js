import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './components/Home';
import Sidebar from './components/Sidebar'
import Player from './components/Player';


class App extends React.Component {

  render() {
    return (
      <div className="main-components d-flex">
      <Router>
        <Sidebar />
        <Home exact path='/' />
        <Player />
      </Router>
      <Player />
      </div>
      
      
    );

  }
}

export default App;
