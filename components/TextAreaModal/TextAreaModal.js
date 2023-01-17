import React from 'react';
import styles from './TextAreaModal.module.css';

const TextAreaModal = React.forwardRef(({placeholder, ...props}, ref) => {
  return <textarea className={styles.text_area} ref={ref} placeholder={placeholder} {...props}/>
})

TextAreaModal.displayName = 'TextAreaModal';

export default TextAreaModal; 