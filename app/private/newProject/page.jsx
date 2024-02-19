/* eslint-disable import/extensions */

'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import RTeditor from '@/components/RTeditor/RTeditor';
import supabase from '@/lib/supabase';

function PageNewProject() {
    const [projectData, setProjectData] = useState({
        title: null,
        description: null,
        content: null,
        image: null,
    });

    const handleFormChange = (event) => {
        setProjectData((old) => ({
            ...old, [event.target.name]: event.target.value,
        }));
    };

    const onContentChange = (newContent) => {
        setProjectData((old) => ({
            ...old,
            content: newContent,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await supabase.from('projects').insert(projectData);
            alert('inserted');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section className={styles.page_new_project}>
            <form className={styles.new_project_form} onSubmit={handleSubmit}>
                <p className={styles.label}>Name</p>
                <input
                    type="text"
                    className={styles.name}
                    placeholder="Name"
                    name="title"
                    onChange={handleFormChange}
                />
                <p className={styles.label}>Description</p>
                <input
                    type="textarea"
                    className={styles.description}
                    placeholder="Description"
                    onChange={handleFormChange}
                    name="description"
                />
                <p className={styles.label}>Image</p>
                <input
                    type="text"
                    className={styles.description}
                    placeholder="Image"
                    onChange={handleFormChange}
                    name="image"
                />
                <p className={styles.label}>Content</p>
                <RTeditor
                    handleContentChange={onContentChange}
                />
                <div className={styles.submit_button_container}>
                    <button
                        type="submit"
                        className={styles.submit_button}
                    >
                        Create Project
                    </button>
                </div>
            </form>
        </section>
    );
}

export default PageNewProject;
