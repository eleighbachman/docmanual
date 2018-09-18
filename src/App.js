import React, { Component } from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Box from './components/Box';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Box />
        <Footer />
      </div>
    );
  }
}

export default App;
