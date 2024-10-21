/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import styles from './intro.module.css';
// eslint-disable-next-line import/extensions
import { CURRENT_COMPANY, CURRENT_ROLE } from '@/constants/constants';

function Intro() {
    return (
        <section className={styles.intro}>
            <a href="/">
                <h1 className={styles.developer_name}>TAUFEEQ AHMED</h1>
            </a>

            <h2 className={styles.developer_title}>
                {CURRENT_ROLE}
                {' '}
                at
                {' '}
                {CURRENT_COMPANY}
            </h2>

            <p className={styles.intro_description}>
                Making the world a better place one software at a time
            </p>
        </section>
    );
}

export default Intro;
