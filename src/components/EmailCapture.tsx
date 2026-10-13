import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export const EmailCapture = () => (
  <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6"><Mail className="w-8 h-8 text-primary" /></div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking for a clearer content workflow?</h2>
        <p className="text-lg text-muted-foreground mb-8">Tell us how your team currently plans and produces content. We’ll discuss practical ways to make the process more consistent.</p>
        <Button asChild size="lg"><Link to="/contact">Discuss your workflow</Link></Button>
      </div>
    </div>
  </section>
);
