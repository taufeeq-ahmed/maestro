/* eslint-disable import/extensions */

'use client';

import { toast } from 'sonner';
import React from 'react';
import Intro from '../components/Intro/Intro';
import useTimeout from '@/hooks/useTimeout';

import Contact from '@/components/Contact/Contact';
import styles from './page.module.css';
import DeveloperDescription from '@/components/DeveloperDescription/DeveloperDescription';
import Experience from '@/components/Experience/Experience';
import { EXPERIENCE } from '../constants/constants';

export default function Home() {
    const sayUnderConstruction = () => {
        toast.info('This is a work in progess !');
    };

    useTimeout(sayUnderConstruction, 2000);

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
