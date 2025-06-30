import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { X, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Define the scroll event handler
    const handleScroll = () => {
      // Only update scroll state when the mobile menu is NOT open
      if (!isOpen) {
        // Get current scroll position from top (either value will work across browsers)
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        // Set isScrolled to true if user scrolled more than 10px
        setIsScrolled(scrollTop > 10);
      }
    };

    // Attach the scroll event listener to the window
    // 'passive: true' tells the browser that the scroll handler won't call preventDefault, improving performance
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the scroll event listener when component unmounts or isOpen changes
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]); // Run this effect again whenever 'isOpen' changes

  // console.log(isScrolled)

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 ease-in-out",
        "transition-shadow transition-border",
        isScrolled
          ? "py-4 bg-background/80 backdrop-blur-md shadow-md border-b"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between md:px-20">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Abdul </span> Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobiele Nav */}
        <div className="flex items-center md:hidden gap-4">
          {!isOpen && (
            <div className="relative z-[60]">
              <ThemeToggle />
            </div>
          )}
          <button className="p-2 px-8 z-50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
