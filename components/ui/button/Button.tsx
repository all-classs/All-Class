'use client';

import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary';
  className?: string;
}

export default function Button({
  children,
  variant = 'default',
  className = '',
  ...rest
}: ButtonProps) {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`.trim();

  return (
    <button {...rest} type={rest.type ?? 'button'} className={buttonClass}>
      {children}
    </button>
  );
}
