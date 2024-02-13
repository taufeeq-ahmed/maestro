/* eslint-disable import/extensions */
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import styles from './constact.module.css';
import { gmailLink, linkedinLink } from '@/app/constants/constants';
import ThemedButton from '../Button/ThemedButton';

function Contact() {
    return (
        <section className={styles.contact}>
            <h3 className={styles.section_heading}>
                Contact
            </h3>
            <p className={styles.section_subheading}>
                Feel free to conatct me for any business related dicussions
            </p>
            <div className={styles.social_links}>
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
            </div>
        </section>
    );
}

export default Contact;
