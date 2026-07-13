import styles from "./Header.module.css";

export default function Header() {
    return <header className={styles.header}>
        <div className={styles.mainHeader}>
            <h1>Blue <span>Katana</span> Studio</h1>
            <img src="/blue_katana_horizontal.png" alt="A blue Katana" />
            <h2>Webdesign and Development</h2>
        </div>
    </header>
}