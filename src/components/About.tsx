import { Sparkles, Target, Users } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Creativity",
    description: "We believe in pushing boundaries and exploring innovative solutions that make brands stand out."
  },
  {
    icon: Target,
    title: "Precision",
    description: "Every pixel matters. We craft designs with meticulous attention to detail and purpose."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Your vision combined with our expertise creates extraordinary results through partnership."
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a creative design agency dedicated to transforming ideas into stunning digital experiences. 
              With years of expertise in branding, web design, and digital strategy, we help businesses 
              establish powerful online presences that captivate and convert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-2xl bg-card shadow-elegant hover:shadow-glow transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-accent mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
