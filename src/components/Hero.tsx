import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import StarsBackground from "./StarsBackground";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    "MERN Stack Developer",
    "WordPress Developer", 
    "Full Stack Engineer"
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentTitle.length) {
        setDisplayedText(currentTitle.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background banner image from provided attachment */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2Fc8af293e0fc349288f37bf92ad4b1214%2F1c8299a40599445b93498bcf218da831?format=webp&width=1600"
        alt="Downtown Packaging banner"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />

      {/* Animated Background */}
      <StarsBackground count={160} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text hue-animated">
              M.Hammad
            </h1>
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl font-medium text-muted-foreground">
                {displayedText}
                <span className="animate-pulse text-primary ml-1">|</span>
              </h2>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Crafting exceptional web experiences with modern technologies.
            Specialized in full-stack development using MERN stack and WordPress solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button
              size="lg"
              className="bg-gradient-primary hue-animated hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6 text-lg"
            >
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#contact", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/20 hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300 group"
                aria-label={label}
              >
                <Icon className="w-6 h-6 group-hover:animate-pulse" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="flex flex-col items-center animate-bounce hover:animate-none group cursor-pointer"
        >
          <div className="p-2 rounded-full border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 group-hover:scale-110 hue-animated">
            <ArrowDown className="w-5 h-5 text-primary animate-pulse group-hover:animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
