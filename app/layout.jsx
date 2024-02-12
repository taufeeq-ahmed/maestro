import { Montserrat } from 'next/font/google';
import './globals.css';
import React from 'react';
import ParticlesLayout from './ParticlesLayout';
import styles from './layout.module.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <ParticlesLayout />
                <main className={styles.main_content}>
                    {children}
                </main>
            </body>
        </html>
    );
}