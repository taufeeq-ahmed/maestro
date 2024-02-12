import React from 'react';
import styles from './intro.module.css';
import Avatar from '../Avatar/Avatar';

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
        </section>
    );
}

export default Intro;
