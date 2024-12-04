const GITHUB_LINK = 'https://github.com/taufeeq-ahmed';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/taufeeq-ahmed-imjst/';
const GMAIL_LINK = 'mailto:io.taufeeq.ahmed@gmail.com';

const MY_SKILLS = [
    'Java', 'Javascript', 'Typescript', 'Python',
    'ReactJS', 'NextJS',
    'NodeJS', 'ExpressJS', 'Spring Boot',
    'PostgresQL', 'MongoDB', 'Firebase', 'NATS', 'Docker', 'Kubernetes',
];

const EXPERIENCE = [
    {
        start: 'JUN 2023',
        end: 'CURRENT',
        name: 'Fibr.Ai',
        designation: 'Senior Frontend Engineer',
        projects: [
            {
                title: 'Personalized Dashbords',
                description: 'Developed a Personalized Dashboard for controlling the A/B testing experience of the product and and helped Fibr.ai scale to a Revenue of 80K$ per month',
                techStack: [
                    'Typescript', 'Next.js',
                ],
                link: 'https://fibr.ai/',
            },
            {
                title: 'UI Components',
                description: 'Built a components library for standardizing the UI across the product and enforcing consistent visual experience in Typescript',
                techStack: [
                    'Typescript', 'Next.js',
                ],
                link: 'https://fibr.ai/',
            },
        ],
    },
    {
        start: 'MAR 2023',
        end: 'JUN-2024',
        name: 'Cogoport',
        designation: 'SDE-1',
        projects: [
            {
                title: 'Cogo Academy',
                description: 'Cogo Academy is a platform designed to train and evaluate new tech interns within the company. It is built with training modules and inbuilt compilers, offering a fully scalable solution for training new employees.',
                techStack: [
                    'AstroJS', 'PostgresQL', 'NodeJS', 'FastAPI',
                ],
                link: 'https://academy.cogoport.com',
            },
            {
                title: 'Notification System',
                description: 'A platform-independent Notification System built using web-push service, service workers, and CRON jobs. Built a sophisticated tool for creating and managing notifications, providing a centralized and user-friendly interface for all apps in the company.',
                techStack: [
                    'NextJS', 'PostgresQL', 'NodeJS', 'ExpressJS', 'CRON',
                ],
                link: 'https://cms.cogoport.com/login',
            },
            {
                title: "Cogoport's Globalization",
                description: 'Translated the entire Cogoport application into 35+ languages, leveraging the AWS Translator module, and also built the front end for supporting new languages',
                techStack: [
                    'NextJS', 'PostgresQL', 'AWS::Translate', 'ExpressJS', 'cogoCMS',
                ],
                link: 'https://www.cogoport.com/zh-CN',
            },
            {
                title: 'Container Tracking',
                description: 'A system built for tracking international shipments across the oceans using container number.',
                techStack: [
                    'NextJS', 'PostgresQL', 'SpringBoot', 'Kotlin',
                ],
                link: 'https://www.cogoport.com/en-IN/tools/tracking',
            },
            {
                title: 'World Port Info',
                description: 'Compiled detailed insights into 3000+ global seaports enriching the platform with comprehensive information increasing the lead generation for the company by 13%',
                techStack: [
                    'NextJS', 'PostgresQL', 'NodeJS', 'ExpressJS', 'cogoCMS',
                ],
                link: 'https://www.cogoport.com/en-IN/knowledge-center/resources/world-port-info',
            },
        ],
    },
    {
        start: null,
        end: null,
        name: 'Personal Projects',
        designation: '',
        projects: [
            {
                title: 'Auth Microservice ',
                description: 'An event-driven authentication microservice built in Node.js. NATS is integrated for handling events. Containerized using Docker and Kubernetes ',
                techStack: [
                    'NodeJS', 'Typescript', 'MongoDB', 'NATS', 'Docker', 'Kubernetes',
                ],
                link: 'https://github.com/taufeeq-ahmed/tickets-microservice',
            },
            {
                title: 'Motes ',
                description: 'A note taking app built for macOS that supports markdown',
                techStack: [
                    'ElectronJS', 'Markdown',
                ],
                link: 'https://github.com/taufeeq-ahmed/motes',
            },
        ],
    },
];

const CURRENT_COMPANY = 'Fibr.Ai';

const CURRENT_ROLE = 'Senior Frontend Engineer';

export {
    GITHUB_LINK,
    LINKEDIN_LINK,
    GMAIL_LINK,
    MY_SKILLS,
    EXPERIENCE,
    CURRENT_COMPANY,
    CURRENT_ROLE,
};
