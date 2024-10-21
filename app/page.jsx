/* eslint-disable import/extensions */

'use client';

import React from 'react';
import Intro from '../components/Intro/Intro';
import Contact from '@/components/Contact/Contact';
import styles from './page.module.css';
import DeveloperDescription from '@/components/DeveloperDescription/DeveloperDescription';
import Experience from '@/components/Experience/Experience';
import { EXPERIENCE } from '../constants/constants';

export default function Home() {
    return (
        <div className={styles.page}>
            <div className={styles.left}>
                <Intro />
                <Contact />
            </div>

            <div className={styles.right}>
                <DeveloperDescription />
                <Experience companies={EXPERIENCE} />
            </div>
        </div>
    );
}
