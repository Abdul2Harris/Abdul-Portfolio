import img1 from "./images/portfolio.png";
import img2 from "./images/simon.webp";
import img3 from "./images/DCRM.png"
import img4 from "./images/tinyUrl.png"

import { ProjectCard } from "./Projectview";
import { href } from "react-router-dom";

export const Projects = () => {
  const projectCardData = [
    {
      title: "TinyLink — A Modern URL Shortener",
      para: "TinyLink is a clean, fast URL shortener that converts long links into short, shareable URLs in seconds. It supports custom short codes, built-in analytics for tracking link performance, and a fully responsive interface with a smooth, modern user experience.",
      tech: ["Next.js", "Prisma", "PostgreSQL"],
      img: img4,
      href: 'https://github.com/Abdul2Harris/TinyLink',
      websiteLink: 'https://tiny-link-beryl.vercel.app/'

    },
    {
      title: "Personal Portfolio Website",
      para: "Engineered a fully revamped, feature-rich portfolio website that seamlessly showcases my previous experiences, and honors-marking a significant solution in my professional full-stack development journey.",
      tech: ["React", "Express", "Full Stack"],
      img: img1,
      href: 'https://github.com/Abdul2Harris/Abdul-Portfolio',
      websiteLink: 'https://abdul-portfolio-self.vercel.app/'
    },
    {
      title: "The Simon Game",
      para: "Crafted a dynamic and interactive memory game inspired by the classic Simon Says using HTML, CSS, and JavaScript. The game challenges users to replicate an increasingly complex sequence of glowing color buttons, testing their memory and focus.",
      tech: ["HTML", "CSS", "Javascript"],
      img: img2,
      href: 'https://github.com/Abdul2Harris/Simon-Game',
      websiteLink: 'https://abdul2harris.github.io/Simon-Game/'
    },
    {
      title: "Django CRM",
      para: "Developed a robust Customer Relationship Management (CRM) web application using Python Django and MySQL, designed to streamline client data handling and user interactions.",
      tech: ["Python", "Django", "MySQL"],
      img: img3,
      href: 'https://github.com/Abdul2Harris/DjangoCRM',
      websiteLink:  ''
    },
  ];

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center mt-20 scroll-mt-20"
    >
      <div className="container max-w-4xl">
        <h1 className="text-foreground text-2xl md:text-4xl font-bold">
          My <span className="text-primary">Projects</span>
        </h1>

        <p className="my-10 px-10 md:text-lg">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="w-full p-2 space-y-4">
          {projectCardData.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              para={project.para}
              tech={project.tech}
              img={project.img}
              href={project.href}
              websiteLink={project.websiteLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
