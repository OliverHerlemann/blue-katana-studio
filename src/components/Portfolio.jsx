import styles from "./Portfolio.module.css";


const portfolioList = [{name: "Quiz Runde", id: 1, url: "https://quizrunde.com/"}, 
    {name: "Herlemann - Sushi", id: 2, url: "https://www.herlemann-sushi.com"}];

export default function Portfolio({t}){
    return <div className={styles.mainPortfolio}>
            <h3>{t.Navigation.Portfolio}</h3>
            <div className={styles.portfolioListContainer}>
                <ul>

                </ul>
            </div>
    </div>
}