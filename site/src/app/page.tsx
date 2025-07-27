import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <div className="text-[#ededed] font-sans h-screen">
      <SpeedInsights/>
      <Navbar/>
      <section id="about">
      <About/>
      </section>
      <section id="projects">
      <Projects/>
      </section>
      <section id="contact">
      <Contact/>
      </section>
    </div>
  );
}
