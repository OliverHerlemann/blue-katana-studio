import styles from "./LangButton.module.css";
import { useState } from "react";
import { motion } from "motion/react";

export default function LangButton({t, setLang}){

    const [isOpen, setIsOpen ] = useState(false);

    return <div className={styles.div}>
        <button onClick={() => setIsOpen(!isOpen)}>{t.LangButton}{" "}
            <motion.span 
                animate={{
                    rotate: isOpen ? 180 : 0
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                }}
    >▲</motion.span></button>
        {isOpen && <ul>
            <li onClick={() => {setLang("en"); setIsOpen(false)}} >EN</li>
            <li onClick={() => {setLang("de"); setIsOpen(false)}} >DE</li>
        </ul>}
    </div>
}