import styles from '../styles/NotFound.module.css';
import Link from 'next/link'

export default function Custom404() {
    return <div className={styles.container} >
            <h1 className={styles.title} >404 - Page Not Found Return to the <Link className={styles.link} href="/" >Home Page</Link></h1>
        </div>
}