import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Video, Workflow, Youtube } from "lucide-react";

const topics = [
  { icon: Video, title: "Livestreaming", text: "Practical production skills and live media workflows." },
  { icon: BookOpen, title: "Video editing & content", text: "Skills for creating and packaging useful digital content." },
  { icon: Youtube, title: "YouTube strategy", text: "Channel planning, publishing, and creator workflows." },
  { icon: Workflow, title: "Media technology & productivity", text: "Tools and processes that help teams work more consistently." },
];

const Training = () => (
  <div className="min-h-screen pt-32 pb-20">
    <div className="container mx-auto px-4">
      <header className="text-center mb-14 max-w-3xl mx-auto">
        <p className="text-primary font-semibold mb-3">A learning initiative from Lumedia Technologies</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Creator School</h1>
        <p className="text-xl text-muted-foreground">Practical learning for creators and media teams, with a focus on production, content, and the workflows behind consistent publishing.</p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {topics.map(({ icon: Icon, title, text }) => <Card key={title} className="gradient-card border-border"><CardContent className="p-7"><div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-primary" /></div><h2 className="text-xl font-bold mb-2">{title}</h2><p className="text-muted-foreground">{text}</p></CardContent></Card>)}
      </section>
      <p className="text-center text-muted-foreground mt-10">Courses, workshop dates, enrollment, and pricing have not been announced.</p>
      <div className="text-center mt-8"><Button asChild><Link to="/contact?service=Creator%20School%20%2F%20Training">Ask about Creator School</Link></Button></div>
    </div>
  </div>
);

export default Training;
