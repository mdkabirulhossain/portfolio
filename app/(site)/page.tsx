import AboutMe from "./about/page";
import HeroSection from "./components/Hero";
import LatestProjects from "./latest-work/page";
import ServicesSection from "./services/page";

export default function Homepage(){
    return (
        <div>
            <HeroSection />
            <AboutMe />
            <ServicesSection />
            <LatestProjects />
        </div>
    )
}