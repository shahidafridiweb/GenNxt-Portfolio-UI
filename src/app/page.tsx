import Header from "@/components/layout/Header";
import BackgroundVideo from "@/components/layout/BackgroundVideo";
// Visit tracking removed
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <BackgroundVideo />
      <Header />
      
      <main className="relative w-full min-h-screen flex flex-col overflow-x-hidden">
        <Hero />
        
        <div className="relative z-20 bg-background">
          <div className="min-h-screen bg-background text-foreground">
            <div className="container mx-auto px-4 py-8">
              <About />
              <Experience />
              <Contact />
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
