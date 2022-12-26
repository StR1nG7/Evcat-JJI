import React from 'react';
import styles from './AuthInput.module.css';

const AuthInput = React.forwardRef(({ type, placeholder, ...props}, ref) => {
  return <input className={styles.input} type={type} placeholder={placeholder} {...props} ref={ref} />;
})

export default AuthInput;