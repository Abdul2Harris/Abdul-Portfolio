import { useState } from "react";
import { Progress } from "antd";
import { cn } from "../lib/utils";

export const Skills = () => {
  const heading = [
    { id: "all", name: "All" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Tools" },
  ];

  const skills = [
    // Frontend
    { name: "HTML/CSS", level: 90, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 80, category: "frontend" },
    { name: "Tailwind CSS", level: 80, category: "frontend" },
    { name: "TypeScript", level: 75, category: "frontend" },
    { name: "Next.js", level: 75, category: "frontend" },

    // Backend
    { name: "Node.js", level: 80, category: "backend" },
    { name: "python", level: 80, category: "backend" },
    { name: "DSA", level: 75, category: "backend" },
    { name: "Express", level: 75, category: "backend" },
    { name: "PostgreSQL", level: 65, category: "backend" },
    { name: "MongoDB", level: 60, category: "backend" },

    // Tools
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "Docker", level: 70, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filterSkills = skills.filter(
    (skills) => activeCategory === "all" || activeCategory === skills.category
  );

  return (
    <section id="skills" className="relative flex flex-col items-center mt-20 md:mt-40 scroll-mt-20">
      <div className="container max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-4xl text-foreground font-bold text-center">
          My <span className="text-primary">Skills</span>
        </h1>

        <div className="flex flex-wrap gap-4 md:gap-8 justify-center my-10">
          {heading.map((item, key) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(item.id);
              }}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 cursor-pointer capitalize",
                activeCategory === item.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
          {filterSkills.map((item) => (
            <div className="gradient-border p-6 card-hover">
              <div className="p-3 bg-background/10 rounded-md">
                <h3 className="text-xl font-semibold text-start">
                  {item.name}
                </h3>
                <span>
                  <Progress
                    strokeColor="var(--progress-stroke)"
                    trailColor="var(--progress-trail)"
                    percent={item.level}
                    format={(percent) => (
                      <span style={{ color: "hsl(var(--foreground))" }}>
                        {percent}%
                      </span>
                    )}
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
