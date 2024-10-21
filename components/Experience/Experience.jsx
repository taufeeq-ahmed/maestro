import React from 'react';
import styles from './experience.module.css';
import ProjectCard from './ProjectCard/ProjectCard';

function Experience({ companies }) {
    return (
        <section className={styles.experience}>
            {companies.map((company) => {
                const {
                    start, end, projects, name, designation,
                } = company;
                return (
                    <div
                        className={styles.company}
                        key={JSON.stringify(company)}
                    >
                        <h3 className={styles.company_name}>
                            {name}
                        </h3>
                        {start && end && designation && (
                            <div>
                                <p>
                                    {`${designation} : ${start} - ${end}`}
                                </p>
                            </div>
                        )}
                        <div className={styles.company_details}>
                            <div className={styles.projects}>
                                {projects.map((pc) => (
                                    <ProjectCard
                                        project={pc}
                                        key={JSON.stringify(pc)}
                                    />
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
