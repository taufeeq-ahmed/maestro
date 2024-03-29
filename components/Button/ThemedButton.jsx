'use client';

import React from 'react';

import Link from 'next/link';
import styles from './themed_button.module.css';

function ThemedButton({
    type = 'colored',
    text = '', icon, shape = 'linear',
    link, handleClick, style = {},
    ariaLabel,
}) {
    const typeClass = type === 'acrylic' ? styles.acrylic_button : styles.colored_button;
    const shapeClass = shape === 'circular' ? styles.circular : styles.linear;

    if (!link) {
        return (
            <button
                onClick={handleClick}
                className={`${styles.button} ${typeClass} ${shapeClass}`}
                type="button"
                style={style}
                aria-label={ariaLabel}
            >
                {text}
                {icon}
            </button>
        );
    }

    return (
        <Link
            href={link}
            target="_blank"
            aria-label={ariaLabel}
        >
            <button
                className={`${styles.button} ${typeClass} ${shapeClass}`}
                type="button"
                style={style}
                aria-label={ariaLabel}
            >
                {text}
                {icon}
            </button>
        </Link>
    );
}

export default ThemedButton;
