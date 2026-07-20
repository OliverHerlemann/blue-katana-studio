import  styles from "./Pricing.module.css";
import RequestsTo from "@/components/RequestsTo";


export default function Pricing({t}){
    return <div className={styles.pricingMainDiv}>
        <h3>{t.Navigation.Price}</h3>
        <div className={styles.pricingContainer}>
            <div className={styles.firstPricing}>
                <h4>{t.ServiceSection.ServiceOneHeading}</h4>
                <p className={styles.from}>{t.from}</p>
                <p className={styles.discount}>-75%</p>
                <p className={styles.oldPrice}>1000€</p>
                <p className={styles.newPrice}>250€</p>

            </div>
            <div className={styles.secondPricing}>
                <h4>{t.ServiceSection.ServiceTwoHeading}</h4>
                <div className={styles.free}>
                    <p className={styles.freeInfoText}>{t.freeInfoText}</p>
                    <p className={styles.freeText}>Free</p>
                </div>

            </div>
            <div className={styles.thirdPricing}>
                <h4>{t.ServiceSection.ServiceThreeHeading}</h4>
                <p className={styles.from}>{t.from}</p>
                <p className={styles.monthlyPay}>45€/Mo</p>
            </div>
        </div>
        <RequestsTo t={t} />
    </div>
}