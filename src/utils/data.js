import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoNodejs,
} from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';

export const PROFILE_DATA = {
  profilePicture: 'https://via.placeholder.com/150',
  name: 'Oerd Bej',
  tagline: `Fullstack Developer with more than 2.5 years of experience specializing in the JavaScript ecosystem, with a strong emphasis on React and Typescript. Dedicated to lifelong learning, I embody a growth mindset and excel in creative problem-solving. My expertise is further enhanced by proven leadership abilities and exceptional communication skills.`,
  jobTitle: 'Full Stack Developer',
  location: 'Berlin, Germany',
  yearsOfExperience: 3,
  skills: [
    'JavaScript',
    'React.js',
    'Redux',
    'Typescript',
    'Tailwind CSS',
    'Material UI',
    'Redux',
    'Node.js',
    'RESTful APIs',
  ],
  email: 'oerdbej@gmail.com',
  phone: '+1 (123) 456-7890',
  website: 'https://timetoprogram.com',
};

export const SKILLS = [
  {
    id: '01',
    icon: IoLogoJavascript,
    title: 'JavaScript',
    comment: `JavaScript is my bread and butter. I've been working with it for over 4 years and have built numerous applications, ranging from simple scripts to complex web applications.`,
  },
  {
    id: '02',
    icon: SiTypescript,
    title: 'Typescript',
    comment: `TypeScript is a fundamental part of every web project I work on. I have a deep understanding of its type system and features, ensuring my code is robust, maintainable, and scalable.`,
  },
  {
    id: '03',
    icon: IoLogoReact,
    title: 'React JS',
    comment: `I'm deeply passionate about React.js and have been using it extensively for over 3 years. I've built numerous projects, including e-commerce websites, dashboards, and interactive web applications.`,
  },
  {
    id: '04',
    icon: IoLogoNodejs,
    title: 'Node JS',
    comment: `Node.js is my go-to choice for building scalable and efficient server-side applications. With its event-driven architecture and extensive ecosystem, I've built RESTful APIs, real-time chat applications, and more.`,
  },
  {
    id: '05',
    icon: SiMongodb,
    title: 'MongoDB',
    comment: `MongoDB's flexible document-based structure and scalability make it an ideal choice for storing and managing data in modern web applications. I've used MongoDB extensively in projects, ranging from small-scale applications to large-scale platforms.`,
  },
  {
    id: '06',
    icon: RiTailwindCssFill,
    title: 'Tailwind CSS',
    comment: `Tailwind CSS has revolutionized the way I approach front-end styling. Its utility-first approach allows me to rapidly build responsive and beautifully designed interfaces without writing custom CSS.`,
  },
];

export const WORK_EXPERIENCE = [
  {
    id: '01',
    company: 'ReDi School of Digital Integrtion - Berlin',
    position: 'Frontend Developer',
    duration: '2018 - Present',
    description:
      ' Boosted engagement and retention by 30% through leading 2-3 live Zoom JavaScript classes weekly, resulting in higher completion rates and positive student feedback. Delivered tailored guidance to improve student performance and confidence in JavaScript programming. Mentored 3 junior JavaScript developers, enhancing their problem-solving skills. Provided 13 hours of monthly JavaScript mentorship.',
  },
  {
    id: '02',
    company: 'European Movement Albania - Tirane',
    position: 'Web Manager',
    duration: 'Apr 2023 - Mar 2024',
    description:
      'Managed and prioritized the product backlog, aligning development with strategic goals and user needs. Oversaw routine updates and enhancements, adding new features and resolving technical issues. Enhanced Moodle functionality, boosting project efficiency and user engagement by 35% among 9000 users, increasing satisfaction and loyalty. Drove 120,000 unique visitors to the website from January 2022 to March 2024, improving lead generation and customer acquisition.',
  },
  {
    id: '03',
    company: 'Auriga - remote',
    position: 'Fullstack Developer',
    duration: 'Jun 2022 - Mar 2023',
    description:
      'Translated Figma mockups into responsive Material-UI components, ensuring pixel-perfect UI/UX design. Enhanced performance with React, reducing load times and aligning with business goals. Implemented agile methodologies to streamline work processes, ensuring client satisfaction. Collaborated with UX/UI team to improve user interface, decreasing bounce rate and increasing user satisfaction. Achieved a 20% increase in engagement and improved SEO by transitioning to Material-UI, reducing rendering time, and boosting website performance over 6 months.',
  },
];

export const ABOUT_ME_DATA = {
  introduction:
    'Fullstack Developer with more than 2.5 years of experience specializing in the JavaScript ecosystem, with a strong emphasis on React and TypeScript. Dedicated to lifelong learning, I embody a growth mindset and excel in creative problem-solving. My expertise is further enhanced by proven leadership abilities and exceptional communication skills.',
  background:
    'Throughout my career, I have worked on various projects that have honed my skills and expanded my knowledge base. My journey in software development began with a strong foundation in fundamental programming concepts, which has allowed me to tackle complex challenges with confidence.',
  skills:
    "I'm proficient in a variety of technologies including React.js, TypeScript, JavaScript, HTML, CSS, Node.js, MongoDB, Material UI, and Tailwind CSS. I'm also experienced in using version control systems like Git and working with RESTful APIs.",
  projects:
    'Some of my notable projects include an e-commerce website built with React.js and Redux, a real-time chat application using Node.js and MongoDB, and a responsive dashboard utilizing Material UI and Tailwind CSS.',
  interests:
    'Outside of coding, I am passionate about reading books, which broadens my knowledge and fuels my creativity. I also enjoy going on cycling adventures, which helps me stay active and provides a refreshing break from the digital world.',
  careerGoals:
    "In the future, I aim to continue honing my skills as a developer, exploring new technologies, and contributing to meaningful projects that make a positive impact on people's lives.",

  stats: {
    yearsOfExperience: '3',
    numberOfProjects: 20,
    certificationsEarned: 8,
  },
};
