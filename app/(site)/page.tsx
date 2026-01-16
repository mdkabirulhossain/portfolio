import AboutMe from "./about/page";
import Hero from "./components/Hero";
import Contact from "./contact/page";
import LatestProjects from "./latest-work/page";
import ServicesSection from "./services/page";

export default function Homepage(){
    return (
        <div>
            {/* <HeroSection /> */}
            <Hero />
            <AboutMe />
            <ServicesSection />
            <LatestProjects />
            <Contact />
        </div>
    )
}