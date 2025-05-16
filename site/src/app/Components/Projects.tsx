'use client'
import Image from 'next/image'
import {ExternalLink, FolderCode, Dot} from "lucide-react"
import Link from 'next/link'

export default function Projects(){
    return(
        <div className="h-auto">
            <h2 className="text-3xl text-center font-mono m-2 mt-20 mb-8 md:hidden">Projects</h2>
    <div className=" md:grid grid-rows-2 grid-cols-3 md:gap-4 md:mx-28">
        <div className="bg-[#3c5e73] opacity-70 hover:bg-[#233947] my-4 mx-6 p-4 shadow-lg md:mx-1">
            <div className="flex items-center justify-between w-full">
            <FolderCode size={43} strokeWidth={1.2}/>
            <Link href="https://github.com/diyaS-15/job-recommendation-system" className="hover:text-gray-400">
            <ExternalLink size={27} strokeWidth={1.2} />
            </Link>
            </div>
            <h2 className="text-2xl py-2 "> ResuMatch</h2>
            <p className="text-md"> Job Recommendation System that parses a user's resume and provides
                 personalized job matches using collaborative filtering and natural language processing models.
            </p>
            <ul className="text-md mt-4 flex gap-1 flex-wrap">
                <li>Next.js</li>
                <Dot/>
                <li> FastAPI</li>
                <Dot/>
                <li> PostgreSQL</li>
                <Dot/>
                <li> API Integration</li>
                <Dot/>
                <li>Collaborative Filtering</li>
                <Dot/>
                <li> NLP</li>
                <Dot/>
                <li> OAuth2</li>
            </ul>
        </div>
        <div className="bg-[#3c5e73] opacity-70 hover:bg-[#233947] my-4 mx-6 p-4 shadow-lg md:mx-1 ">
        <div className="flex items-center justify-between w-full">
            <FolderCode size={43} strokeWidth={1.2}/>
            <Link href="https://github.com/diyaS-15/membership-inference-attack" className="hover:text-gray-400">
            <ExternalLink size={27} strokeWidth={1.2} />
            </Link>
            </div>
            <h2 className="text-2xl py-2"> Membership Inference Attack</h2>
            <p className="text-md ">Membership Inference Attack on predictive models for PCOS diagnosis to determine if a 
            given memeber was inside the initial predicition model's training dataset.</p>
            <ul className="text-md mt-4 flex gap-1 flex-wrap">
                <li>Python</li>
                <Dot/>
                <li> Logistic Regression </li>
                <Dot/>
                <li> Random Forest</li>
                <Dot/>
                <li>Machine Learning Models</li>
                <Dot/>
                <li> Privacy</li>
            </ul>
        </div>
        <div className="bg-[#3c5e73] opacity-70 hover:bg-[#233947] my-4 mx-6 p-4 shadow-lg md:mx-1">
        <div className="flex items-center justify-between w-full">
            <FolderCode size={43} strokeWidth={1.2}/>
            <Link href="https://paragonautonomous.github.io/website/#home" className="hover:text-gray-400">
            <ExternalLink size={27} strokeWidth={1.2} />
            </Link>
            </div>
            <h2 className="text-2xl py-2"> Paragon Autonomous LLC Website</h2>
            <p className="text-md ">Developed company website to establish professional web presence. 
                Started as an ASU Engineering Projects in Community Service Project. </p>
            <ul className="text-md mt-4 flex gap-1">
                <li>Next.js</li>
                <Dot/>
                <li>TailwindCSS</li>
            </ul>
        </div>
        <div className="bg-[#3c5e73] opacity-70 hover:bg-[#233947] my-4 mx-6 p-4 shadow-lg md:mx-1">
        <div className="flex items-center justify-between w-full">
            <FolderCode size={43} strokeWidth={1.2}/>
            <Link href="https://github.com/diyaS-15/Student-Wellness-Hub" className="hover:text-gray-400">
            <ExternalLink size={27} strokeWidth={1.2} />
            </Link>
            </div>
            <h2 className="text-2xl py-2">Student Wellness Platform</h2>
            <p className="text-md">Hackathon Project focused on providing a centralized hub for student 
                mental well-being. Key features include mood tracking, task tracking with to-do lists, embedded playlists
                , self-care tips and clock. 
            </p>
            <ul className="text-md mt-4 flex gap-1">
                <li>Next.js</li>
                <Dot/>
                <li> MongoDB</li>
            </ul>
        </div>
        <div className="bg-[#3c5e73] opacity-70 hover:bg-[#233947] my-4 mx-6 p-4 shadow-lg md:mx-1">
        <div className="flex items-center justify-between w-full">
            <FolderCode size={43} strokeWidth={1.2}/>
            <Link href="https://github.com/diyaS-15/AI-music-recommender" className="hover:text-gray-400">
            <ExternalLink size={27} strokeWidth={1.2} />
            </Link>
            </div>
            <h2 className="text-2xl py-2">AI Music Recommender</h2>
            <p className="text-md ">Webapp that takes in user input for the event, audience, or mood and recommends a song using Gemini API and allows the track to play using Spotify Web API</p>
            <ul className="text-md mt-4 flex gap-1">
                <li>Python</li>
                <Dot/>
                <li> API Integration</li>
                <Dot/>
                <li> Streamlit</li>
            </ul>
        </div>
        <div className="bg-[#3c5e73] opacity-70 hover:bg-[#233947] my-4 mx-6 p-4 shadow-lg md:mx-1">
        <div className="flex items-center justify-between w-full">
            <FolderCode size={43} strokeWidth={1.2}/>
            <Link href="https://github.com/quinncage/WiCSProject" className="hover:text-gray-400">
            <ExternalLink size={27} strokeWidth={1.2} />
            </Link>
            </div>
            <h2 className="text-2xl py-2"> Speech-to-text Transcriber</h2>
            <p className="text-md ">Application to transcribe audio files into text. This was developed during 
                the Women in Computer Science Mentorship program, in collaboration with 4 students. </p>
            <ul className="text-md mt-4 flex gap-1">
                <li>Python</li>
                <Dot/>
                <li> OpenAI Whisper</li>
            </ul>
        </div>
        
        </div>
        <Link href="https://github.com/diyaS-15?tab=repositories" className="ml-7 md:ml-30 font-mono opacity-80 text-[#669bbc] hover:text-[#5886a3]">Full Project Archieve -> </Link>
        </div>
    );
}