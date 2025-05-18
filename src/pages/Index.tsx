
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Timer, Medal, Map, Users, Calendar, Clock, Award, Heart, LifeBuoy } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Index() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Get race data from localStorage or use defaults
  const raceData = JSON.parse(localStorage.getItem("marathonRaceData") || "null") || {
    fullMarathon: {
      name: "Full Marathon",
      distance: "42.195 km",
      price: 250,
      description: "Experience the full marathon challenge"
    },
    halfMarathon: {
      name: "Half Marathon",
      distance: "21.1 km",
      price: 150,
      description: "Perfect for intermediate runners"
    },
    tenK: {
      name: "10K Run",
      distance: "10 km",
      price: 100,
      description: "Great for beginners and casual runners"
    }
  };
  
  // Sample race categories
  const raceCategories = [
    {
      ...raceData.fullMarathon,
      image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=800&h=600&fit=crop",
    },
    {
      ...raceData.halfMarathon,
      image: "https://images.unsplash.com/photo-1539966903171-89770f33f468?w=800&h=600&fit=crop",
    },
    {
      ...raceData.tenK,
      image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&h=600&fit=crop",
    }
  ];
  
  // Feature items
  const features = [
    {
      icon: <Medal className="h-8 w-8 text-primary" />,
      title: t.home.features.medals.title,
      description: t.home.features.medals.description
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t.home.features.community.title,
      description: t.home.features.community.description
    },
    {
      icon: <Map className="h-8 w-8 text-primary" />,
      title: t.home.features.route.title,
      description: t.home.features.route.description
    },
    {
      icon: <Timer className="h-8 w-8 text-primary" />,
      title: t.home.features.timing.title,
      description: t.home.features.timing.description
    },
    {
      icon: <LifeBuoy className="h-8 w-8 text-primary" />,
      title: t.home.features.support.title,
      description: t.home.features.support.description
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: t.home.features.health.title,
      description: t.home.features.health.description
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Welcome Section */}
        <section id="welcome" className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in [animation-delay:100ms]">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  {t.home.welcome.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  {t.home.welcome.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t.home.welcome.description1}
                </p>
                <p className="text-muted-foreground mb-8">
                  {t.home.welcome.description2}
                </p>
                <Button asChild className="btn-primary">
                  <Link to="/about">
                    {t.home.welcome.learnMore} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="relative animate-fade-in [animation-delay:300ms]">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&h=600&fit=crop"
                    alt="Marathon runners" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-2/3 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&h=300&fit=crop"
                    alt="Running shoes" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-1/2 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1598136490941-30d885318abd?w=400&h=300&fit=crop"
                    alt="Finish line" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Event Details Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-card p-6 rounded-xl text-center animate-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="mb-4 p-3 rounded-full bg-primary/10 inline-flex">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t.home.eventDetails.date.title}</h3>
                <p className="text-muted-foreground">{t.home.eventDetails.date.description}</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="mb-4 p-3 rounded-full bg-primary/10 inline-flex">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t.home.eventDetails.time.title}</h3>
                <p className="text-muted-foreground">{t.home.eventDetails.time.description}</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="mb-4 p-3 rounded-full bg-primary/10 inline-flex">
                  <Map className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t.home.eventDetails.location.title}</h3>
                <p className="text-muted-foreground">{t.home.eventDetails.location.description}</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
                <div className="mb-4 p-3 rounded-full bg-primary/10 inline-flex">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t.home.eventDetails.prizes.title}</h3>
                <p className="text-muted-foreground">{t.home.eventDetails.prizes.description}</p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-primary/20 blur-3xl" />
          </div>
        </section>
        
        {/* Race Categories */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                {t.home.raceCategories.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                {t.home.raceCategories.title}
              </h2>
              <p className="text-muted-foreground">
                {t.home.raceCategories.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {raceCategories.map((category, index) => (
                <div key={category.name} className="glass-card overflow-hidden rounded-xl animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={category.image}
                      alt={category.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                      <span className="text-primary font-bold">BWP {category.price}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{category.distance}</p>
                    <Button asChild className="w-full btn-primary">
                      <Link to="/registration/form">
                        {t.home.raceCategories.register}
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="section bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                {t.home.features.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                {t.home.features.title}
              </h2>
              <p className="text-muted-foreground">
                {t.home.features.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-xl animate-fade-in flex flex-col items-center text-center"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="mb-4 p-3 rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Countdown Section */}
        <section className="section bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                {t.home.countdown.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                {t.home.countdown.title}
              </h2>
              <p className="text-muted-foreground">
                {t.home.countdown.description}
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="glass-card p-6 rounded-xl text-center min-w-[120px]">
                  <div className="text-4xl font-bold text-primary mb-2">42</div>
                  <div className="text-sm uppercase tracking-wider">{t.home.countdown.days}</div>
                </div>
                <div className="glass-card p-6 rounded-xl text-center min-w-[120px]">
                  <div className="text-4xl font-bold text-primary mb-2">12</div>
                  <div className="text-sm uppercase tracking-wider">{t.home.countdown.hours}</div>
                </div>
                <div className="glass-card p-6 rounded-xl text-center min-w-[120px]">
                  <div className="text-4xl font-bold text-primary mb-2">35</div>
                  <div className="text-sm uppercase tracking-wider">{t.home.countdown.minutes}</div>
                </div>
                <div className="glass-card p-6 rounded-xl text-center min-w-[120px]">
                  <div className="text-4xl font-bold text-primary mb-2">22</div>
                  <div className="text-sm uppercase tracking-wider">{t.home.countdown.seconds}</div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/registration/form">{t.home.countdown.register}</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="relative py-24 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t.home.cta.title}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t.home.cta.description}
              </p>
              <Button asChild size="lg" className="btn-primary">
                <Link to="/registration/form">{t.home.cta.registerNow}</Link>
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
