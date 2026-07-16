import styles from "./ServiceSection.module.css";


export default function ServiceSection({t}){
    return <div className={styles.mainServiceContainer}>
        <h3>{t.Navigation.Service}</h3>
        <div className={styles.ServiceDisplay}>
            <div className={styles.infoBox}>
                <h4>{t.ServiceSection.ServiceOneHeading}</h4>
                <p>{t.ServiceSection.ServiceOne}</p>
            </div>
            <p className={styles.arrow}>↓</p>
            <div className={styles.infoBox}>
                <h4>{t.ServiceSection.ServiceTwoHeading}</h4>
                <p>{t.ServiceSection.ServiceTwo}</p>
            </div>
            <p className={styles.arrow}>↓</p>
            <div className={styles.infoBox}>
                <h4>{t.ServiceSection.ServiceThreeHeading}</h4>
                <p>{t.ServiceSection.ServiceThree}</p>
            </div>
        </div>
    </div>
}