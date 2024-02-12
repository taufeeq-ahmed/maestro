'use client';

import React from 'react';

import Link from 'next/link';
import styles from './themed_button.module.css';

function ThemedButton({
    type = 'colored', text = '', icon, shape = 'linear', link, handleClick,
}) {
    const typeClass = type === 'acrylic' ? styles.acrylic_button : styles.colored_button;
    const shapeClass = shape === 'circular' ? styles.circular : styles.linear;

    if (!link) {
        return (
            <button
                onClick={handleClick}
                className={`${styles.button} ${typeClass} ${shapeClass}`}
                type="button"
            >
                {text}
                {icon}
            </button>
        );
    }

    return (
        <Link href={link} target="_blank">
            <button
                className={`${styles.button} ${typeClass} ${shapeClass}`}
                type="button"
            >
                {text}
                {icon}
            </button>
        </Link>
    );
}

export default ThemedButton;
