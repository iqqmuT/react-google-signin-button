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
    className,
    ...otherProps
  } = props;

  const showLabel =
    label.length > 0 && shape !== 'circle' && shape !== 'square';

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
    if (!showLabel) {
      classes.push('gsibtn-notext');
    }
    if (className) {
      classes.push(className);
    }
    return classes.join(' ');
  }

  const buttonStyle: React.CSSProperties = { width };

  return (
    <button className={getClasses()} style={buttonStyle} {...otherProps}>
      <div className="gsibtn-state" />
      <div className="gsibtn-content-wrapper">
        <div className="gsibtn-icon">
          <Icon />
        </div>
        {showLabel && <span className="gsibtn-contents">{label}</span>}
        <span className="gsibtn-d-none">{label}</span>
      </div>
    </button>
  );
};

export default Button;
