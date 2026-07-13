import styles from "./page.module.css";
import Header from "../components/Header.jsx";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
    </div>
  );
}
