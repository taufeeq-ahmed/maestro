/* eslint-disable import/extensions */

'use client';

import { toast } from 'sonner';
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Intro from '../components/Intro/Intro';
import useTimeout from '@/hooks/useTimeout';
import Skills from '@/components/Skills/Skills';
import { mySkills } from './constants/constants';
import Contact from '@/components/Contact/Contact';

export default function Home() {
    const sayUnderConstruction = () => {
        toast.info('This is a work in progess !');
    };
    useTimeout(sayUnderConstruction, 2000);

    return (
        <>
            <Navbar />
            <Intro />
            <Skills skills={mySkills} />
            <Contact />
        </>
    );
}
