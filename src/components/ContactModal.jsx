"use client";

import { useImperativeHandle, useRef } from "react";
import styles from "./ContactModal.module.css";

export default function ContactModal({ t, ref }) {

    const contactModalRef = useRef();

    useImperativeHandle(ref, () => ({
        showModal: () => {
            document.body.style.overflow = "hidden";
            contactModalRef.current?.showModal();
        },
        close: () => {
            contactModalRef.current?.close(),
            document.body.style.overflow = "";
        }
    }));

    const handleBackdropClick = (e) => {
        if (e.target === contactModalRef.current) {
            document.body.style.overflow = "";
            contactModalRef.current?.close();
        }
    };

    return <dialog ref={contactModalRef} onClick={handleBackdropClick}
            className={styles.mainModal} onClose={() => {
                document.body.style.overflow = "";
        }}>
        <button onClick={() => contactModalRef.current?.close()}>X</button>
        <div>
            <h3>{t.ContactModalHeading}</h3>
            <p>E-Mail: 
                <a href="mailto:request@bluekatanastudio.com">
                    {" "}request@bluekatanastudio.com
                </a>
            </p>
        </div>
       
    </dialog>
}