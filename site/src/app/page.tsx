import Image from "next/image";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <div className="text-[#ededed] font-sans h-screen">
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
