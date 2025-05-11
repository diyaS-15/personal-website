import Image from "next/image";
import About from "./Components/About";
import HorizontalScroll from "./Components/HorizontalScroll";

export default function Home() {
  return (
    <div className="text-[#ededed]">
      <nav className="flex justify-center md:justify-end md:mx-4">
        <ul className="flex row-1 gap-6">
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <About/>
      <HorizontalScroll/>
      <div className="text-center">
        <p className="text-2xl m-2">Contact</p>
        <p>Email: diyaShrivastava83@gmail.com</p>
        <p>Phone: </p>
        <p>Links</p>
      </div>
    </div>
  );
}
