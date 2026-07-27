"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useLanguage } from "@/context/LanguageContext";
import LangButton from "@/components/UI/Buttons/LangButton.jsx";

export default function LegalNoticeAndPrivacyPolicy() {

    const { translations, setLang } = useLanguage();
    const t = translations.legalNotice;

    return (
        <div className={styles.page}>
            <LangButton t={t} setLang={setLang} />

            <main>
                <Link className={styles.backLink} href="/">{t.BackLink}</Link>

                <section id="impressum">
                    <h3>{t.Impressum.Heading}</h3>

                    <h4>{t.Impressum.ResponsibleHeading}</h4>
                    <p>{t.Impressum.Name}</p>
                    <p>{t.Impressum.BusinessNote}</p>
                    <p>{t.Impressum.AddressLine1}</p>
                    <p>{t.Impressum.AddressLine2}</p>
                    <p>{t.Impressum.AddressLine3}</p>

                    <h4>{t.Impressum.BrandNoticeHeading}</h4>
                    <p>{t.Impressum.BrandNoticeText}</p>

                    <h4>{t.Impressum.ContactHeading}</h4>
                    <p>
                        {t.Impressum.EmailLabel}: {" "}
                        <a href={`mailto:${t.Impressum.Email}`}>{t.Impressum.Email}</a>
                    </p>

                    <h4>{t.Impressum.VatHeading}</h4>
                    <p>{t.Impressum.VatText}</p>

                    <h4>{t.Impressum.DisputeHeading}</h4>
                    <p>{t.Impressum.DisputeText}</p>

                    <h4>{t.Impressum.LiabilityContentHeading}</h4>
                    <p>{t.Impressum.LiabilityContentText}</p>

                    <h4>{t.Impressum.LiabilityLinksHeading}</h4>
                    <p>{t.Impressum.LiabilityLinksText}</p>
                </section>

                <section id="privacy">
                    <h3>{t.Privacy.Heading}</h3>

                    <h4>{t.Privacy.ResponsibleHeading}</h4>
                    <p>{t.Privacy.ResponsibleText}</p>

                    <h4>{t.Privacy.HostingHeading}</h4>
                    <p>{t.Privacy.HostingText}</p>

                    <h4>{t.Privacy.FontsHeading}</h4>
                    <p>{t.Privacy.FontsText}</p>

                    <h4>{t.Privacy.ContactHeading}</h4>
                    <p>{t.Privacy.ContactText}</p>

                    <h4>{t.Privacy.CookiesHeading}</h4>
                    <p>{t.Privacy.CookiesText}</p>

                    <h4>{t.Privacy.RightsHeading}</h4>
                    <p>{t.Privacy.RightsText}</p>

                    <h4>{t.Privacy.ComplaintHeading}</h4>
                    <p>{t.Privacy.ComplaintText}</p>

                    <h4>{t.Privacy.ChangeHeading}</h4>
                    <p>{t.Privacy.ChangeText}</p>
                </section>
            </main>
        </div>
    );
}