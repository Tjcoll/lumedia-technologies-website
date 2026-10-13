import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Target, Heart } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We're committed to delivering the highest quality media solutions and services."
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Your success is our success. We work alongside you to achieve your communication goals."
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We stay current with the latest tools and techniques to keep you ahead."
  },
  {
    icon: Heart,
    title: "Purpose-Driven",
    description: "We're passionate about helping organizations communicate their mission effectively."
  }
];

const expertise = [
  "Video production and editing",
  "Livestreaming and live production",
  "Motion graphics and visual storytelling",
  "YouTube channel management",
  "Social media strategy",
  "Media consulting and content production"
];

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Lumedia Technologies</h1>
          <p className="text-xl text-muted-foreground">
            A media consultancy and digital solutions company helping organizations communicate effectively and improve their content workflows.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Lumedia Technologies Ltd was founded by <strong className="text-foreground">Tejiri Collins Onwawoma</strong>, 
                  a media professional working across video production, livestreaming, media technology, and content strategy.
                </p>
                <p>
                  His work spans video production, editing, motion graphics, livestreaming, YouTube channel support, and social media strategy.
                </p>
                <p>
                  Lumedia brings creative execution, technical understanding, and strategic thinking together to help organizations communicate effectively and build more useful content workflows.
                </p>
                <p>
                  The company works with organizations on scoped production projects, ongoing content support, consulting, and training opportunities.
                </p>
              </div>
            </div>
            <Card className="gradient-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Tejiri Collins Onwawoma</h3>
                <p className="text-muted-foreground mb-4">Founder & Media Consultant</p>
                <p className="text-sm text-muted-foreground">Working across video production, livestreaming, media technology, and content strategy.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-20">
          <Card className="gradient-card border-border max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To help organizations communicate effectively through professional media, strategic content, and practical digital workflows.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="gradient-card border-border text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Expertise */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Areas of Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {expertise.map((item) => (
                <Card key={item} className="gradient-card border-border">
                  <CardContent className="p-6 flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span className="font-medium">{item}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="mb-20">
          <Card className="gradient-card border-border max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-center mb-8">Who We Serve</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div>
                  <h3 className="font-semibold text-xl mb-2">Churches & Ministries</h3>
                  <p className="text-muted-foreground">
                    Helping churches communicate their message through professional livestreaming, 
                    content, and media systems.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">NGOs & Nonprofits</h3>
                  <p className="text-muted-foreground">
                    Supporting purpose-driven organizations with digital strategy, content creation, 
                    and online presence.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Businesses</h3>
                  <p className="text-muted-foreground">
                    Helping SMEs build professional brands through media production and social 
                    media management.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Content Creators</h3>
                  <p className="text-muted-foreground">
                    Equipping creators, coaches, and educators with the skills and tools to 
                    produce quality content.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need a one-time project, ongoing support, or training for your team, 
            we're here to help you communicate with excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
