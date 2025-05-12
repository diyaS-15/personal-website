export default function About(){
    return(
    <div className="ml-6 mt-10 md:my-20 md:mx-30">
    <p className="text-lg pt-4 font-mono">Hi, my name is </p>
    <p className="text-4xl pt-3 md:text-7xl">Diya Shrivastava</p>
    <p className="text-4xl py-3 text-gray-400 md:text-7xl">And I like to build things. </p>
    <div className="ml-0 m-4">
    <button className="border-double border-4 rounded-lg ml-0 mt-0 m-4 px-4 py-2 mb-8 hover:text-gray-400 md:text-xl">Resume</button>
    </div>
    <div>
    <p className="text-center mr-2 md:text-xl md:mx-20"> Hello! I'm Diya and I'm passionate about incorporating AI & ML into full stack applications. Currently, I am pursuing a B.S. in Computer Science 
        with a minor in Business. </p>
    </div>
    <div className=" text-center opacity-80">
            <ul className="grid grid-cols-3 my-4">
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