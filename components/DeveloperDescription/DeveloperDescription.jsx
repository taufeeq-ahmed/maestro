/* eslint-disable import/extensions */
/* eslint-disable max-len */
import React from 'react';
import styles from './developerdescription.module.css';
import { MY_SKILLS } from '@/constants/constants';

function DeveloperDescription() {
    return (
        <section className={styles.developer_description}>
            <p>
                In 2014, I decided to delve deep into custom themes on Nova Launcher in Android to make my launcher system completely customizable. This led me into the abyss of digital design. From there, I proceeded to learn basic HTML, CSS, and JavaScript, and as you can see... here I am, a professional Full Stack Engineer.
            </p>
            <p>
                My main focus these days is building products at Cogoport. I enjoy creating software where design and engineering converge — things that look good but are also well-built under the hood. In my free time, I&apos;ve also explored various development environments such as Jetpack Compose, ElectronJS, and many more.
            </p>
            <p>
                When I&apos;m not at the computer, I&apos;m usually watching a lot of sci-fi movies or playing Badminton
            </p>
            <p>
                Here are the languages and frameworks I have worked with
                {' :'}
            </p>
            <div className={styles.skills}>
                {MY_SKILLS.map((skill) => (
                    <div
                        className={styles.tech_pill}
                        key={JSON.stringify(skill)}
                    >
                        {skill}
                    </div>
                ))}
            </div>

        </section>
    );
}

export default DeveloperDescription;
