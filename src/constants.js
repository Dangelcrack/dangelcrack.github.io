import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  react,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  python,
  django,
  java,
  angular,
  postgresql,
  mysql,
  github,
} from "./assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mí",
  },
  {
    id: "work",
    title: "Trabajo",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

export const linkTreeNavLinks = [];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python / Django Developer",
    icon: creator,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML & CSS",
    icon: html,
  },
];

const experiences = [
  {
    title: "Desarrollador Web / Software",
    company_name: "Tu Proyecto / Empresa",
    icon: web,
    iconBg: "#383E56",
    date: "Enero 2024 - Presente",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web utilizando tecnologías modernas.",
      "Colaboración con equipos para definir la arquitectura y diseño de software.",
      "Optimización de rendimiento y buenas prácticas de código limpio.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Trabajar con él ha sido una experiencia excelente. Siempre aporta soluciones eficientes.",
    name: "Cliente o Compañero",
    designation: "CEO",
    company: "Empresa",
    image: "https://randomuser.me/api/portraits/lego/1.jpg",
  },
];

const projects = [
  {
    name: "Proyecto Ejemplo",
    description:
      "Aplicación web desarrollada con tecnologías modernas para la gestión y optimización de procesos.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: backend,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };