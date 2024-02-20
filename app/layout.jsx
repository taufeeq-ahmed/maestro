import { Montserrat } from 'next/font/google';
import './globals.css';
import React from 'react';
import { Toaster } from 'sonner';

import styles from './layout.module.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
    title: 'Taufeeq Ahmed',
    description: 'Taufeeq Ahmed\'s developer portfolio',
    keywords: 'taufeeq ahmed maestro cogoport software full-stack',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={montserrat.className}>

                <Toaster
                    richColors
                    closeButton
                    position="top-right"
                />

                <main className={styles.main_content}>
                    {children}
                </main>
            </body>
        </html>
    );
}
