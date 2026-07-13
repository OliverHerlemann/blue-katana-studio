import styles from "./Navigation.module.css";

export default function Navigation(){
    return <nav>
        <div className={styles.navDiv}>
            <button>About us</button>
            <button>Pricing</button>
            <button>Portfolio</button>
        </div>
    </nav>
}