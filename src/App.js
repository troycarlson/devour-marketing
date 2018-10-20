import React, { Component } from 'react';
import LandingPage from './landing-page/LandingPage';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <LandingPage />
      </div>
    );
  }
}

