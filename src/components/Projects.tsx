import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Downtown Packaging (WordPress)",
      description: "E‑commerce packaging website built on WordPress with WooCommerce, custom product pages, quote forms, and performance optimizations.",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fc8af293e0fc349288f37bf92ad4b1214%2F1c8299a40599445b93498bcf218da831?format=webp&width=800",
      technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "SEO"],
      liveUrl: "https://downtownpackaging.co.uk/",
      featured: true
    },
    {
      title: "Tech‑Hub Systems (MERN)",
      description: "Educational institute site implemented with the MERN stack, featuring course listings, contact/lead capture, and responsive UI.",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fc8af293e0fc349288f37bf92ad4b1214%2Fe29cd70bc869499bbe91b79c57a0d40a?format=webp&width=800",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      liveUrl: "https://techhubsystems.com/index.html",
      featured: true
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in both MERN stack and WordPress development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="glass-card hover:shadow-glow transition-all duration-500 group overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <Badge className="bg-primary">Featured</Badge>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 group/btn hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
