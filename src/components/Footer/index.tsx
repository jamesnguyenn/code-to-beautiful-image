import Image from 'next/image'
import React from 'react'
import styles from "../../app/page.module.css";
type Props = {}

export default function Footer({ }: Props) {
    return (
        <>
            <footer className={styles.footer}>
                <a
                    href="/about"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    about
                </a>
                <a
                    href="https://github.com/jamesnguyenn/code-to-beautiful-image"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    source
                </a>
                <div className={styles.rowCenter}>
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    <span>created by</span>
                    <a
                        href="https://www.linkedin.com/in/nq-thien/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#008000" }}
                    >@thiennguyen</a>
                </div>
            </footer>
        </>
    )
}