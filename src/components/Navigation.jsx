"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Navigation.module.css";

export default function Navigation({t}) {
    const [isSticky, setIsSticky] = useState(false);
    const navDivRef = useRef(null);
    const triggerPoint = useRef(0);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        function measure() {
            if (navDivRef.current) {
                const rect = navDivRef.current.getBoundingClientRect();
                triggerPoint.current = rect.top + window.scrollY;
                // nur messen, wenn NICHT sticky, sonst würde die
                // bereits fixierte (ggf. falsche) Breite erneut übernommen
                if (!isSticky) {
                    setDimensions({ width: rect.width, height: rect.height });
                }
            }
        }

        measure();

        function handleScroll() {
            setIsSticky(window.scrollY > triggerPoint.current);
        }

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", measure);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", measure);
        };
    }, [isSticky]);

    return (
        <nav>
            <div
                ref={navDivRef}
                className={`${styles.navDiv} ${isSticky ? styles.navSticky : ""}`}
                style={isSticky ? { width: dimensions.width } : undefined}
            >
                <button>{t.Navigation.About}</button>
                <button>{t.Navigation.Price}</button>
                <button>Portfolio</button>
            </div>
            {isSticky && <div style={{ height: dimensions.height }} />}
        </nav>
    );
}