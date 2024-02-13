import React from 'react';
import styles from './skills.module.css';

function Skills({ skills }) {
    return (
        <section className={styles.skills}>
            <h3 className={styles.section_heading}>
                My Skills
            </h3>
            <ul className={styles.skills_list}>
                {skills.map((skill) => (
                    <li className={styles.skill}>
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;
