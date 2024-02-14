import React from 'react';
import styles from './paragraph.module.css';

function Paragraph({ content }) {
    return (
        <p className={styles.paragraph}>
            {content}
        </p>
    );
}

export default Paragraph;
