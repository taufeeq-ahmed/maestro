const GITHUB_LINK = 'https://github.com/taufeeq-ahmed';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/taufeeq-ahmed-imjst/';
const GMAIL_LINK = 'mailto:themaestrotaufeeq@gmail.com';

const MY_SKILLS = [
    'C', 'C++', 'Java', 'Javascript', 'Python', 'Kotlin',
    'ReactJS', 'NextJS', 'TailwindCSS',
    'NodeJS', 'ExpressJS', 'FastifyAPI', 'Spring Boot',
    'MySQL', 'PostgresQL', 'MongoDB', 'Firebase',
    'OOPS', 'REST API',
];

const EXPERIENCE = [{
    start: 'MAR 2023',
    end: 'DEC-2023',
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
            description: 'A system built for tracking international shipments across the oceans using container number. Built as rock solid web application that gives real time updates and sends users notifications regarding the same.',
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
        {
            title: 'World Shipping Lines',
            description: 'Built Shipping Lines at Cogoport enabling customers to seamlessly know detailed information about 300+ shipping lines and frequent inbound/outbound ports',
            techStack: [
                'NextJS', 'PostgresQL', 'NodeJS', 'ExpressJS', 'cogoCMS',
            ],
            link: 'https://www.cogoport.com/en-IN/knowledge-center/shipping-lines',
        },
    ],
}];

export {
    GITHUB_LINK,
    LINKEDIN_LINK,
    GMAIL_LINK,
    MY_SKILLS,
    EXPERIENCE,
};
