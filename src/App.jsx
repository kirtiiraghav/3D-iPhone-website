import Features from "./components/Features";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <main className="bg-black">
            <Navbar />
            <Hero />
            <Highlights />
            <Features />
            <HowItWorks />
        </main>
    )
}