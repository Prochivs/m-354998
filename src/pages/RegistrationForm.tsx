
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { Calendar, Trophy, Map } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function RegistrationForm() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Registration successful!",
        description: "Thank you for registering for the marathon. We'll send you a confirmation email shortly.",
        variant: "default",
      });
      setIsLoading(false);
      navigate("/registration/success");
    }, 1500);
  };
  
  const selectedRace = raceData[formData.raceType as keyof typeof raceData];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
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
                  <Button type="submit" className="w-full btn-primary" disabled={isLoading}>
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
