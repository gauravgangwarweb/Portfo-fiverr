import Faq from "./components/Faq"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Invest from "./components/Invest"
import Menu from "./components/Menu"
import Waitlist from "./components/Waitlist"

export default function Home() {
    return (
        <main className=''>
            <Hero />
            <Features />
            <Menu />
            <Invest />
            <Waitlist />
            <Faq />
            <Footer />
        </main>
    )
}
