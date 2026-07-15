"use client"

import styles from "./page.module.css";
import Header from "../components/Header.jsx";
import Navigation from "../components/Navigation.jsx";
import { useLanguage } from "@/context/LanguageContext";
import LangButton from "@/components/UI/Buttons/LangButton.jsx";
import ContactModal from "@/components/ContactModal";
import SelfPresentation from "@/components/SelfPresentation";
import { useRef } from "react";

export default function Home() {

  const { translations, setLang } = useLanguage();
  const t = translations.home;
  const contactModalRef = useRef();


  const openContactModal = () => contactModalRef.current?.showModal();

  return (
    <div className={styles.page}>
      <Header t={t} openContactModal={openContactModal} />
      <ContactModal t={t} ref={contactModalRef} />
      <LangButton t={t} setLang={setLang}/>
      <Navigation t={t} />
      <main>
        <section id="aboutMe" >
          <SelfPresentation t={t} />
          <h3>{t.Navigation.About}</h3>
          <p>{t.InfoTextAboutMe1}</p>
          <p>{t.InfoTextAboutMe2}</p>
          <p>{t.InfoTextAboutMe3}</p>
        </section>
        <section id="pricing">

        </section>
      </main>
    </div>
  );
}
