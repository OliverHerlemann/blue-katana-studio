"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Navigation.module.css";

const SECTIONS = [
    { id: "aboutMe", labelKey: "About" },
    { id: "service", labelKey: "Service" },
    { id: "pricing", labelKey: "Price" },
    { id: "portfolio", labelKey: "Portfolio" },
];

export default function Navigation({t}) {
    const [isSticky, setIsSticky] = useState(false);
    const [activeId, setActiveId] = useState(SECTIONS[0].id);
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

    useEffect(() => {
        const sectionElements = SECTIONS
            .map(({ id }) => document.getElementById(id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                // Von allen aktuell sichtbaren Sections die nehmen,
                // die am weitesten oben im Viewport sitzt
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

                if (visible.length > 0) {
                    setActiveId(visible[0].target.id);
                }
            },
            {
                // Nur den Streifen knapp unter der Nav als "aktiv" werten
                rootMargin: "-45% 0px -45% 0px",
                threshold: 0,
            }
        );

        sectionElements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    // Erstes h3 innerhalb der Section suchen (das ist der eigentliche
    // visuelle Anfang, nicht der leere Section-Rand)
    const heading = section.querySelector("h3");
    const target = heading ?? section;

    const navHeight = navDivRef.current?.offsetHeight ?? 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;

    window.scrollTo({ top, behavior: "smooth" });
};

    return (
        <nav>
            <div
                ref={navDivRef}
                className={`${styles.navDiv} ${isSticky ? styles.navSticky : ""}`}
                style={isSticky ? { width: dimensions.width } : undefined}
            >
                {SECTIONS.map(({ id, labelKey }) => (
                    <div key={id} className={styles.navItem}>
                        <button
                            onClick={() => scrollToSection(id)}
                            className={activeId === id ? styles.active : ""}
                        >
                            {t.Navigation[labelKey]}
                        </button>
                        {activeId === id && (
                            <motion.div
                                layoutId="navIndicator"
                                className={styles.indicator}
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                    </div>
                ))}
            </div>
            {isSticky && <div style={{ height: dimensions.height }} />}
        </nav>
    );
}  
