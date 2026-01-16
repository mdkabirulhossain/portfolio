import AboutMe from "./about/page";
import Hero from "./components/Hero";
import Contact from "./contact/page";
import LatestProjects from "./latest-work/page";
import ServicesSection from "./services/page";

export default function Homepage(){
    return (
        <div>
            {/* <HeroSection /> */}
            <section id="home">
                <Hero />
            </section>
            <section id="about">
            <AboutMe />
            </section>
            <section id="services">
            <ServicesSection />
            </section>
            <section id="projects">
            <LatestProjects />
            </section>
            <section id="contact">
            <Contact />
            </section>
            
        </div>
    )
}