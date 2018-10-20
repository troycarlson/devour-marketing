import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.css';

const sizeClasses = {
  'small': 'btn-small',
  'medium': 'btn-medium',
  'large': 'btn-large',
};

export default class Button extends Component {
  render() {
    const { className, size, href, children, ...extras } = this.props;
    const Tag = href ? 'a' : 'button';
    const sizeClass = sizeClasses[size];
    const classes = classNames('btn', sizeClass, className);

    return (
      <Tag className={classes} href={href} {...extras} type="button">
        {children}
      </Tag>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: null,
  size: 'medium',
  href: null,
};

