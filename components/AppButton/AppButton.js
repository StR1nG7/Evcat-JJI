import React from 'react'
import styles from './AppButton.module.css';

const AppButton = ({type, children, width, height, ...props}) => {
    const style = {
        width: width + 'px',
        height: height + 'px'
    }
  return <button style={style} className={styles.button} type={type} {...props} >{children}</button>
}

export default AppButton; 
