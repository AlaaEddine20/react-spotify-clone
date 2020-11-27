import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './components/Home';


class App extends React.Component {

  render() {
    return (
      <>
      <Router>
        <Home exact path='/' />
      </Router>
      </>
    );

  }
}

export default App;
