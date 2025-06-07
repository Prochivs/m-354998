import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Timer,
  Medal,
  Map,
  Users,
  Calendar,
  Clock,
  Award,
  Heart,
  LifeBuoy,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Index() {
  const { t } = useLanguage();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Get race data from localStorage or use defaults
  const raceData = JSON.parse(
    localStorage.getItem("marathonRaceData") || "null"
  ) || {
    fullMarathon: {
      name: "Full Marathon",
      distance: "42.195 km",
      price: 250,
      description: "Experience the full marathon challenge",
    },
    halfMarathon: {
      name: "Half Marathon",
      distance: "21.1 km",
      price: 150,
      description: "Perfect for intermediate runners",
    },
    tenK: {
      name: "10K Run",
      distance: "10 km",
      price: 100,
      description: "Great for beginners and casual runners",
    },
  };

  // Sample race categories
  const raceCategories = [
    {
      ...raceData.fullMarathon,
      image:
        "https://images.unsplash.com/photo-1667791275929-5701d83734c1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwcmVkJTIwbWFyYXRob24lMjBhZnJpY2F8ZW58MHx8MHx8fDA%3D",
    },
    {
      ...raceData.halfMarathon,
      image:
        "https://images.unsplash.com/photo-1635726273307-12e69390d1fd?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      ...raceData.tenK,
      image:
        "https://plus.unsplash.com/premium_photo-1663134239842-c85a7bc2ae78?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY2fHx8ZW58MHx8fHx8",
    },
  ];

  // Feature items
  const features = [
    {
      icon: <Medal className="h-8 w-8 text-[#144675]" />,
      title: t.home.features.medals.title,
      description: t.home.features.medals.description,
    },
    {
      icon: <Users className="h-8 w-8 text-[#144675]" />,
      title: t.home.features.community.title,
      description: t.home.features.community.description,
    },
    {
      icon: <Map className="h-8 w-8 text-[#144675]" />,
      title: t.home.features.route.title,
      description: t.home.features.route.description,
    },
    {
      icon: <Timer className="h-8 w-8 text-[#144675]" />,
      title: t.home.features.timing.title,
      description: t.home.features.timing.description,
    },
    {
      icon: <LifeBuoy className="h-8 w-8 text-[#144675]" />,
      title: t.home.features.support.title,
      description: t.home.features.support.description,
    },
    {
      icon: <Heart className="h-8 w-8 text-[#144675]" />,
      title: t.home.features.health.title,
      description: t.home.features.health.description,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Welcome Section */}
        <section id="welcome" className="pt-20 bg-[#f1f3f2]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in [animation-delay:100ms]">
                <span className="text-sm  text-gray-500 font-medium uppercase tracking-wider">
                  {t.home.welcome.subtitle}
                </span>

                <h2 className="text-3xl md:text-5xl  font-bold mt-2 mb-6 text-[#144674]">
                  {t.home.welcome.title}
                </h2>
                <p className="text-muted-foreground mb-6 text-gray-600">
                  {t.home.welcome.description1}
                </p>
                <p className="text-muted-foreground mb-8">
                  {t.home.welcome.description2}
                </p>

                <p className="text-muted-foreground mb-8">
                  {t.home.welcome.description2}
                </p>

                <Button
                  asChild
                  className="btn-[#cf2e2e]"
                  style={{
                    background: "#144674",
                  }}
                >
                  <Link to="/about">
                    {t.home.welcome.learnMore}{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative animate-fade-in [animation-delay:300ms]">
                <div className=" rounded-2xl overflow-hidden">
                  {/* <iframe
                    src="https://d1csarkz8obe9u.cloudfront.net/index.php/posterbuilder/view/21451a66c5f819dabfa86cf3ad0b8350/1"
                    style={{ height: "604px", width: "100%", border: "none" }}
                  ></iframe> */}
                  <iframe
                    src="https://d1csarkz8obe9u.cloudfront.net/index.php/posterbuilder/view/e1e2c0504e4713a490079fc9af1c1d0b/1"
                    style={{ height: "600px", border: "none" }}
                    title="Poster Builder"
                    className="w-full h-full object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-10">
          <div className="w-full max-w-screen-2xl px-4 pt-8 md:pt-24 pb-8 mx-auto">
            <div
              style={{ background: "rgb(216 228 240)" }}
              className=" rounded-xl flex items-center gap-4 sm:gap-4 shadow-lg px-4 py-6 cursor-pointer sm:mx-0 sm:rounded-xl"
            >
              {/* <img
                width="72"
                height="72"
                src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'..."
                alt="Scam Quiz Icon"
                className="flex-none w-[52px] h-[52px] sm:w-[72px] sm:h-[72px]"
              /> */}
              <div>
                <div className="font-semibold sm:text-lg leading-tight mb-1">
                  Want to make a difference ?
                </div>
                <div className="text-sm sm:text-base leading-tight">
                  Join us for the first annual Well Spring marathon
                </div>
              </div>

              <svg
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
                className="text-2xl text-[#5F646D] ml-auto flex-none"
              >
                {" "}
                <a href="/registration">
                  <path
                    fill="currentColor"
                    d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"
                  />{" "}
                </a>
              </svg>
            </div>
          </div>
        </section>

        <section className="pb-0">
          <div className="container flex justify-between items-end ">
            <div>
              <p className="text-sm font-semibold text-brand mb-3">PACKAGES</p>
              <div className="font-semibold md:text-3xl text-2xl md:mb-4 mb-2">
                <h3>
                  Trust your communication with Truecaller
                  <span className="text-brand">.</span>
                </h3>
              </div>
              <p className="mb-0 text-sm md:text-base">
                Truecaller is proud to be a leader in caller ID and spam
                blocking software as well as research around call and SMS
                harassment.
              </p>
            </div>

            <Button
              asChild
              className="btn-[#cf2e2e]"
              style={{
                background: "#144674",
              }}
            >
              <Link to="/about">
               See all packages
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* <section className="pt-10">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div
                className="glass-card p-6 rounded-xl text-center animate-fade-in"
                style={{ animationDelay: "100ms" }}
              >
                <div className="mb-4 p-3 rounded-full  inline-flex">
                  <Calendar className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-600">
                  {t.home.eventDetails.date.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.home.eventDetails.date.description}
                </p>
              </div>

              <div
                className="glass-card p-6 rounded-xl text-center animate-fade-in"
                style={{ animationDelay: "200ms" }}
              >
                <div className="mb-4 p-3 rounded-full  inline-flex">
                  <Clock className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t.home.eventDetails.time.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.home.eventDetails.time.description}
                </p>
              </div>

              <div
                className="glass-card p-6 rounded-xl text-center animate-fade-in"
                style={{ animationDelay: "300ms" }}
              >
                <div className="mb-4 p-3 rounded-full  inline-flex">
                  <Map className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t.home.eventDetails.location.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.home.eventDetails.location.description}
                </p>
              </div>

              <div
                className="glass-card p-6 rounded-xl text-center animate-fade-in"
                style={{ animationDelay: "400ms" }}
              >
                <div className="mb-4 p-3 rounded-full  inline-flex">
                  <Award className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t.home.eventDetails.prizes.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.home.eventDetails.prizes.description}
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Event Details Section */}

        <section className="relative py-20">
          <div className=" container">
            {/* <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-[#606060] font-medium uppercase tracking-wider">
                {t.home.raceCategories.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
                {t.home.raceCategories.title}
              </h2>
              <p className="text-muted-foreground text-[#606060]">
                {t.home.raceCategories.description}
              </p>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {raceCategories.map((category, index) => (
                <div
                  key={category.name}
                  className="glass-card overflow-hidden rounded-xl animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
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
                      <span className="text-gray-400 font-bold">
                        BWP {category.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {category.distance}
                    </p>
                    <Button
                      asChild
                      className="w-full btn-[rgb(56 109 158)]"
                      style={{
                        background: "rgb(56 109 158)",
                      }}
                    >
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
        <section className="section bg-[#f6f6f6]">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-gray-400 font-medium uppercase tracking-wider ">
                {t.home.features.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 ">
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
                  <div className="mb-4 p-3 rounded-full ">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Countdown Section */}
        <section className="section">
          <div className="container flex">
            <div className="flex basis-[50%]">
              {/* <iframe
                src="https://d1csarkz8obe9u.cloudfront.net/index.php/posterbuilder/view/e1e2c0504e4713a490079fc9af1c1d0b/1"
                style={{ height: "600px", border: "none" }}
                title="Poster Builder"
                 className="w-full h-full object-center"
              /> */}

              <iframe
                src="https://d1csarkz8obe9u.cloudfront.net/index.php/posterbuilder/view/21451a66c5f819dabfa86cf3ad0b8350/1"
                style={{ height: "650px", width: "100%", border: "none" }}
              ></iframe>
            </div>
            <div className="basis-[50%] flex flex-col items-center justify-center">
              <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
                <span className="text-sm text-[#144674] font-medium uppercase tracking-wider">
                  {t.home.countdown.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-[#144674]">
                  {t.home.countdown.title}
                </h2>
                <p className="text-muted-foreground">
                  {t.home.countdown.description}
                </p>
              </div>

              <div className="flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="glass-card p-6 rounded-xl text-center min-w-[120px]">
                    <div className="text-4xl font-bold text-[#144674] mb-2">
                      42
                    </div>
                    <div className="text-sm uppercase tracking-wider">
                      {t.home.countdown.days}
                    </div>
                  </div>
                  <div className="glass-card p-6 rounded-xl text-center min-w-[120px]">
                    <div className="text-4xl font-bold text-[#144674] mb-2">
                      12
                    </div>
                    <div className="text-sm uppercase tracking-wider">
                      {t.home.countdown.hours}
                    </div>
                  </div>
                  <div className="glass-card p-6 rounded-xl text-center min-w-[120px]">
                    <div className="text-4xl font-bold text-[#144674] mb-2">
                      35
                    </div>
                    <div className="text-sm uppercase tracking-wider">
                      {t.home.countdown.minutes}
                    </div>
                  </div>
                  <div className="glass-card p-6 rounded-xl text-center min-w-[120px]">
                    <div className="text-4xl font-bold text-[#144674] mb-2">
                      22
                    </div>
                    <div className="text-sm uppercase tracking-wider">
                      {t.home.countdown.seconds}
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Button asChild size="lg" className="bg-[#144674] hover:bg-[#ae1ea3]">
                  <Link to="/registration/form">
                    {t.home.countdown.register}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-[#f6f6f6]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t.home.cta.title}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t.home.cta.description}
              </p>
              <Button asChild size="lg" className="bg-[#144675] hover:bg-[#ae1ea3]">
                <Link to="/registration/form">{t.home.cta.registerNow}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
