import styles from './index.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <a href="/" className={styles.logolink}>
                <span className={styles.logo}>Portfolio</span>
            </a>
        </header>
    );
}
