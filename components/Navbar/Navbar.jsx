import React from 'react';
import styles from './navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.nav_links}>
                <li className={`${styles.nav_link} ${styles.active_link}`}>About</li>
                <li className={styles.nav_link}>Projects</li>
                <li className={styles.nav_link}>Skills</li>
                <li className={styles.nav_link}>Experience</li>
                <li className={styles.nav_link}>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;
