/* eslint-disable import/extensions */
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdFileDownload, MdOutlineMailOutline } from 'react-icons/md';
import styles from './constact.module.css';
import { githubLink, gmailLink, linkedinLink } from '@/app/constants/constants';
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
                link={githubLink}
            />
            <ThemedButton
                shape="circular"
                type="acrylic"
                icon={<FaLinkedin />}
                link={linkedinLink}
            />
            <ThemedButton
                shape="circular"
                type="acrylic"
                icon={<MdOutlineMailOutline />}
                link={gmailLink}
            />
        </section>
    );
}

export default Contact;
