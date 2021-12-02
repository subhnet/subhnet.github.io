import React, { Component } from 'react';
import './App.scss';
import Layout from './Layout/Layout';
import HomePage from './pages/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <HomePage></HomePage>
        </Layout>
      </div>
    );
  }
}

export default App;
