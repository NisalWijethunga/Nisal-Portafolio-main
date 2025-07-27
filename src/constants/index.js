import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  docker,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  python,
  jira,
  cisco,
  flutter,
  php,
  CRCM,
  PhoenixAirlineSystem,
  MarineLifeConser,
  MarineLifeConser2,
  LearnAscent,
  Dose,
} from '../assets'


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
    techSkill: "Java"
  },
  {
    title: "Frontend Developer",
    icon: mobile,
    techSkill: "ReactJS"
  },
  {
    title: "Backend Developer",
    icon: backend,
    techSkill: "MySQL"
  },
  {
    title: "Ui UX Designer",
    icon: creator,
    techSkill: "Figma"
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Jira",
    icon: jira,
  },
  {
    name: "Python",
    icon: python,
  },

 
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Fluttrt",
    icon: flutter,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Cisco",
    icon: cisco,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "PHP",
    icon: php,
  },
 

];

const experiences = [
  {
    title: "Intern Software Engineer",
    company_name: "EXE.lk",
    icon: web,
    iconBg: "#383E56",
    date: "April 2024 - November 2024",
    points: [
      "Worked on API development and backend API consumption for a business management web interface.",
      "Responsible for Firebase for backend services and real-time database management.",
      "Utilized MySQL for database design and optimization and Java for application development.",
      "Contributed to Machine Learning for AI model development and dataset creation.",
    ],
  },
  {
    title: "Junior Software & IT Solutions Executive",
    company_name: "ARD Pvt Ltd.",
    icon: backend,
    iconBg: "#383E56",
    date: "December 2024 - May 2025",
    points: [
      "Supporting the development of inventory and sales tracking systems tailored for textile and garment processes.",
      "Coordinating with our embroidery and printing teams to improve order management workflows using custom-built tools.",
      "Assisting in maintaining our online presence and digital sales systems.",
      "Providing IT support and troubleshooting across our branches in Kalutara and Panadura.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but nisal proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like nisal does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After nisal optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "CR & EM System",
    description:
      "crime reporting, digital evidence management and strengthen public involvement. A digital evidence submission platform, and analytics through crime prediction model.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
 
    ],
    image: CRCM,
    source_code_link: "https://github.com/",
  },
  {
    name: "Phoenix Airline System",
    description:
      "Phoenix Airline System is a web application with a small online flight booking system. Processes such as user,flight,ticket management. And also used frameworks such as React on this project.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "JAVA",
        color: "green-text-gradient",
      },
      {
        name: "MY SQL",
        color: "pink-text-gradient",
      },
 
    ],
    image: PhoenixAirlineSystem,
    source_code_link: "https://github.com/Savindu12/Pheonix_FMS.git",
  },
  {
    name: " LEARN ASCENT",
    description:
      "LEARN ASCENT is a mobile-based Learning Management System (LMS) developed to simplify and enhance the academic experience for both students and educators.provides cross-platform solution.",
    tags: [
      {
        name: "FLUTTER",
        color: "blue-text-gradient",
      },
      {
        name: "DART",
        color: "white-text-gradient",
      },
      {
        name: "FIREBASE",
        color: "pink-text-gradient",
      },
      {
        name: "MATERIAL UI",
        color: "green-text-gradient",
      },
 
    ],
    image: LearnAscent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Dose Diary",
    description:
      "An application designed to handle the operations of the medicine stock at the Noble Aged Nursing Care Home which is built by React framework integrated with NodeJS and MSSQL Server. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: " MS SQL",
        color: "pink-text-gradient",
      },
      {
        name: " Rest API",
        color: "blue-text-gradient",
      },
    ],
    image: Dose,
    source_code_link: "https://github.com/",
  },
  {
    name: "Life Below Water",
    description:
      "Life below water Awareness website is created based on UN SDG goals, processes such as donating volunteering and showcasing resources for the marine life conservancy",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "white-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
    ],
    image: MarineLifeConser,
    source_code_link: "https://github.com/NisalWijethunga/WebProject.git",
  },
];

export const coreCompetencies = [
  { title: 'Team work' },
  { title: 'Problem Solving' },
  { title: 'Leadership' },
  { title: 'Adaptability' },
  { title: 'Presentation skills' },
  { title: 'Management' },
  { title: 'Self Learning' },
];

const certifications = [
  {
    title: "Introduction to Cybersecurity",
    icon: cisco,
    issuer: "cisco networking academy",
    date: "2025",
    link: "https://www.credly.com/badges/ee1f6acd-3676-4f98-9956-125d38936d80/public_url",
  },
  {
    title: "AWS Educate Getting Started with Networking",
    icon: aws,
    issuer: "Amazon Web Services",
    // date: "2025",
    link: "https://www.credly.com/badges/9cf98224-08ba-4b56-ae52-89eeb5def32a/public_url"
  },
  {
    title: "AWS Educate Getting Started with Compute",
    icon: aws,
    issuer: "Amazon Web Services",
    // date: "2025",
    link: "https://www.credly.com/badges/2b39c232-d7b5-4fd4-a9c9-d5274bb1eea2/public_url"
  },
  {
    title: "AWS Educate Getting Started with Storage",
    icon: aws,
    issuer: "Amazon Web Services",
    // date: "2025",
    link: "https://www.credly.com/badges/84006517-3c72-406e-b8e0-3e13a86a3987/public_url"
  },
  {
    title: "AWS Educate Introduction to Cloud 101",
    icon: aws,
    issuer: "Amazon Web Services",
    // date: "2025",
    link: "https://www.credly.com/badges/b642ea91-149f-49b7-88ad-813ad25eb7f9/public_url"
  },
  {
    title: "NodeJs:All You Need to Know with Practical Project ",
    icon: nodejs,
    issuer: "Udemy",
    // date: "2025",
    link: "https://www.udemy.com/certificate/UC-318d9f54-12bf-4bf1-9908-997757fd8a1a/"
  },
  {
    title: "GIT, GitLab, GitHub Fundamentals for Software Developers",
    icon: git,
    issuer: "MTF Institute",
    // date: "2023",
    link: "https://www.udemy.com/certificate/UC-b7ca2540-0f12-4192-bf6c-7d4efbb6d0da/"
  },
  {
    title: "Docker & Kubernetes for .Net and Angular Developers ",
    icon: docker,
    issuer: "Udemy",
    // date: "2025",
    link: "https://www.udemy.com/certificate/UC-40f4f4d1-120d-4d5d-8561-a7c900439419/"
  },
  {
    title: "Build a Backend REST API with Node JS from Scratch ",
    icon: nodejs,
    issuer: "Udemy",
    // date: "2025",
    link: "https://www.udemy.com/certificate/UC-8daf0a1f-6641-43f2-be6f-71d054050d25/"
  },
  {
    title: "Python for beginners - Learn all the basics of python ",
    icon: python,
    issuer: "Udemy",
    // date: "2025",
    link: "https://www.udemy.com/certificate/UC-3c11e0b9-de8f-4db2-861a-0ba34b658dae/"
  },
  {
    title: " Mastering HTML5 and CSS3 (Part 2 - Intermediate Level) ",
    icon: html,
    issuer: "Udemy",
    // date: "2025",
    link: "https://www.udemy.com/certificate/UC-82815ea4-a156-49bf-adb8-a70fc82ce928/"
  },
  {
    title: "Jira for Beginners: A Step-by-Step Guide with Hands-On",
    icon: jira,
    issuer: "Framer",
    // date: "2023",
    link: "https://www.udemy.com/certificate/UC-00000000000000000000000000000000/"
  }
];

export { services, technologies, experiences, testimonials, projects, certifications };
