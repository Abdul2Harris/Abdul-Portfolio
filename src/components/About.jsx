import { LockIcon, Tag, User } from "lucide-react";

export const About = () => {
  const cardData = [
    {
      title: "Web Development",
      para: "Creating responsive websites and web applications with modern frameworks.",
      icon: <Tag />,
    },
    {
      title: "Competitive Programming",
      para: "I specialize in solving complex algorithmic problems, Solved more than 300 problems on Geeksforgeeks.",
      icon: <User />,
    },
    {
      title: "Software Development",
      para: "Building robust and scalable applications from concept to deployment, focusing on efficient and maintainable code.",
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
              {" "}
              Passionate Full Stack Developer
            </h3>
            <p className="text-muted-foreground">
              I specialize in creating responsive, accessible, and performant
              web applications using modern technologies such as Node.js,
              Django, Python, JavaScript, and React.js.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
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
