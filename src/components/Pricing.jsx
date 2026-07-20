import  styles from "./Pricing.module.css";

export default function Pricing({t}){
    return <div className={styles.pricingMainDiv}>
        <h3>{t.Navigation.Price}</h3>
        <div className={styles.pricingContainer}>
            <div className={styles.firstPricing}>
                <h4>{t.ServiceSection.ServiceOneHeading}</h4>


            </div>
            <div className={styles.secondPricing}>
                <h4>{t.ServiceSection.ServiceTwoHeading}</h4>


            </div>
            <div className={styles.thirdPricing}>
                <h4>{t.ServiceSection.ServiceThreeHeading}</h4>


            </div>
        </div>
        
    </div>
}