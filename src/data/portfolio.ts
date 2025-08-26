export const personalInfo = {
  name: "Arewa Tolulope",
  title: "Frontend Developer",
  roles: ["Frontend Developer", "React Specialist", "Freelancer"],
  email: "arewatolulope5@gmail.com",
  phone: "+234 7018960275",
  location: "Obafemi Awolowo University, Ile-Ife,Osun State, Nigeria",
  bio: "Passionate frontend developer with hands-on experience building 10+ real-world projects. I specialize in React, TypeScript, and modern CSS frameworks, creating beautiful and user-friendly web applications. Always eager to learn new technologies and solve complex problems.",
  resumeUrl: "/resume.pdf",
  profileImage: "/assets/Heroimages/photo_2025-08-25_06-50-01.jpg",
  avatar: "/assets/Heroimages/photo_2025-08-25_06-53-00.jpg"
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
    description: "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and order processing.",
    image: "/assets/Projectimages/Screenshot 2025-08-25 224618.png",
    technologies: ["React", "JavaScript", "Tailwind CSS", "firebase","Zustand"],
    liveUrl: "https://ecommerce-plum-gamma.vercel.app/",
    githubUrl: "https://github.com/Jerry3048/Ecommerce"
  },
  {
    id: 2,
    title: "World Navigator",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather metrics.",
    image: "/assets/Projectimages/Screenshot 2025-08-25 223001.png",
    technologies: ["React", "OpenWeather API", "Tailwind CSS","JavaScript","flowbite"],
    liveUrl: "https://worldnavigator.vercel.app/",
    githubUrl: "https://github.com/Jerry3048/worldnavigator"
  },
  {
    id: 3,
    title: "Nurtitionist Planning Website",
    description: "Collaborative task management application with team features, real-time updates, and project tracking capabilities.",
    image: "/assets/Projectimages/Screenshot 2025-08-25 224522.png",
    technologies: ["React", "TypeScript", "TailwindCSS"],
    liveUrl: "https://nutritionist-puce.vercel.app/",
    githubUrl: "https://github.com/Jerry3048/Nutritionist"
  },
  {
    id: 4,
    title: "loopstudio landing page",
    description: "Modern, responsive portfolio website built with React and Framer Motion, featuring dark mode and smooth animations.",
    image: "/assets/Projectimages/Screenshot 2025-08-25 225331.png",
    technologies: ["HTML", "Tailwind CSS", "Javascript"],
    liveUrl: "https://jerry3048.github.io/loopstudios-landing-page/",
    githubUrl: "https://github.com/alexjohnson/portfolio"
  },
  {
    id: 5,
    title: "Space Tourism Website",
    description: "Full-stack social media application with real-time messaging, post sharing, and user authentication.",
    image: "/assets/Projectimages/Screenshot 2025-08-25 224711.png",
    technologies: ["React", "JavaScript", "Tailwind Css"],
    liveUrl: "https://example-social-app.com",
    githubUrl: "https://github.com/Jerry3048/loopstudios-landing-page"
  },
  {
    id: 6,
    title: "Crypto Tracker",
    description: "Cryptocurrency tracking dashboard with real-time prices, portfolio management, and market analysis tools.",
    image: "https://images.pexels.com/photos/844127/pexels-photo-844127.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
    technologies: ["React", "CoinGecko API", "Chart.js", "Local Storage"],
    liveUrl: "https://example-crypto-tracker.com",
    githubUrl: "https://github.com/alexjohnson/crypto-tracker"
  }
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/alexjohnson", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/alexjohnson", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/alexjohnson", icon: "twitter" },
  { name: "Facebook", url: "https://facebook.com/alexjohnson", icon: "facebook" }
];

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];