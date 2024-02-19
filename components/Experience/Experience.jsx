import React from 'react';
import styles from './experience.module.css';
import ProjectCard from './ProjectCard/ProjectCard';

const DEFAULT_COMPANY = {
    start: 'MAR 2023',
    end: 'DEC-2023',
    name: 'Cogoport',
    designation: 'SDE-1',
    projects: [
        {
            title: 'Cogo Academy',
            description: 'Cogo Academy is a platform designed to train and evaluate new tech interns within the company. It is built with training modules and inbuilt compilers, offering a fully scalable solution for training new employees.',
            techStack: [
                'NextJS', 'PostgresQL', 'NodeJS', 'FastAPI',
            ],
            link: 'https://academy.cogoport.com',
        },
        {
            title: 'Cogo Academy',
            description: 'Cogo Academy is a platform designed to train and evaluate new tech interns within the company. It is built with training modules and inbuilt compilers, offering a fully scalable solution for training new employees.',
            techStack: [
                'NextJS', 'PostgresQL', 'NodeJS', 'FastAPI',
            ],
            link: 'https://academy.cogoport.com',
        },
        {
            title: 'Cogo Academy',
            description: 'Cogo Academy is a platform designed to train and evaluate new tech interns within the company. It is built with training modules and inbuilt compilers, offering a fully scalable solution for training new employees.',
            techStack: [
                'NextJS', 'PostgresQL', 'NodeJS', 'FastAPI',
            ],
            link: 'https://academy.cogoport.com',
        },
    ],
};

function Experience({ companies = [DEFAULT_COMPANY] }) {
    return (
        <section className={styles.experience}>
            {companies.map((company) => {
                const {
                    start, end, projects, name, designation,
                } = company;
                return (
                    <div className={styles.company}>
                        <h3 className={styles.company_name}>
                            {name}
                        </h3>
                        <p>
                            {`${designation} : ${start} - ${end}`}
                            {' '}
                        </p>
                        <div className={styles.company_details}>
                            <div className={styles.projects}>
                                {projects.map((pc) => (
                                    <ProjectCard project={pc} />
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

export default Experience;
