import styles from "./SelfPresentation.module.css";


export default function SelfPresentation({t}) {
    return <div className={styles.mainDiv}>
        <div className={styles.imgContainer}>
            <div className={styles.imgClip}>
                <img src="/Oliver_Portrait.jpg" alt="Portrait of the Founder" />
            </div>
        </div>
        <div className={styles.presentationText}>
            <h4>Oliver Herlemann</h4>
            <p>{t.SelfPresentation.Age}</p>
            <p>{t.SelfPresentation.Founder}</p>
            <p>{t.SelfPresentation.Quote}</p>
        </div>
    </div>
}