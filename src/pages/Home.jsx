import { BackgroundAnimation } from "../components/BackgroundAnimation" // { BackgroundAnimation }
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { About } from "../components/About"
import { Skills } from "../components/Skills"
import { Projects } from "../components/Projects"
import { Contact } from "../components/contact"
import { Footer } from "../components/Footer"


export const Home = () => {
    return (
        <>
            <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
                <BackgroundAnimation />
                <Navbar />
                <main>
                    <HeroSection />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        </>
    )
}