import React from 'react';
import styles from './DialogInput.module.css';

const DialogInput = React.forwardRef(({ type, placeholder, height, ...props}, ref) => {
  const style = {
    height: height
  }
  return <input  style={style} className={styles.input} type={type} placeholder={placeholder} {...props} ref={ref} />
});

DialogInput.displayName = 'DialogInput';

export default DialogInput;
