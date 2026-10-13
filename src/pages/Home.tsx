import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EmailCapture } from "@/components/EmailCapture";
import { Video, Sparkles, Users, Youtube, Workflow, GraduationCap, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-media-ai-v3.png";

const services = [
  {
    icon: Video,
    title: "Livestreaming & Live Production",
    description: "Professional multi-camera production for conferences, launches, hybrid events, and other important moments."
  },
  {
    icon: Sparkles,
    title: "Video Production & Editing",
    description: "Turn your ideas, events, and existing footage into polished content for the platforms you use."
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Plan, create, publish, and improve content with a strategy built around your organization."
  },
  {
    icon: Youtube,
    title: "YouTube Growth & Management",
    description: "Build a clearer channel strategy and repeatable publishing workflow, without promises of specific results."
  },
  {
    icon: Workflow,
    title: "AI Automation & Digital Solutions",
    description: "Automate AI-powered workflows, connect business processes, and build chatbots that support your customers and team."
  },
  {
    icon: GraduationCap,
    title: "Creator School",
    description: "Empower your team with hands-on training and expert consulting services."
  }
];

const benefits = [
  "A single partner for creative execution, production, and digital planning",
  "Project-based production and ongoing support options",
  "Clear scoping before work begins",
  "Practical systems built around your goals and team"
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Professional media production studio" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background/95"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Media production meets intelligent automation.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              From live production and video to AI-powered workflows, business automation, and custom chatbots, we help your team work smarter and communicate better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Discuss a Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional media production and AI automation that help organizations communicate and operate more effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="gradient-card border-border hover:border-primary/50 transition-all group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Lumedia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <EmailCapture />
    </div>
  );
};

export default Home;
