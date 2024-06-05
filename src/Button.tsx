import React from 'react';
import { ButtonProps } from './Button.types';
import Icon from './Icon';
import './Button.css';

const Button: React.FC<ButtonProps> = (props) => {
  const {
    label = 'Sign in with Google',
    theme = 'light',
    shape = 'rectangular',
    width,
    logoAlign,
    ...otherProps
  } = props;

  const getClasses = () => {
    const classes = ['gsibtn'];
    if (theme === 'dark') {
      classes.push('gsibtn-dark');
    } else if (theme === 'neutral') {
      classes.push('gsibtn-neutral');
    }
    if (logoAlign === 'center') {
      classes.push('gsibtn-logo-center')
    }
    if (shape === 'pill' || shape === 'circle') {
      classes.push('gsibtn-pill');
    }
    if (label.length === 0) {
      classes.push('gsibtn-notext');
    }
    return classes.join(' ');
  }

  const buttonStyle: React.CSSProperties = { width };

  return (
    <button
      className={getClasses()}
      style={buttonStyle}
      {...otherProps}
    >
      <div className="gsibtn-state" />
      <div className="gsibtn-content-wrapper">
        <div className="gsibtn-icon">
          <Icon />
        </div>
        {label.length > 0 && (
          <span className="gsibtn-contents">{label}</span>
        )}
        <span className="gsibtn-d-none">{label}</span>
      </div>
    </button>
  );
};

export default Button;
