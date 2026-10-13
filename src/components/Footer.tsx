import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import lumediaLogo from "@/assets/lumedia-logo.jpg";

const businessEmail = "info@lumediatechnologies.com";

export const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <Link to="/" className="flex items-center gap-3 mb-4">
            <img src={lumediaLogo} alt="Lumedia Technologies logo" className="h-10 w-10 rounded-lg object-cover" />
            <span className="font-bold text-lg">Lumedia Technologies</span>
          </Link>
          <p className="text-sm text-muted-foreground">Media production, content strategy, and practical digital solutions for organizations.</p>
        </div>
        <div><h2 className="font-semibold mb-4">Explore</h2><ul className="space-y-2 text-sm"><li><Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link></li><li><Link to="/about" className="text-muted-foreground hover:text-primary">About Lumedia</Link></li><li><Link to="/training" className="text-muted-foreground hover:text-primary">Creator School</Link></li></ul></div>
        <div><h2 className="font-semibold mb-4">Start a conversation</h2><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">Project inquiry</Link></div>
        <div><h2 className="font-semibold mb-4">Contact</h2><a href={`mailto:${businessEmail}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><Mail size={16} /><span>{businessEmail}</span></a></div>
      </div>
      <div className="text-center text-sm text-muted-foreground pt-6 border-t border-border"><p>&copy; {new Date().getFullYear()} Lumedia Technologies. All rights reserved.</p></div>
    </div>
  </footer>
);
