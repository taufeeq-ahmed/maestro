/* eslint-disable import/extensions */
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdFileDownload, MdOutlineMailOutline } from 'react-icons/md';
import styles from './constact.module.css';
import { GITHUB_LINK, GMAIL_LINK, LINKEDIN_LINK } from '@/constants/constants';
import ThemedButton from '../Button/ThemedButton';

function Contact() {
    const handleDownload = () => {
        const pdfPath = '/assets/imjst.resume.pdf';

        const link = document.createElement('a');
        link.href = pdfPath;
        link.target = '_blank';
        link.download = 'taufeeq.resume.pdf';

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
    };

    return (
        <section className={styles.contact}>
            <ThemedButton
                text="Resume"
                type="acrylic"
                icon={<MdFileDownload />}
                handleClick={handleDownload}
            />

            <ThemedButton
                shape="circular"
                type="acrylic"
                icon={<FaGithub />}
                link={GITHUB_LINK}
                arialLabel="github_link"
            />
            <ThemedButton
                shape="circular"
                type="acrylic"
                icon={<FaLinkedin />}
                link={LINKEDIN_LINK}
                arialLabel="linkedin_link"
            />
            <ThemedButton
                shape="circular"
                type="acrylic"
                icon={<MdOutlineMailOutline />}
                link={GMAIL_LINK}
                arialLabel="gmail_link"
            />
        </section>
    );
}

export default Contact;
