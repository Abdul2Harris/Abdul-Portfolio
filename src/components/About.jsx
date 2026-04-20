import { LockIcon, Tag, User } from "lucide-react";

export const About = () => {
  const cardData = [
    {
      title: "Full Stack Application Development",
      para: "Specialize in developing production grade full-stack applications with a focus on performance and maintainability.",
      icon: <Tag />,
    },
    {
      title: "AI Automation",
      para: "Specialize in developing AI-powered automation systems, agent-based workflows, and semantic search pipelines.",
      icon: <User />,
    },
    {
      title: "Problem Solving",
      para: "Have a proven track record of solving complex problems and finding innovative solutions to complex problems.",
      icon: <LockIcon />,
    },
  ];
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center mt-20 scroll-mt-20"
    >
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl text-foreground font-bold">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="md:flex items-center gap-2 justify-center pt-10">
          <div className="space-y-6 md:w-1/2">
            <h3 className="text-foreground font-medium text-2xl">
              Full Stack Developer building real-world & AI-powered products
            </h3>

            <p className="text-muted-foreground">
              I build scalable, production-grade web applications using modern
              technologies like React, Node.js, and Python. I’ve worked on
              real-world systems where performance, clean architecture, and
              reliability matter.
            </p>

            <p className="text-muted-foreground">
              Recently, I’ve been focused on AI-driven automation — building a
              job tracking and application system that leverages workflows,
              embeddings, and intelligent pipelines to simplify job searching.
            </p>

            <p className="text-muted-foreground">
              I enjoy turning complex problems into simple, usable products and
              continuously improving my skills by working on systems that have
              practical impact.
            </p>

            <div className="pt-2">
              <a href="contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="space-y-6 md:w-1/2 mt-10 md:mt-0">
            {cardData.map((item) => (
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-3 bg-primary/10 flex items-center">
                    <span className="text-primary">{item.icon}</span>
                  </div>

                  <div className="text-left">
                    <h3 className="text-foreground font-medium text-lg">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.para}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
