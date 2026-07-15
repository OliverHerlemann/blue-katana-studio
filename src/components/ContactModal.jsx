"use client";

import { useImperativeHandle, useRef } from "react";
import styles from "./ContactModal.module.css";

export default function ContactModal({ t, ref }) {

    const contactModalRef = useRef();

    useImperativeHandle(ref, () => ({
        showModal: () => {
        contactModalRef.current?.showModal();
        },
        close: () => contactModalRef.current?.close(),
    }));


    return <dialog ref={contactModalRef} className={styles.mainModal}>
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