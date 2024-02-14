import React from 'react';
import styles from './blogtitle.module.css';

function BlogTitle({ title }) {
    return (
        <h1 className={styles.blog_title}>
            {title}
        </h1>
    );
}

export default BlogTitle;
