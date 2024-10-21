/* eslint-disable import/extensions */
/* eslint-disable max-len */
import React from 'react';
import styles from './developerdescription.module.css';
import { CURRENT_COMPANY, MY_SKILLS } from '@/constants/constants';

function DeveloperDescription() {
    return (
        <section className={styles.developer_description}>
            <p>
                Back in 2014, I got hooked on customizing themes with Nova Launcher on Android, turning my phone into a fully personalized playground. That’s what pulled me into the world of digital design. From there, I dove into HTML, CSS, and JavaScript, and, well... fast forward, here I am—a Full Stack Engineer.
            </p>
            <p>
                {`These days, I’m building products at ${CURRENT_COMPANY}, where I love mixing design with engineering. I aim to create stuff that not only looks sleek but also performs flawlessly under the hood.`}
            </p>
            <p>
                When I’m not coding, you’ll probably find me binge-watching sci-fi or hitting the badminton court.
            </p>
            <p>
                Here are the languages/frameworks I’ve worked with:
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
