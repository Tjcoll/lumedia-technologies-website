import { useState, type ChangeEvent, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Send } from "lucide-react";

const businessEmail = "info@lumediatechnologies.com";
const serviceOptions = ["Livestreaming & Live Production", "Video Production & Editing", "Social Media Management & Strategy", "YouTube Growth & Management", "AI Automation & Digital Solutions", "Creator School / Training", "Other"];

const Contact = () => {
  const location = useLocation();
  const requestedService = new URLSearchParams(location.search).get("service") || "";
  const [formData, setFormData] = useState({ name: "", email: "", organization: "", service: requestedService, timeline: "", message: "" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `Project inquiry: ${formData.service || "Lumedia Technologies"}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Company or organization: ${formData.organization || "Not provided"}`,
      `Service: ${formData.service || "Not selected"}`,
      `Preferred timeline: ${formData.timeline || "Not provided"}`,
      "",
      "Project details:",
      formData.message,
    ].join("\n");
    window.location.href = `mailto:${businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tell us about your project</h1>
          <p className="text-xl text-muted-foreground">Share what you are planning, and we can discuss scope, timing, and the right next step.</p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="gradient-card border-border lg:col-span-2">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label><Input id="name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required /></div>
                  <div><label htmlFor="email" className="block text-sm font-medium mb-2">Business email *</label><Input id="email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} required /></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><label htmlFor="organization" className="block text-sm font-medium mb-2">Company or organization</label><Input id="organization" name="organization" autoComplete="organization" value={formData.organization} onChange={handleChange} /></div>
                  <div><label htmlFor="service" className="block text-sm font-medium mb-2">Service of interest</label><select id="service" name="service" value={formData.service} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"><option value="">Select a service</option>{serviceOptions.map((service) => <option key={service} value={service}>{service}</option>)}</select></div>
                </div>
                <div><label htmlFor="timeline" className="block text-sm font-medium mb-2">Preferred project timeline</label><Input id="timeline" name="timeline" placeholder="e.g. Event date or target month" value={formData.timeline} onChange={handleChange} /></div>
                <div><label htmlFor="message" className="block text-sm font-medium mb-2">Project description *</label><Textarea id="message" name="message" placeholder="What are you planning, and what would you like Lumedia to help with?" value={formData.message} onChange={handleChange} required rows={6} /></div>
                <Button type="submit" size="lg" className="w-full sm:w-auto"><Send className="w-5 h-5 mr-2" />Continue in your email app</Button>
                <p className="text-sm text-muted-foreground">This opens a prefilled email in your device’s email app. Your message is not sent until you press Send there.</p>
              </form>
            </CardContent>
          </Card>
          <aside className="space-y-6">
            <Card className="gradient-card border-border"><CardContent className="p-6">
              <div className="flex items-start gap-4"><div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-primary" /></div><div><h2 className="font-semibold mb-1">Email</h2><a href={`mailto:${businessEmail}`} className="text-muted-foreground hover:text-primary break-all">{businessEmail}</a></div></div>
            </CardContent></Card>
            <Card className="gradient-card border-border"><CardContent className="p-6">
              <h2 className="font-semibold mb-2">Prefer a direct email?</h2><p className="text-sm text-muted-foreground">Send your project brief and any relevant dates or links. We’ll use that information to understand the scope.</p>
            </CardContent></Card>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Contact;
