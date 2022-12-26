import styles from './AuthButton.module.css';

const AuthButton = ({type, children}) => {
  return (
    <button className={styles.button} type={type} >{children}</button>
  )
}

export default AuthButton;
