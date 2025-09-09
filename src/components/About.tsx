import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const qualities = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed, SEO, and exceptional user experience."
    },
    {
      icon: Palette,
      title: "Design Focused",
      description: "Creating beautiful, responsive interfaces with attention to detail."
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Working effectively with teams to deliver projects on time and budget."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with extensive experience in both 
              <span className="text-primary font-semibold"> MERN stack technologies</span> and 
              <span className="text-primary font-semibold"> WordPress development</span>. 
              My journey in web development spans several years, during which I've crafted 
              numerous digital solutions for businesses of all sizes.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in creating modern, responsive web applications using React, Node.js, 
              and MongoDB, while also leveraging the power of WordPress for content management 
              solutions. My approach combines technical excellence with creative problem-solving 
              to deliver exceptional user experiences.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {["React", "Node.js", "MongoDB", "Express", "WordPress", "PHP", "JavaScript", "TypeScript"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-primary transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Qualities Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {qualities.map((quality, index) => (
              <Card 
                key={quality.title} 
                className="glass-card hover:shadow-glow transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <quality.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{quality.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {quality.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;