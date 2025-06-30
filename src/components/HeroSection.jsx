import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center mt-20 md:mt-0"
    >
      <div className="container max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>{" "}
            <span className="opacity-0 text-primary animate-fade-in-delay-1">
              Abdul
            </span>{" "}
            <span className="opacity-0 text-glow animate-fade-in-delay-2">
              Rahuman Harris
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground mx-auto opacity-0 animate-fade-in-delay-3">
            A dedicated and quick-learning full-stack developer, I thrive on
            transforming ideas into impactful web experiences. With a keen eye
            for detail and a knack for problem-solving, I build both functional
            and aesthetically pleasing applications.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground p-2">Scroll</span>
          <ArrowDown className="text-primary" />
        </div>
      </div>
    </section>
  );
};
