import React from 'react';
import Image from 'next/image';
import styles from './blogimage.module.css';

function BlogImage({ src }) {
    return (
        <Image
            className={styles.blog_image}
            src={src}
            width={1440}
            height={1440}
        />
    );
}

export default BlogImage;
