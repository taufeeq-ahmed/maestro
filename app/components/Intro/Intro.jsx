/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdArrowRightAlt, MdFileDownload } from 'react-icons/md';
import styles from './intro.module.css';
import Avatar from '../Avatar/Avatar';
import ThemedButton from '../Button/ThemedButton';
import { githubLink, linkedinLink } from '../../constants/constants';

function Intro() {
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
                />
                <ThemedButton
                    text="Download Resume"
                    type="acrylic"
                    icon={<MdFileDownload />}
                />
                <div className={styles.social_links}>
                    <ThemedButton
                        shape="circular"
                        type="acrylic"
                        icon={<FaGithub />}
                        link={githubLink}
                    />
                    <ThemedButton
                        shape="circular"
                        type="acrylic"
                        icon={<FaLinkedin />}
                        link={linkedinLink}
                    />
                </div>

            </div>
        </section>
    );
}

export default Intro;
