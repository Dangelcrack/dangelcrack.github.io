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
  pokealert,
  agrodatalab,
  laravel,
  wordpress,
  prestashop,
  php,
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
    icon: html,
  },
  {
    title: "Backend Developer",
    icon: java,
  },
  {
    title: "Python / Django Developer",
    icon: django,
  },
  {
    title: "Full Stack Developer",
    icon: angular,
  },
];

// Recortado a 12 tecnologías para no superar el límite de contextos WebGL
// activos del navegador (cada BallCanvas crea su propio contexto Three.js).
// Quitadas: MongoDB, HTML & CSS, Git, JavaScript (implícitas o poco
// diferenciadoras frente al resto del stack real de tu CV).
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
    name: "Docker",
    icon: docker,
  },
  {
    name: "WordPress",
    icon: wordpress,
  },
  {
    name: "PrestaShop",
    icon: prestashop,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "PHP",
    icon: php,
  },
];

const experiences = [
  {
    title: "Desarrollador Web — Prácticas DAM",
    company_name: "Qanet · Puente Genil, Andalucía (Remoto)",
    icon: laravel,
    iconBg: "#383E56",
    date: "Marzo 2025 - Junio 2025",
    points: [
      "Desarrollé una plataforma de gestión de licencias con Laravel y PHP, reduciendo el tiempo de gestión de procesos un 40% al automatizar flujos manuales.",
      "Optimicé consultas MySQL mediante indexación y reescritura de queries, mejorando los tiempos de respuesta un 30% en tablas críticas.",
      "Implementé vistas con Blade templates siguiendo el patrón MVC, mejorando la integración frontend-backend.",
      "Trabajé con Git en flujo de equipo real: ramas, pull requests y control de versiones colaborativo.",
    ],
  },
  {
    title: "Técnico Web — Soporte y Desarrollo",
    company_name: "Eccuo Marketing Digital · Córdoba (Prácticas ASIR)",
    icon: wordpress,
    iconBg: "#ffffff",
    date: "Marzo 2022 - Junio 2022",
    points: [
      "Gestioné y optimicé 5 sitios en WordPress y PrestaShop en producción, mejorando la velocidad de carga y la retención de usuarios.",
      "Implementé mejoras de SEO técnico y UX que incrementaron el tráfico orgánico un 15%.",
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
    name: "PokeAlert",
    upper_title: "Demo en producción (Render)",
    description:
      "Aplicación Django para monitorización en tiempo real del mercado Pokémon TCG, con alertas de precio personalizadas. Tareas periódicas con Celery + Redis en local; en producción, adaptadas a endpoints HTTP disparados por cronjob externo para sortear las limitaciones del free tier de Render. Notificaciones vía SendGrid. CI con GitHub Actions: lint con ruff y suite de tests con pytest.",
    tags: [
      { name: "django", color: "green-text-gradient" },
      { name: "drf", color: "blue-text-gradient" },
      { name: "celery-redis", color: "pink-text-gradient" },
      { name: "postgresql", color: "orange-text-gradient" },
      { name: "sendgrid", color: "green-text-gradient" },
      { name: "pytest", color: "blue-text-gradient" },
      { name: "github-actions", color: "pink-text-gradient" },
    ],
    image: pokealert,
    source_code_link: "https://pokealert.onrender.com/",
  },
  {
    name: "AgroDataLab",
    upper_title: "Demo en producción",
    description:
      "Aplicación Django para monitorización en tiempo real de sensores agrícolas, con pipeline de análisis exploratorio con Pandas y Jupyter: limpieza de datos reales de sensores de suelo, visualización y detección de anomalías. Sistema de alertas personalizadas y modelo predictivo para optimización de recursos en cultivos.",
    tags: [
      { name: "django", color: "green-text-gradient" },
      { name: "pandas", color: "blue-text-gradient" },
      { name: "jupyter", color: "orange-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
    ],
    image: agrodatalab,
    source_code_link: "https://angelpablo2.alwaysdata.net/",
  },
];

export { services, technologies, experiences, testimonials, projects };