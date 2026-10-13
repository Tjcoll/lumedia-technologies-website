import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Livestreaming & Live Production",
    description: "Professional production for organizations that need reliable, high-quality live communication.",
    features: ["Multi-camera live production", "Corporate events, conferences, launches, and special events", "Hybrid events and online broadcasts", "Livestream infrastructure and technical consulting"],
  },
  {
    title: "Video Production & Editing",
    description: "Turn ideas, events, expertise, and existing footage into polished content for digital platforms.",
    features: ["Short-form and long-form video", "Editing and post-production", "Motion graphics and visual storytelling", "Content repurposing and packaging"],
  },
  {
    title: "Social Media Management & Strategy",
    description: "Build a purposeful content operation with planning, publishing, and ongoing improvement.",
    features: ["Strategy and content calendars", "Content development and account management", "Repurposing and distribution", "Audience engagement and performance review"],
  },
  {
    title: "YouTube Growth & Management",
    description: "Create a clearer channel direction and repeatable publishing workflow. Results depend on many factors and are not guaranteed.",
    features: ["Channel positioning and content planning", "Titles, thumbnails, descriptions, and packaging guidance", "Upload workflows and content repurposing", "Monetization guidance and channel optimization"],
  },
  {
    title: "AI Automation & Digital Solutions",
    description: "We help organizations automate AI workflows, connect business processes, and build chatbots for customer support and internal use. Scope and integrations are validated before a proposal.",
    features: ["AI workflow automation for repetitive tasks", "Business process and app integration automation", "Custom chatbots for websites, customer support, and internal teams", "Workflow discovery, process mapping, and implementation planning"],
  },
];

const Services = () => (
  <div className="min-h-screen pt-32 pb-20">
    <div className="container mx-auto px-4">
      <header className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Services</h1>
        <p className="text-xl text-muted-foreground">Professional media production and AI automation for businesses and organizations—from live events and video to intelligent workflows, business process automation, and custom chatbots. Each engagement is scoped around your goals, timeline, and requirements.</p>
      </header>
      <div className="space-y-8 max-w-5xl mx-auto">
        {services.map((service) => (
          <Card key={service.title} className="gradient-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl">{service.title}</CardTitle>
              <p className="text-muted-foreground mt-2">{service.description}</p>
            </CardHeader>
            <CardContent>
              <h2 className="font-semibold mb-4 text-primary">Possible scope</h2>
              <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                {service.features.map((feature) => <li key={feature} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>{feature}</span></li>)}
              </ul>
              <Button asChild><Link to={`/contact?service=${encodeURIComponent(service.title)}`}>Discuss this service</Link></Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

export default Services;
