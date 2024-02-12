import React from 'react';
import styles from './navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.nav_links}>
                <li>About</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;
