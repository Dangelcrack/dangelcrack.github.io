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
    title: "Desarrollador Web — Prácticas DAM",
    company_name: "Qanet · Puente Genil, Andalucía (Remoto)",
    icon: web,
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
    icon: backend,
    iconBg: "#E6DEDD",
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
      { name: "celery-redis", color: "blue-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
    ],
    image: creator,
    source_code_link: "https://github.com/Dangelcrack",
  },
  {
    name: "AgroDataLab",
    upper_title: "Demo en producción",
    description:
      "Aplicación Django para monitorización en tiempo real de sensores agrícolas, con pipeline de análisis exploratorio con Pandas y Jupyter: limpieza de datos reales de sensores de suelo, visualización y detección de anomalías. Sistema de alertas personalizadas y modelo predictivo para optimización de recursos en cultivos.",
    tags: [
      { name: "django", color: "green-text-gradient" },
      { name: "pandas", color: "blue-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
    ],
    image: web,
    source_code_link: "https://github.com/Dangelcrack",
  },
  {
    name: "Sistema Integral Tienda de Electrónica",
    upper_title: "TFG DAM",
    description:
      "Backend en Java con Hibernate: API REST completa con operaciones CRUD, roles diferenciados (administrador, ventas, cliente) y control de accesos. Frontend en TypeScript desplegado en Firebase con catálogo de +500 productos, carrito de compra y portal de cliente. Panel de administración con reportes de ventas y métricas de inventario.",
    tags: [
      { name: "java-hibernate", color: "green-text-gradient" },
      { name: "typescript", color: "blue-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },
    ],
    image: mobile,
    source_code_link: "https://github.com/Dangelcrack",
  },
  {
    name: "ShopCardApi + ShopCardApplication",
    description:
      "API REST en Java con endpoints documentados para la gestión de tarjetas, junto con un cliente TypeScript/Angular que la consume.",
    tags: [
      { name: "java", color: "green-text-gradient" },
      { name: "angular", color: "blue-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: backend,
    source_code_link: "https://github.com/Dangelcrack",
  },
];

export { services, technologies, experiences, testimonials, projects };