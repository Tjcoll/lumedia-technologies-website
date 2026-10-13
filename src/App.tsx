import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Subscriptions from "./pages/Subscriptions";
import Shop from "./pages/Shop";
import Training from "./pages/Training";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(true);
  const routeKey = `${location.pathname}${location.search}`;

  useEffect(() => {
    setIsNavigating(true);
    const timer = window.setTimeout(() => setIsNavigating(false), 480);
    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => window.clearTimeout(timer);
  }, [routeKey]);

  useEffect(() => {
    document.documentElement.classList.add("motion-enabled");
    let observer: IntersectionObserver | undefined;
    const timer = window.setTimeout(() => {
      const targets = document.querySelectorAll<HTMLElement>(
        "main .page-transition section, main .page-transition header, main .page-transition article, main .page-transition .gradient-card",
      );

      if (!("IntersectionObserver" in window)) {
        targets.forEach((target) => target.classList.add("is-visible"));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
      );

      targets.forEach((target, index) => {
        target.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 65}ms`);
        if (target.getBoundingClientRect().top < window.innerHeight * 0.88) {
          target.classList.add("is-visible");
        } else {
          observer.observe(target);
        }
      });

    }, 30);

    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, [routeKey]);

  return (
    <>
      <div
        className={`navigation-progress${isNavigating ? " is-active" : ""}`}
        role="progressbar"
        aria-label="Loading page"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={isNavigating ? 70 : 100}
      />
      <main key={routeKey} className="flex-grow page-transition">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/training" element={<Training />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <AnimatedRoutes />
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
