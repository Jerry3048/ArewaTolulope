export const personalInfo = {
  name: "Arewa Tolulope",
  title: "Frontend Developer",
  roles: ["Frontend Developer", "React Specialist", "Freelancer"],
  email: "arewatolulope5@gmail.com",
  phone: "+234 7018960275",
  location: "Obafemi Awolowo University, Ile-Ife,Osun State, Nigeria",
  bio: "Passionate frontend developer with hands-on experience building 10+ real-world projects. I specialize in React, TypeScript, and modern CSS frameworks, creating beautiful and user-friendly web applications. Always eager to learn new technologies and solve complex problems.",
  resumeUrl: "/resume.pdf",
  profileImage: "assets/Heroimages/image.png",
  avatar: "/assets/Heroimages/at-high-resolution-logo.png"
};

export const skills = {
  Known: [
    { name: "HTML5", icon: "/assets/skilllogo/Group 12.svg", level: 95 },
    { name: "CSS3", icon: "/assets/skilllogo/Group 13.svg", level: 90 },
    { name: "JavaScript", icon: "/assets/skilllogo/Group.svg", level: 92 },
    { name: "TypeScript", icon: "/assets/skilllogo/Group.png", level: 88 },
    { name: "React", icon: "/assets/skilllogo/Group 14.svg", level: 95 },
    { name: "Bootstrap", icon: "/assets/skilllogo/bootstrap.svg", level: 80 },
    { name: "Tailwind CSS", icon: "/assets/skilllogo/Tailwind_CSS_Logo.svg.png", level: 90 },
    { name: "Git", icon: "/assets/skilllogo/git.svg", level: 70 },
  ],

  learning: [
    { name: "Node.js", icon: "/assets/skilllogo/Group (1).png", level: 20 },
    { name: "Next.js", icon: "/assets/skilllogo/nextjs-icon.png", level: 20 },
    { name: "Firebase", icon: "/assets/skilllogo/firebaselogo-logomark.png", level: 60 },
    { name: "MySQL", icon: "/assets/skilllogo/Vector.svg", level: 60 },
  ],

  other: [
    { name: "Figma", icon: "/assets/skilllogo/figma.svg", level: 50 },
    { name: "C++", icon: "/assets/skilllogo/image 20.svg", level: 80 },
      { name: "CyberSecurity", icon: "/assets/skilllogo/cyberSecurity.jpg", level: 50 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A feature-rich e-commerce platform with product browsing, category filtering, cart system, checkout flow, and user authentication. Includes an admin dashboard for inventory, orders, and real-time analytics, built with Zustand for state management and Firebase for backend services.",
    image: "/assets/Projectimages/Screenshot 2025-08-25 224618.png",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Firebase", "Zustand"],
    liveUrl: "https://ecommerce-plum-gamma.vercel.app/",
    githubUrl: "https://github.com/Jerry3048/Ecommerce",
  },
  {
    id: 2,
    title: "World Navigator",
    description:
      "A modern weather and country explorer app that provides real-time weather forecasts, country details, and interactive map-based navigation. Features include search, filtering, and a responsive design with Flowbite components.",
    image: "/assets/Projectimages/Screenshot 2025-08-25 223001.png",
    technologies: ["React", "OpenWeather API", "Tailwind CSS", "JavaScript", "Flowbite"],
    liveUrl: "https://worldnavigator.vercel.app/",
    githubUrl: "https://github.com/Jerry3048/worldnavigator",
  },
  {
    id: 3,
    title: "Nutritionist Planning Website",
    description:
      "A responsive landing page for a nutritionist service that highlights meal planning, health tips, and consultation booking. Built with TypeScript and TailwindCSS for scalability, type safety, and clean UI.",
    image: "/assets/Projectimages/Screenshot 2025-08-25 224522.png",
    technologies: ["React", "TypeScript", "TailwindCSS"],
    liveUrl: "https://nutritionist-puce.vercel.app/",
    githubUrl: "https://github.com/Jerry3048/Nutritionist",
  },
  {
    id: 4,
    title: "Loopstudios Landing Page",
    description:
      "A sleek and fully responsive landing page for a creative agency. Features a modern grid-based layout, smooth hover effects, and a mobile-first design for seamless user experience.",
    image: "/assets/Projectimages/Screenshot 2025-08-25 225331.png",
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://jerry3048.github.io/loopstudios-landing-page/",
    githubUrl: "https://github.com/Jerry3048/loopstudios-landing-page",
  },
  {
    id: 5,
    title: "Space Tourism Website",
    description:
      "A multi-page responsive website introducing space tourism concepts. Includes animated navigation, crew details, destination pages, and technology showcases. Styled with Tailwind CSS for modern aesthetics.",
    image: "/assets/Projectimages/Screenshot 2025-08-25 224711.png",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://space-tourism-brown-omega.vercel.app/",
    githubUrl: "https://github.com/Jerry3048/Space-tourism",
  },
  {
    id: 6,
    title: "Shopping List",
    description:
      "A simple yet practical shopping list web app where users can add, edit, and remove items. Built with vanilla JavaScript, HTML, and CSS to demonstrate clean DOM manipulation and lightweight interactivity.",
    image: "/assets/Projectimages/Screenshot 2025-08-26 125032.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://jerry3048.github.io/shoping-list/",
    githubUrl: "https://github.com/Jerry3048/shoping-list",
  },
];


export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];