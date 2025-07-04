import img1 from "./images/portfolio.png";
import img2 from "./images/simon.webp";
import img3 from "./images/DCRM.png"

import { ProjectCard } from "./Projectview";
import { href } from "react-router-dom";

export const Projects = () => {
  const projectCardData = [
    {
      title: "Personal Portfolio Website",
      para: "Engineered a fully revamped, feature-rich portfolio website that seamlessly showcases my previous experiences, and honors-marking a significant solution in my professional full-stack development journey.",
      tech: ["React", "Express", "Full Stack"],
      img: img1,
      href: 'https://github.com/Abdul2Harris/Abdul-Portfolio/tree/main'
    },
    {
      title: "The Simon Game",
      para: "Crafted a dynamic and interactive memory game inspired by the classic Simon Says using HTML, CSS, and JavaScript. The game challenges users to replicate an increasingly complex sequence of glowing color buttons, testing their memory and focus.",
      tech: ["HTML", "CSS", "Javascript"],
      img: img2,
      href: 'https://github.com/Abdul2Harris/Simon-Game'
    },
    {
      title: "Django CRM",
      para: "Developed a robust Customer Relationship Management (CRM) web application using Python Django and MySQL, designed to streamline client data handling and user interactions.",
      tech: ["Python", "Django", "MySQL"],
      img: img3,
      href: 'https://github.com/Abdul2Harris/DjangoCRM'
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};
