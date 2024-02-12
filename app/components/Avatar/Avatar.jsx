import React from 'react';
import Image from 'next/image';
import styles from './avatar.module.css';

function Avatar() {
    return (
        <Image
            className={styles.avatar}
            src="/assets/profile.jpeg"
            width={180}
            height={180}
        />
    );
}

export default Avatar;
