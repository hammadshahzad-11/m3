import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hammadshahzaddev@gmail.com",
      href: "mailto:hammadshahzaddev@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: ["+92 0312 6298747", "+92 0304 6225681"],
      href: ["tel:+923126298747", "tel:+923046225681"]
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pakistan",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-card/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className="glass-card hover:shadow-glow transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      {(() => {
                        const values = Array.isArray(info.value) ? info.value : [info.value];
                        const hrefs = Array.isArray(info.href) ? info.href : [info.href as string];
                        return (
                          <div className="space-y-1">
                            {values.map((val, i) => (
                              <a
                                key={i}
                                href={hrefs[i] ?? "#"}
                                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                              >
                                {val}
                              </a>
                            ))}
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="glass-card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Available for</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Full-stack web development</p>
                  <p>• WordPress solutions</p>
                  <p>• Technical consultations</p>
                  <p>• Code reviews & optimization</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-primary/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your requirements and create something amazing together.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              <a href="https://wa.me/923126298747" target="_blank" rel="noopener noreferrer">
                Schedule a Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
