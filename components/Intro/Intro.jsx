/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { MdFileDownload } from 'react-icons/md';
import ThemedButton from '../Button/ThemedButton';

import styles from './intro.module.css';

function Intro() {
    

    return (
        <section className={styles.intro}>
            <h1 className={styles.developer_name}>TAUFEEQ AHMED</h1>

            <h2 className={styles.developer_title}>Full Stack Engineer at Cogoport</h2>

            <p className={styles.intro_description}>
                Making the world a better place one software at a time
            </p>

        </section>
    );
}

export default Intro;
