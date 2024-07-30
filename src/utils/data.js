import { IoLogoJavascript, IoLogoReact } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { TbPrompt } from 'react-icons/tb';

export const PROFILE_DATA = {
  profilePicture: 'https://via.placeholder.com/150',
  name: 'Oerd Bej',
  tagline: `Fullstack Developer with almost 3 years of experience specializing in the JavaScript ecosystem, with a strong emphasis on React and Typescript. Dedicated to lifelong learning, I embody a growth mindset and excel in creative problem-solving. My expertise is further enhanced by proven leadership abilities and exceptional communication skills.

I love to read books and you can follow me on Goodreads. Also, feel free to check out my blog where I write to learn better.`,
  jobTitle: 'Full Stack Developer',
  location: 'Berlin, Germany',
  yearsOfExperience: 3,
  skills: [
    'JavaScript',
    'Typescript',
    'React.js',
    'Redux',
    'Next.js',
    'Tailwind CSS',
    'Material UI',
    'Node.js',
    'Express.js',
    'RESTful APIs',
    'UX/UI Design',
    'MySQL',
    'Linux',
    'AWS',
    'Prompt Engineering',
  ],
  email: 'oerdbej@gmail.com',
  phone: '+49 162 3388674',
  website: 'https://slowcoding.vercel.app/',
};

export const SKILLS = [
  {
    id: '01',
    icon: IoLogoJavascript,
    title: 'JavaScript',
    comment: `JavaScript has been my primary language for several years. I've used it to build a variety of projects, from simple scripts to more complex web applications. I appreciate its versatility and wide adoption in the industry.`,
  },
  {
    id: '02',
    icon: SiTypescript,
    title: 'TypeScript',
    comment: `TypeScript enhances my coding experience by adding type safety to JavaScript. It helps me write more maintainable and error-free code. I find it especially useful for larger projects where catching bugs early is crucial.`,
  },
  {
    id: '03',
    icon: IoLogoReact,
    title: 'React JS',
    comment: `I've been working with React.js for a few years and enjoy its component-based architecture. It's been instrumental in building responsive and interactive user interfaces. I use it regularly for both personal and professional projects.`,
  },
  {
    id: '04',
    icon: SiExpress,
    title: 'Express JS',
    comment: `Express.js is my preferred framework for server-side development. Its simplicity and flexibility make it easy to set up routes and handle requests. I've used it to build RESTful APIs and full-stack applications with ease.`,
  },
  {
    id: '05',
    icon: SiNextdotjs,
    title: 'Next.js',
    comment: `Next.js is a great framework for server-rendered React applications. Its built-in features, like static site generation and API routes, help me create performant and SEO-friendly web apps. I rely on it for projects that need fast load times and good search engine optimization.`,
  },
  {
    id: '06',
    icon: SiMysql,
    title: 'MySQL',
    comment: `I've found MySQL to be a solid database choice for my projects. Its straightforward setup and reliability have been really helpful. Whether I'm working on smaller applications or projects with more data, MySQL has consistently met my needs. I appreciate its strong community and extensive documentation, which make problem-solving easier.`,
  },
  {
    id: '07',
    icon: TbPrompt,
    title: 'Prompt Engineering',
    comment: `Certified in AI tools and prompt engineering, I've learned to supercharge creativity and productivity with Generative AI. My training covered everything from automating tasks to enhancing problem-solving with large language models. I can craft effective prompts, generate marketing content, and create data-driven presentations. Hands-on projects helped me master using AI for smart planning, quick problem-solving, and extracting key insights, making me skilled at applying AI in real-world scenarios.`,
  },
];

export const WORK_EXPERIENCE = [
  {
    id: '01',
    company: 'ReDi School of Digital Integrtion - Berlin',
    position: 'Frontend Developer',
    duration: 'Aug 2023 - Present',
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
    numberOfProjects: 10,
    certificationsEarned: 8,
  },
};
