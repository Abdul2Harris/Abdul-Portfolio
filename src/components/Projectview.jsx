import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";


export const ProjectCard = ({ title, para, tech, img }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-120px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="rounded-xl p-6 bg-card flex flex-col-reverse md:flex md:flex-row gap-2 card-hover"
    >
      <div className="text-left space-y-2 w-full md:w-8/12">
        <h1 className="text-primary text-xl md:text-2xl font-bold">{title}</h1>
        <p className="border-t text-muted-foreground text-sm md:text-base">{para}</p>

        <div className="flex flex-wrap md:justify-between gap-2 mt-4">
          {tech.map((d) => (
              <div className="flex flex-wrap gap-2 rounded-full border bg-secondary px-4">
                <span className="text-muted-foreground font-medium text-sm">
                  {d}
                </span>
              </div>
          ))}

          <div className="flex gap-4">
            <a className="text-foreground/80 hover:text-primary cursor-pointer">
              <ExternalLink size={20} />
            </a>
            <a className="text-foreground/80 hover:text-primary cursor-pointer">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* picture side */}
      <div className="w-full md:w-5/12 flex items-center">
        <img src={img} alt="image1" />
      </div>
    </motion.div>
  );
};
