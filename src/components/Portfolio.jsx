import styles from "./Portfolio.module.css";


const portfolioList = [{name: "Quiz Runde", id: 1, type: "Demonstration", url: "https://quizrunde.com"}, 
    {name: "Herlemann - Sushi", id: 2, type: "Demonstration", url: "https://www.herlemann-sushi.com"}];

export default function Portfolio({t}){
    return <div className={styles.mainPortfolio}>
            <h3>{t.Navigation.Portfolio}</h3>
            <div className={styles.portfolioListContainer}>
                <ul>
                        {portfolioList.map((item, index) => {return (
                            <li key={item.id}>
                                <h4>{item.name}</h4>{" "}<span>/</span>{" "}
                                <a href={item.url}
                                target="_blank" rel="noopener noreferrer" >
                                {"www." + item.url.replace("https://", "").replace("www.", "")}</a>
                                <p className={styles.projectType}>{t.PortfolioList[item.type]}</p>
                                <p>{t.PortfolioList[item.id].Description}</p>
                            </li>)
                        })}
                </ul>
            </div>
    </div>
}