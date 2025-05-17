import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Menu from "@/pages/menu";
import Gallery from "@/pages/gallery";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  useEffect(() => {
    // Add Font Awesome
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/9b1ecd9155.js";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    // Add Google Fonts
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>La Petite Pastèque - Restaurant Français Traditionnel à Lyon</title>
        <meta name="description" content="La Petite Pastèque, restaurant de cuisine française traditionnelle à Lyon. Menus dégustation régionaux, plats faits maison et desserts artisanaux." />
      </Helmet>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/menu" component={Menu} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
