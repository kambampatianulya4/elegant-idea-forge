import { useState } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Design",
    image: portfolio1,
    description: "Modern shopping experience with seamless checkout"
  },
  {
    id: 2,
    title: "Wellness Mobile App",
    category: "UI/UX Design",
    image: portfolio2,
    description: "Intuitive fitness tracking and wellness guidance"
  },
  {
    id: 3,
    title: "Brand Identity Suite",
    category: "Branding",
    image: portfolio3,
    description: "Complete brand identity for innovative startup"
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    category: "Digital Strategy",
    image: portfolio4,
    description: "Data visualization and business intelligence platform"
  },
  {
    id: 5,
    title: "Restaurant Website",
    category: "Web Design",
    image: portfolio5,
    description: "Elegant online presence for culinary excellence"
  },
  {
    id: 6,
    title: "Fashion Boutique",
    category: "E-Commerce",
    image: portfolio6,
    description: "Luxury shopping experience with stunning visuals"
  },
];

const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of our finest projects, each crafted with precision and passion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-glow transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div 
                className={`absolute inset-0 gradient-accent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6`}
              >
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium mb-2 opacity-90">{project.category}</p>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
