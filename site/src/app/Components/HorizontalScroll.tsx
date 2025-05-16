import Image from 'next/image'
export default function HorizontalScroll(){
    return(
    <div className="mx-6 text-center">
        <div>

        </div>
        <h2 className="text-3xl text-left">Projects</h2>
        <section className="mb-4 mt-4">
        <h2 className="text-2xl pb-2">Membership Inference Attack </h2>
        
        <ul className="ml-4 flex gap-2 font-bold pb-2 text-gray-400 align-center my-2">
            <li> Python | </li>
            <li> Logisitic Regression | </li>
            <li> Random Forest | </li>
            <li> ML </li>
        </ul>
        <p className="pb-2 opacity-80 mx-3">Membership Inference Attack on predictive models for PCOS diagnosis to determine if a 
        given memeber was inside the initial predicition model's training dataset. </p>
        <button className="border-1 p-1 px-4 my-2 rounded-lg">Code</button>
        </section>
        <section className="mb-4 mt-10">
        <h2 className="text-2xl pb-2">Music Recommendation System </h2>
        <ul className="ml-20 flex gap-2 font-bold pb-2 text-gray-400 align-center my-2">
            <li> Python | </li>
            <li> API Integration | </li>
            <li> Streamlit </li>
        </ul>
        <p className="pb-2 opacity-80 mx-3">Webapp that takes in user input for the event, audience, or mood and recommends a song 
            using Gemini API and allows the track to play using Spotify Web API  </p>
        <button className="border-1 p-1 px-4 my-2 rounded-lg">Code</button>
        </section>
        <section className="mb-4 mt-10">
        <h2 className="text-2xl pb-2">Speech-to-text Transcriber </h2>
        <ul className="ml-18 flex gap-2 font-bold pb-2 text-gray-400 align-center my-2">
            <li> Python | </li>
            <li> OpenAI Whisper |</li>
            <li> HTML/CSS </li>
        </ul>
        <p className="pb-2 opacity-80"> Application that converts audio to text and displays transcription on website </p>
        <button className="border-1 p-1 px-4 my-2 rounded-lg">Code</button>
        </section>
    </div>
    
    );
}