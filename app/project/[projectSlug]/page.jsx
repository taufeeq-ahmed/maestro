/* eslint-disable import/extensions */
import React from 'react';
import BlogImage from '@/components/BlogComponents/BlogImage/BlogImage';
import Paragraph from '@/components/BlogComponents/Paragraph/Paragraph';
import BlogTitle from '@/components/BlogComponents/BlogTitle/BlogTitle';
import styles from './projectpage.module.css';

export default function ProjectPage() {
    return (
        <section className={styles.project_page}>
            <BlogTitle />
            <Paragraph />
            <BlogImage />
        </section>
    );
}
