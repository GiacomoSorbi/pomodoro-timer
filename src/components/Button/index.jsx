import React from 'react';
import './button.css';

const Button = ({ className, ...props }) => (
  <button className={`btn ${className || ''}`} {...props} />
);

export default Button;
