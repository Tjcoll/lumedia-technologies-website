import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const models = [
  ["Production projects", "One-off event, livestream, or video engagements scoped to the brief."],
  ["Ongoing content support", "Recurring social media, video, or YouTube support with scope agreed before work begins."],
  ["Consulting", "Focused advice on media strategy, production systems, or content workflows."],
  ["Automation discovery", "An initial review to identify practical workflow opportunities and validate technical fit."],
  ["Training & workshops", "Learning engagements for teams or creators, arranged around confirmed needs and availability."],
];

const Subscriptions = () => (
  <div className="min-h-screen pt-32 pb-20"><div className="container mx-auto px-4">
    <header className="text-center max-w-3xl mx-auto mb-12"><h1 className="text-4xl md:text-5xl font-bold mb-6">Ways to work together</h1><p className="text-xl text-muted-foreground">Engagements are scoped to your goals, timeline, and production requirements. Lumedia does not publish fixed packages or prices at this time.</p></header>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">{models.map(([title, description]) => <Card key={title} className="gradient-card border-border"><CardContent className="p-6"><h2 className="text-xl font-bold mb-3">{title}</h2><p className="text-muted-foreground">{description}</p></CardContent></Card>)}</div>
    <div className="text-center mt-12"><Button asChild><Link to="/contact">Request a project quote</Link></Button></div>
  </div></div>
);

export default Subscriptions;
