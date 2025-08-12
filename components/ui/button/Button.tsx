'use client';

import { memo, useMemo } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary';
  className?: string;
}

const Button = memo(function Button({
  children,
  variant = 'default',
  className = '',
  ...rest
}: ButtonProps) {
  const buttonClass = useMemo(() => {
    return `${styles.button} ${styles[variant]} ${className}`.trim();
  }, [variant, className]);

  return (
    <button {...rest} type={rest.type ?? 'button'} className={buttonClass}>
      {children}
    </button>
  );
});

export default Button;
