import ArchieveFormat from '../Components/ArchFormat';

export default function ProjectArchieve() {
    return(
    <main>
        <h1 className="text-4xl">Archieve</h1>
        <p>List of things I've worked on</p>
        <div className="text-slate-50">
        <div> </div>
        <ArchieveFormat year="2024" title="Speech-to-text" madeAt="WICS" tech="Python, OpenAI Whisper" link="hi" />
        </div>
    </main>
    );
}