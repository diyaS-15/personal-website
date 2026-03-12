
export default function About(){
    return(
    <div className="m-6 mt-2 md:my-20 md:mx-30">
    <p className="text-lg pt-4 font-mono ">Hi, my name is </p>
    <p className="text-4xl pt-3 md:text-7xl">Diya Shrivastava</p>
    <p className="text-4xl py-3  md:text-7xl text-[#5886a3] ">And I like to build things. </p>
    <div className="ml-0 m-4">
    <button className="border-double border-4 rounded-lg ml-0 mt-0 m-4 px-4 py-2 mb-8 hover:text-gray-400 md:text-xl">
        <a href="/images/Diya_Shrivastava_Resume-public.pdf" target="_blank" rel="noopener noreferrer">Resume</a></button>
    </div>
    <div>
    <p className="text-center mr-2 md:text-xl md:mx-20"> Hello! I&apos;m Diya. I am majoring in Computer Science with a focus on AI/ML.
        <br />
        Currently I am working on two capstones: Predicting CRRT in Burn Patients using machine learning with Creighton University School of Medicine 
        and an Autonomous Rover for NASA Psyche Mission. My research interests are AI &#43; cybersecurity.  
        Feel free to check out my personal projects! 
    </p>
    </div>
    <div className=" text-center opacity-90">
            <ul className="grid grid-cols-3 my-4 text-[#5886a3] md:text-xl">
                <li>» Python</li>
                <li>» Typescript</li>
                <li>» Java</li>
                <li>» Javascript </li>
                <li>» React/ Next.js</li>
                <li>» PostgreSQL </li>
            </ul>
     </div>
    </div>
    );
}