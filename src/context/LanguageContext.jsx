"use client";

import { createContext, useContext, useState } from "react";

// Home Übersetzungen
import deHome from "@/locales/de/home.json";
import enHome from "@/locales/en/home.json";

// Legal Notice & Privacy Policy Übersetzungen
import deLegalNotice from "@/locales/de/legalNotice.json";
import enLegalNotice from "@/locales/en/legalNotice.json";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {

    const [lang, setLang] = useState("en");

    const translations = {
        de: {
            home: deHome,
            legalNotice: deLegalNotice,
        },
        en: {
            home: enHome,
            legalNotice: enLegalNotice,
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