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
        {isOpen && <motion.ul
            style={{ transformOrigin: "top center" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{
                type: "spring",
                stiffness: 250,
                damping: 20
            }}>
            <li onClick={() => {setLang("en"); setIsOpen(false)}} >EN</li>
            <li onClick={() => {setLang("de"); setIsOpen(false)}} >DE</li>
        </motion.ul>}
    </div>
}