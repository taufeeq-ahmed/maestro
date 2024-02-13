/* eslint-disable import/no-extraneous-dependencies */

'use client';

import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdArrowRightAlt, MdFileDownload } from 'react-icons/md';
import styles from './intro.module.css';
import Avatar from '../Avatar/Avatar';
import ThemedButton from '../Button/ThemedButton';
import { githubLink } from '../../app/constants/constants';

function Intro() {
    const handleDownload = () => {
        const pdfPath = '/assets/imjst.resume.pdf';

        const link = document.createElement('a');
        link.href = pdfPath;
        link.target = '_blank';
        link.download = 'taufeeq.resume.pdf';

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
    };

    return (
        <section className={styles.intro}>
            <Avatar />
            <p className={styles.intro_description}>
                Hey there ! This is
                {' '}
                <strong>Taufeeq</strong>

                , passionately building simple solutions for complex
                problems of the real world. Making the world a better place one software at a time
            </p>
            <div className={styles.action_buttons}>
                <ThemedButton
                    text="Contact me Here"
                    icon={<MdArrowRightAlt />}
                    style={{ color: '#fff' }}
                />
                <ThemedButton
                    text="Download Resume"
                    type="acrylic"
                    icon={<MdFileDownload />}
                    handleClick={handleDownload}
                />
                <div className={styles.social_links}>
                    <ThemedButton
                        shape="circular"
                        type="acrylic"
                        icon={<FaGithub />}
                        link={githubLink}
                    />
                </div>

            </div>
        </section>
    );
}

export default Intro;
