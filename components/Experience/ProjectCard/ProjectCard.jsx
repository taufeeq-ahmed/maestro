import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
// import Image from 'next/image';
import styles from './projectcard.module.css';

function ProjectCard({ project }) {
    const {
        title, description, techStack, link,
    } = project;

    return (
        <a href={link} target="_blank" rel="noreferrer" className={styles.project_link}>
            <div className={styles.project_card}>
                <h3 className={styles.project_title}>
                    {title}
                    <spam className={styles.icon}>
                        <MdArrowOutward />
                    </spam>
                </h3>
                <p className={styles.project_description}>{description}</p>
                <div className={styles.tech_stack}>
                    {techStack.map((ts) => (
                        <div className={styles.tech_pill}>
                            {ts}
                        </div>
                    ))}
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;
