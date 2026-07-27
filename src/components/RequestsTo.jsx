import styles from "./RequestsTo.module.css";


export default function RequestsTo({t}){
    return <div className={styles.requestDiv}>
        <p>{t.RequestsTo}
            <a href="mailto:request@bluekatanastudio.com">
                    {" "}request@bluekatanastudio.com
                </a>
        </p>
    </div>
}