export const resume = {
  name: "Isaac Busee",
  title: "Software Engineer",
  summary:
    "A professional individual with over seven years of software development. Innovative and passionate about web design, adaptation, and maintenance. Hard worker, fast learner, and a team player who is proficient in a variety of multimedia web tools and scripting languages. Currently seeking opportunities in front-end and back-end web development roles.",
  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "Java"],
    frontend: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    backend: ["Node.js", "Express", "Spring Boot", "Django", "Flask"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Oracle SQL"],
    cloud: ["AWS", "AWS Lambda", "Vercel", "Firebase"],
  },
  experience: [
    {
      role: "Software Engineer",
      company: "Tunutech",
      description: `
        Developed and maintained web applications using React,
        JavaScript, Node.js and REST APIs.
      `,
    },
  ],
  projects: [
    {
      name: "Trip Planner",
      technologies: ["Python", "Django", "HTML", "CSS", "PostgreSQL"],
      description: `
        Built a trip planning web application that allows users
        to create and manage trips. Implemented authentication,
        database storage, and user-specific trip information.
      `,
    },
    {
      name: "Memories",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      description: `
        Built a full-stack social media-style application using
        the MERN stack. Implemented authentication and MongoDB
        data models.
      `,
    },
  ],
  additionalExperience: `
    Hosted and deployed applications on AWS Lambda using
    CI/CD pipelines.
  `,
};

export type Resume = typeof resume;