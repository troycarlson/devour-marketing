import React, { Component } from 'react';
import { Button, PrimaryButton } from '../shared/components';
import device from '../shared/images/landing-page-device.png';
import appStore from '../shared/images/app-store.png';
import './LandingPage.css';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <nav>
          <Button size="small" className="login" href="https://app.getdevour.com/login">LOG IN</Button>
        </nav>
        <div className="hero">
          <div className="title">
            Devour
          </div>
          <div className="subtitle">
            Simplify your favorite nutrition plan in 30 seconds.
          </div>
          <div className="cta">
            <PrimaryButton href="https://app.getdevour.com/signup">
              GET STARTED
            </PrimaryButton>
          </div>
        </div>
        <div className="device">
          <div>
            <img src={device} alt="Devour" />
          </div>
          <div className="app-store">
            Get the app.
            <a href="https://itunes.apple.com/us/app/devour-meal-planner-tracker/id1378842127?ls=1&mt=8">
              <img className="app-store" src={appStore} alt="Get Devour on the App Store" />
            </a>
          </div>
        </div>
        <div className="support">
          <a href="https://app.getdevour.com/support">
            Need help?
          </a>
        </div>
      </div>
    );
  }
}

