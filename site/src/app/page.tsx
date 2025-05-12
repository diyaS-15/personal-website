import Image from "next/image";
import About from "./Components/About";
import HorizontalScroll from "./Components/HorizontalScroll";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";

export default function Home() {
  return (
    <div className="text-[#ededed] font-sans">
      <Navbar/>
      <About/>
      <HorizontalScroll/>
      <Contact/>
    </div>
  );
}
