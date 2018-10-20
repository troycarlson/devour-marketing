import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from './Button';
import './PrimaryButton.css';

export default class PrimaryButton extends Component {
  render() {
    const { className, children, ...extras } = this.props;

    const classes = classNames(
      'btn-primary',
      className
    );

    return (
      <Button className={classes} {...extras}>
        {children}
      </Button>
    );
  }
}

PrimaryButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PrimaryButton.defaultProps = {
  className: null,
};

