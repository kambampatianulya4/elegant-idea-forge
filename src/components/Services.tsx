import { Palette, Smartphone, TrendingUp, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Palette,
    title: "Branding",
    description: "Complete brand identity development including logo design, color palettes, typography, and brand guidelines.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Materials"]
  },
  {
    icon: Smartphone,
    title: "UI/UX Design",
    description: "User-centered design that combines beautiful aesthetics with intuitive functionality for web and mobile.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, responsive websites built with cutting-edge technologies for optimal performance and user experience.",
    features: ["Responsive Design", "Performance Optimization", "CMS Integration", "E-Commerce Solutions"]
  },
  {
    icon: TrendingUp,
    title: "Digital Strategy",
    description: "Data-driven strategies to enhance your digital presence and achieve measurable business growth.",
    features: ["Market Analysis", "Content Strategy", "SEO Optimization", "Analytics & Reporting"]
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design solutions tailored to elevate your brand and drive results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-glow transition-smooth animate-scale-in border-2 hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
