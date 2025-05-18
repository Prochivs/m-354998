
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Registration() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Get race data from localStorage or use defaults
  const raceTiers = JSON.parse(localStorage.getItem("marathonRaceData") || "null") || [
    {
      name: "Full Marathon",
      price: 250,
      features: ["42.195 km race", "Official timing chip", "Race bib with name", "Finisher medal", "Finisher t-shirt", "Refreshments", "Digital certificate"]
    },
    {
      name: "Half Marathon",
      price: 150,
      features: ["21.1 km race", "Official timing chip", "Race bib with name", "Finisher medal", "Finisher t-shirt", "Refreshments", "Digital certificate"]
    },
    {
      name: "10K Run",
      price: 100,
      features: ["10 km race", "Official timing chip", "Race bib with number", "Finisher medal", "Event t-shirt", "Refreshments", "Digital certificate"]
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background">
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                {t.registration.subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                {t.registration.title}
              </h1>
              <p className="text-muted-foreground">
                {t.registration.description}
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-primary/20 blur-3xl" />
          </div>
        </section>
        
        {/* Registration Tiers */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.values(raceTiers).map((tier, index) => (
                <div 
                  key={tier.name} 
                  className="glass-card p-8 rounded-xl animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">BWP {tier.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex">
                        <Check className="h-5 w-5 text-primary mr-3 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full btn-primary">
                    <Link to="/registration/form">
                      {t.registration.registerNow}
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Registration Steps */}
        <section className="section bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                {t.registration.process.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                {t.registration.process.title}
              </h2>
              <p className="text-muted-foreground">
                {t.registration.process.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="mb-4 mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t.registration.process.steps.step1.title}</h3>
                <p className="text-muted-foreground">{t.registration.process.steps.step1.description}</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="mb-4 mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t.registration.process.steps.step2.title}</h3>
                <p className="text-muted-foreground">{t.registration.process.steps.step2.description}</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="mb-4 mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t.registration.process.steps.step3.title}</h3>
                <p className="text-muted-foreground">{t.registration.process.steps.step3.description}</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                {t.registration.faq.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                {t.registration.faq.title}
              </h2>
              <p className="text-muted-foreground">
                {t.registration.faq.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(t.registration.faq.questions).map(([key, question]: [string, any], index) => (
                <div key={key} className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">{question.question}</h3>
                  <p className="text-muted-foreground">{question.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="relative py-24 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t.registration.cta.title}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t.registration.cta.description}
              </p>
              <Button asChild size="lg" className="btn-primary">
                <Link to="/registration/form">{t.registration.cta.registerNow}</Link>
              </Button>
            </div>
          </div>
          
          {/* Decorative waves */}
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
            <svg 
              className="absolute bottom-0 w-full h-24 fill-background"
              preserveAspectRatio="none"
              viewBox="0 0 1440 74"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
                className="animate-wave opacity-50"
              />
              <path 
                d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
                className="animate-wave opacity-100 [animation-delay:-4s]"
              />
            </svg>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
