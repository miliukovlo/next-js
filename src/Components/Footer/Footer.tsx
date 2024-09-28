import React from 'react';
import styles from "./Footer.module.css"

const Footer : React.FC = () => {
    return (
        <footer className={styles.footer}>
            <h1 className={styles.footer__text}>Интернет магазин на NextJS</h1>
        </footer>
    );
}

export default Footer;
