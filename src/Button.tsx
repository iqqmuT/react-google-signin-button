import React from 'react';
import './Button.css';
import { ButtonProps } from './Button.types';
import Icon from './Icon';

const Button: React.FC<ButtonProps> = (props) => {
  const {
    width,
    disabled,
    label = 'Sign in with Google',
    logoAlign,
    onClick,
  } = props;
  const buttonStyle: React.CSSProperties = { width };
  //if (width) {
  //  buttonStyle.width = props.width;
  //}

  return (
    <button
      className={`gsibtn ${logoAlign === 'center' ? 'gsibtn-logo-centered' : ''}`}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="gsibtn-state" />
      <div className="gsibtn-content-wrapper">
        <div className="gsibtn-icon">
          <Icon />
        </div>
        <span className="gsibtn-contents">{label}</span>
        <span className="gsibtn-d-none">{label}</span>
      </div>
    </button>
  );
};

export default Button;
