
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function RegistrationSuccess() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <section className="section">
          <div className="container max-w-4xl">
            <div className="glass-card p-8 rounded-xl text-center">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-primary/20 p-4">
                  <CheckCircle className="h-16 w-16 text-primary" />
                </div>
              </div>
              
              <h1 className="text-3xl font-bold mb-4">Registration Successful!</h1>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                Thank you for registering for our marathon. We've sent a confirmation email with all the details. 
                We look forward to seeing you at the starting line!
              </p>
              
              <div className="max-w-md mx-auto glass-card p-6 mb-8">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <h2 className="text-xl font-semibold">Next Steps</h2>
                </div>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs mr-2 mt-0.5">1</span>
                    <span>Check your email for confirmation details</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs mr-2 mt-0.5">2</span>
                    <span>Complete your payment using the instructions in the email</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs mr-2 mt-0.5">3</span>
                    <span>Review the race schedule and prepare for race day</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild variant="outline" className="min-w-[200px]">
                  <Link to="/schedule">
                    View Race Schedule <Calendar className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild className="min-w-[200px] btn-primary">
                  <Link to="/">
                    Return to Home <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
