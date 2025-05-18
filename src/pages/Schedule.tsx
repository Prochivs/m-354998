
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Schedule() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background">
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                {t.schedule.subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                {t.schedule.title}
              </h1>
              <p className="text-muted-foreground">
                {t.schedule.description}
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-primary/20 blur-3xl" />
          </div>
        </section>
        
        {/* Event Timeline */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {t.schedule.timeline.title}
              </h2>
              <p className="text-muted-foreground">
                {t.schedule.timeline.description}
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:translate-x-[-0.5px] z-0"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {t.schedule.timeline.events.map((event: any, index: number) => (
                  <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:items-start gap-8`}>
                    {/* Date Circle */}
                    <div className="absolute left-0 md:left-1/2 transform translate-x-[-15px] md:translate-x-[-15px] z-10 flex items-center justify-center w-[30px] h-[30px] rounded-full bg-primary text-white">
                      <span className="text-xs">{index + 1}</span>
                    </div>
                    
                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                      <div className="glass-card p-6 rounded-xl">
                        <div className="flex items-center mb-3">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span className="ml-2 font-semibold">{event.date}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <p className="text-muted-foreground mb-4">{event.description}</p>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="ml-2 text-sm text-muted-foreground">{event.time}</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="ml-2 text-sm text-muted-foreground">{event.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Empty Space for opposite side */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Route Map */}
        <section className="section bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {t.schedule.routeMap.title}
              </h2>
              <p className="text-muted-foreground">
                {t.schedule.routeMap.description}
              </p>
            </div>
            
            <div className="glass-card p-4 rounded-xl overflow-hidden">
              <div className="aspect-[16/9] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&h=675&fit=crop"
                  alt="Marathon route map" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">{t.schedule.routeMap.fullMarathon.title}</h3>
                <p className="text-muted-foreground mb-4">{t.schedule.routeMap.fullMarathon.description}</p>
                <div className="flex items-center justify-between border-t border-border pt-3">
                  <span className="font-medium">{t.schedule.routeMap.distance}</span>
                  <span>42.195 km</span>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">{t.schedule.routeMap.halfMarathon.title}</h3>
                <p className="text-muted-foreground mb-4">{t.schedule.routeMap.halfMarathon.description}</p>
                <div className="flex items-center justify-between border-t border-border pt-3">
                  <span className="font-medium">{t.schedule.routeMap.distance}</span>
                  <span>21.1 km</span>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">{t.schedule.routeMap.tenK.title}</h3>
                <p className="text-muted-foreground mb-4">{t.schedule.routeMap.tenK.description}</p>
                <div className="flex items-center justify-between border-t border-border pt-3">
                  <span className="font-medium">{t.schedule.routeMap.distance}</span>
                  <span>10 km</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Aid Stations */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {t.schedule.aidStations.title}
              </h2>
              <p className="text-muted-foreground">
                {t.schedule.aidStations.description}
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="px-4 py-3 text-left">{t.schedule.aidStations.tableHeaders.location}</th>
                    <th className="px-4 py-3 text-left">{t.schedule.aidStations.tableHeaders.distance}</th>
                    <th className="px-4 py-3 text-left">{t.schedule.aidStations.tableHeaders.services}</th>
                    <th className="px-4 py-3 text-left">{t.schedule.aidStations.tableHeaders.races}</th>
                  </tr>
                </thead>
                <tbody>
                  {t.schedule.aidStations.stations.map((station: any, index: number) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-card' : 'bg-background'}>
                      <td className="px-4 py-3 font-medium">{station.location}</td>
                      <td className="px-4 py-3">{station.distance}</td>
                      <td className="px-4 py-3">{station.services}</td>
                      <td className="px-4 py-3">{station.races}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
