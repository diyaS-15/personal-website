import { Github, Linkedin, Mail} from "lucide-react"
import Link from 'next/link'

export default function Contact(){
    return(
        <div>
            <footer>
            <p className="text-center mt-8 font-mono text-xl">Contact Info</p>
            <p className="text-center font-mono pt-1">Email: diyashrivastava83@gmail.com</p>
            <div className="flex justify-center gap-4 m-4">
        <Link href="https://github.com/diyaS-15" className="hover:text-gray-400">
          <Github size={24} strokeWidth={1.5} />
        </Link>
        <Link href="https://linkedin.com/in/diya-shrivastava" className="hover:text-gray-400">
          <Linkedin size={24} strokeWidth={1.3} />
        </Link>
        <Link href="mailto:diyashrivastava83@gmail.com" className="hover:text-gray-400">
          <Mail size={24} strokeWidth={1.5} />
        </Link>
      </div>
        <p className="text-center text-sm opacity-50">Built by Diya Shrivastava</p>
            </footer>
        </div>
    );
}