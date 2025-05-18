
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, Save, Map, Route } from "lucide-react";

// Default race data
const defaultRaceData = {
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

// Default routes data
const defaultRoutesData = {
  fullMarathonRoute: "Starting at the National Stadium, through Main Mall, along Independence Avenue, toward Airport Junction, looping back via Western Bypass, finishing at the National Stadium.",
  halfMarathonRoute: "Starting at the National Stadium, through Main Mall, toward Riverwalk, along the river trail, looping back through CBD, finishing at the National Stadium.",
  tenKRoute: "Starting at the National Stadium, loop through Main Mall, along Queens Road, through Government Enclave, back to National Stadium."
};

export default function AdminDashboard() {
  const { toast } = useToast();
  const [raceData, setRaceData] = useState(() => {
    const saved = localStorage.getItem("marathonRaceData");
    return saved ? JSON.parse(saved) : defaultRaceData;
  });
  
  const [routesData, setRoutesData] = useState(() => {
    const saved = localStorage.getItem("marathonRoutesData");
    return saved ? JSON.parse(saved) : defaultRoutesData;
  });
  
  // Check if admin is logged in
  const isLoggedIn = localStorage.getItem("adminLoggedIn") === "true";
  
  if (!isLoggedIn) {
    return <Navigate to="/admin" />;
  }
  
  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
      variant: "default",
    });
    window.location.href = "/admin";
  };
  
  const handleRaceDataChange = (race: string, field: string, value: string | number) => {
    setRaceData({
      ...raceData,
      [race]: {
        ...raceData[race as keyof typeof raceData],
        [field]: field === "price" ? Number(value) : value
      }
    });
  };
  
  const handleRouteChange = (routeKey: string, value: string) => {
    setRoutesData({
      ...routesData,
      [routeKey]: value
    });
  };
  
  const saveRaceData = () => {
    localStorage.setItem("marathonRaceData", JSON.stringify(raceData));
    toast({
      title: "Race data saved",
      description: "The race information has been updated",
      variant: "default",
    });
  };
  
  const saveRoutesData = () => {
    localStorage.setItem("marathonRoutesData", JSON.stringify(routesData));
    toast({
      title: "Routes saved",
      description: "The marathon routes have been updated",
      variant: "default",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <section className="section">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
            
            <Tabs defaultValue="pricing" className="w-full">
              <TabsList className="grid w-full md:w-auto grid-cols-2 md:flex">
                <TabsTrigger value="pricing">Race Pricing & Details</TabsTrigger>
                <TabsTrigger value="routes">Marathon Routes</TabsTrigger>
              </TabsList>
              
              <TabsContent value="pricing" className="mt-6">
                <div className="glass-card p-6">
                  <h2 className="text-xl font-semibold mb-4">Manage Race Pricing & Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(raceData).map(([raceKey, race]: [string, any]) => (
                      <div key={raceKey} className="border p-4 rounded-lg">
                        <h3 className="font-bold mb-3">{race.name}</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-medium block mb-1">Race Name:</label>
                            <Input 
                              value={race.name}
                              onChange={(e) => handleRaceDataChange(raceKey, "name", e.target.value)}
                            />
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium block mb-1">Distance:</label>
                            <Input 
                              value={race.distance}
                              onChange={(e) => handleRaceDataChange(raceKey, "distance", e.target.value)}
                            />
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium block mb-1">Price (BWP):</label>
                            <Input 
                              type="number"
                              value={race.price}
                              onChange={(e) => handleRaceDataChange(raceKey, "price", e.target.value)}
                            />
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium block mb-1">Description:</label>
                            <Textarea 
                              value={race.description}
                              onChange={(e) => handleRaceDataChange(raceKey, "description", e.target.value)}
                              className="min-h-[100px]"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <Button onClick={saveRaceData} className="flex items-center gap-2">
                      <Save className="h-4 w-4" />
                      Save Race Data
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="routes" className="mt-6">
                <div className="glass-card p-6">
                  <h2 className="text-xl font-semibold mb-4">Manage Marathon Routes</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <Route className="h-5 w-5 mr-2 text-primary" />
                        <label className="font-medium">Full Marathon Route</label>
                      </div>
                      <Textarea 
                        value={routesData.fullMarathonRoute}
                        onChange={(e) => handleRouteChange("fullMarathonRoute", e.target.value)}
                        className="min-h-[120px]"
                      />
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <Route className="h-5 w-5 mr-2 text-primary" />
                        <label className="font-medium">Half Marathon Route</label>
                      </div>
                      <Textarea 
                        value={routesData.halfMarathonRoute}
                        onChange={(e) => handleRouteChange("halfMarathonRoute", e.target.value)}
                        className="min-h-[120px]"
                      />
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <Route className="h-5 w-5 mr-2 text-primary" />
                        <label className="font-medium">10K Run Route</label>
                      </div>
                      <Textarea 
                        value={routesData.tenKRoute}
                        onChange={(e) => handleRouteChange("tenKRoute", e.target.value)}
                        className="min-h-[120px]"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button onClick={saveRoutesData} className="flex items-center gap-2">
                      <Save className="h-4 w-4" />
                      Save Route Data
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
