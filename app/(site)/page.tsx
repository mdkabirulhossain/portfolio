import AboutMe from "./about/page";
import HeroSection from "./components/Hero";

export default function Homepage(){
    return (
        <div>
            <HeroSection />
            <AboutMe />
        </div>
    )
}