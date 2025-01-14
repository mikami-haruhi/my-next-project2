import styles from "./index.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <a href="/members" >自己紹介</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/news">記事</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/contact">お問い合わせ</a>
                        </li>
                </ul>
            </nav>
            <p className="{styles.cr}">© Mikami. All Rights Reserved 2025</p>        
        </footer>
    );
}