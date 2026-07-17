import styles from "./Footer.module.css";
import Link from "next/link";


export default function Footer({t}){
    return <div className={styles.footerDiv}>
        <Link href="/legalNotice&PrivacyPolicy">{t.legalNoticeAndPrivacyPolicy}</Link>
    </div>
}