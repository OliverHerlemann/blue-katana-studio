import styles from "./page.module.css";
import Header from "../components/Header.jsx";
import Navigation from "../components/Navigation.jsx";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <Navigation />
      <main>
        
      </main>
    </div>
  );
}
