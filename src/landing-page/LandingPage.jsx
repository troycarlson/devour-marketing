import React, { Component } from 'react';
import { Button, PrimaryButton } from '../shared/components';
import logo from '../shared/images/logo-circle.png';
import device from '../shared/images/landing-page-device.png';
import './LandingPage.css';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <nav>
          <img className="logo" src={logo} alt="Devour" />
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
          <div>
            <img className="device" src={device} alt="Devour" />
          </div>
        </div>
      </div>
    );
  }
}

