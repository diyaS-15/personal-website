import ArchieveFormat from '../Components/ArchFormat';

export default function ProjectArchieve() {
    return(
    <main className=" text-center m-6 md:m-30">
        <h1 className=" text-4xl font-mono">Archieve</h1>
        <p>List of things I've worked on</p>
        <div className="text-slate-50">
        <div className="font-bold m-4">
        <ArchieveFormat year="year" title="title" madeAt="made At " tech="Built With" link="Link" />
             </div>
        <ArchieveFormat year="2025" title="ResuMatch" madeAt="Personal Project" tech="Next.js, FastAPI, PostgreSQL" link="hi" />
        <ArchieveFormat year="2025" title="Personal Website" madeAt="Personal Project" tech="Next.js, TailwindCSS" link="hi" />
        <ArchieveFormat year="2025" title="Student Q&A Forum" madeAt="ASU CSE360" tech="Java, SQL" link="hi" />
        <ArchieveFormat year="2025" title="Membership Inference Attack" madeAt="WICS" tech="Python (Numpy, Scikit-learn, Pandas) " link="hi" />
        <ArchieveFormat year="2025" title="Paragon Autonomous Website" madeAt="ASU EPICS, Paragon Autonmous" tech="Next.js, TailwindCSS" link="hi" />
        <ArchieveFormat year="2025" title="Student Wellness Platform" madeAt="WICS Hackathon" tech="Next.js, TailwindCSS, MongoDB" link="hi" />
        <ArchieveFormat year="2024" title="AI Music Recommender" madeAt="WICS" tech="Python, Gemini API, Spotify API" link="hi" />
        <ArchieveFormat year="2024" title="Speech-to-text" madeAt="WICS" tech="Python, OpenAI Whisper" link="hi" />
        <ArchieveFormat year="2024" title="AI Music Recommender" madeAt="WICS" tech="Python, Gemini API, Spotify API" link="hi" />

        </div>
    </main>
    );
}