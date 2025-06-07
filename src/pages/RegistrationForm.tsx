import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, User } from "lucide-react";
import Footer from "@/components/Footer";
import ThemeToggle from "../../src/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { Calendar, Trophy, Map } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "../components/LanguageSelector";

export default function RegistrationForm() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.registration, path: "/registration" },
    // { name: t.nav.schedule, path: "/schedule" },
    { name: t.nav.gallery, path: "/gallery" },
    { name: t.nav.contact, path: "/contact" }
  ];
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    raceType: "halfMarathon",
    shirtSize: "",
    emergencyContact: "",
    emergencyPhone: ""
  });
  
  const [isLoading, setIsLoading] = useState(false);
  
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  const scriptURL = "https://script.google.com/macros/s/AKfycbziR8wokoyUSvSu6rEt2So7ebpg0OLlvtUwIA_jMUEBy_mXuGb1Uci6m15Y0x3A_xZrpw/exec";

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("Failed to submit data");

    toast({
      title: "Registration successful!",
      description: "Thank you for registering for the marathon. We'll send you a confirmation email shortly.",
    });

    setIsLoading(false);
    navigate("/registration/success");

  } catch (error) {
    console.error("Submission error:", error);
    toast({
      title: "Submission failed",
      description: "There was a problem sending your data. Please try again.",
      variant: "destructive"
    });
    setIsLoading(false);
  }
};

 useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const selectedRace = raceData[formData.raceType as keyof typeof raceData];
  
  return (
    <div className="min-h-screen flex flex-col">
        <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", true ? "bg-white/80 dark:bg-card/80 backdrop-blur-lg py-3 shadow-md " : "bg-transparent py-5 text-white")}>
      <nav className="container flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* <img  src="https://fearlessgroup.co.bw/wp-content/uploads/2024/10/fearless-logo.png" className="font-bold text-xl"/> */}
          {/* <LanguageSelector /> */}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <li key={link.name} className="relative">
              <Link to={link.path} className="font-medium transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-2">
          {/* <ThemeToggle /> */}
          {/* <Button asChild variant="outline" size="icon" className="rounded-full">
            <Link to="/admin">
              <User className="h-4 w-4" />
            </Link>
          </Button> */}
          <Button asChild className="btn-primary"  style={{
                    background: "#144674",
                  }}>
            <Link to="/registration/form">{t.nav.register}</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-full">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn("fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden transition-opacity duration-300", mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none")}>
        <div className={cn("fixed inset-y-0 right-0 w-3/4 max-w-sm bg-card shadow-xl p-6 transition-transform duration-300 ease-in-out", mobileMenuOpen ? "translate-x-0" : "translate-x-full")}>
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex justify-between mb-8">
                <LanguageSelector />
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="rounded-full">
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <ul className="space-y-6">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-lg font-medium transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/admin" className="text-lg font-medium transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
            
            <Button asChild className="w-full btn-primary mt-6">
              <Link to="/registration/form" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.register}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
      
      <main className="flex-1 pt-20">
        <section className="section">
          <div className="container max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">Register for the Marathon</h1>
              <p className="text-muted-foreground mt-2">
                Fill out the form below to secure your spot in the race
              </p>
            </div>
            
            <div className="glass-card p-6 md:p-8 rounded-xl mb-8">
              <h2 className="text-xl font-semibold flex items-center mb-4">
                <Trophy className="h-5 w-5 mr-2 text-primary" />
                Selected Race: {selectedRace.name}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-primary/10 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-1">Distance</p>
                  <p className="font-semibold">{selectedRace.distance}</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-1">Price</p>
                  <p className="font-semibold">BWP {selectedRace.price}</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-1">Race Kit</p>
                  <p className="font-semibold">Included</p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                      id="dob"
                      name="dob"
                      type="date"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select
                      value={formData.gender}
                      onValueChange={(value) => handleSelectChange("gender", value)}
                      required
                    >
                      <SelectTrigger id="gender">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="raceType">Race Type</Label>
                    <Select
                      value={formData.raceType}
                      onValueChange={(value) => handleSelectChange("raceType", value)}
                      required
                    >
                      <SelectTrigger id="raceType">
                        <SelectValue placeholder="Select race type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fullMarathon">Full Marathon (42.195 km) - BWP {raceData.fullMarathon.price}</SelectItem>
                        <SelectItem value="halfMarathon">Half Marathon (21.1 km) - BWP {raceData.halfMarathon.price}</SelectItem>
                        <SelectItem value="tenK">10K Run - BWP {raceData.tenK.price}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="shirtSize">T-Shirt Size</Label>
                    <Select
                      value={formData.shirtSize}
                      onValueChange={(value) => handleSelectChange("shirtSize", value)}
                      required
                    >
                      <SelectTrigger id="shirtSize">
                        <SelectValue placeholder="Select t-shirt size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="xs">XS</SelectItem>
                        <SelectItem value="s">S</SelectItem>
                        <SelectItem value="m">M</SelectItem>
                        <SelectItem value="l">L</SelectItem>
                        <SelectItem value="xl">XL</SelectItem>
                        <SelectItem value="xxl">XXL</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                    <Input
                      id="emergencyContact"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      placeholder="Emergency contact name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                    <Input
                      id="emergencyPhone"
                      name="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={handleChange}
                      placeholder="Emergency contact phone"
                      required
                    />
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button type="submit" className="w-full bg-[#144675] hover:bg-[#ae1ea3]" disabled={isLoading}>
                    {isLoading ? "Processing..." : "Complete Registration"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
