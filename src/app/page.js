"use client"

import styles from "./page.module.css";
import Header from "../components/Header.jsx";
import Navigation from "../components/Navigation.jsx";
import { useLanguage } from "@/context/LanguageContext";
import LangButton from "@/UI/Buttons/LangButton.jsx";

export default function Home() {
  const { translations, setLang } = useLanguage();
  const t = translations.home;


  return (
    <div className={styles.page}>
      <Header t={t} />
      <LangButton t={t} setLang={setLang}/>
      <Navigation />
      <main>
        
      </main>
    </div>
  );
}
