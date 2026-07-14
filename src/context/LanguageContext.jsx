"use client";

import { createContext, useContext, useState } from "react";

// Home Übersetzungen
import deHome from "@/locales/de/home.json";
import enHome from "@/locales/en/home.json";



const LanguageContext = createContext();


export function LanguageProvider({ children }) {

    const [lang, setLang] = useState("en");


    const translations = {
        de: {
            home: deHome,
        },

        en: {
            home: enHome,
        }
    };


    return (
        <LanguageContext.Provider
            value={{
                lang,
                setLang,
                translations: translations[lang]
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}


export function useLanguage() {
    return useContext(LanguageContext);
}