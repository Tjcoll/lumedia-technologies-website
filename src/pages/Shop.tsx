import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Shop = () => (
  <div className="min-h-[60vh] pt-32 pb-20"><div className="container mx-auto px-4 text-center max-w-2xl">
    <p className="text-primary font-semibold mb-3">Creator School</p>
    <h1 className="text-4xl md:text-5xl font-bold mb-6">Learning resources are in development</h1>
    <p className="text-lg text-muted-foreground mb-8">There are no courses or digital products available for purchase here yet. Visit Creator School for the learning focus, or contact Lumedia to ask about a workshop.</p>
    <div className="flex flex-col sm:flex-row justify-center gap-4"><Button asChild><Link to="/training">Explore Creator School</Link></Button><Button variant="outline" asChild><Link to="/contact?service=Creator%20School%20%2F%20Training">Ask about a workshop</Link></Button></div>
  </div></div>
);

export default Shop;
