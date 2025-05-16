import Link from 'next/link'

interface ArchieveProps{
    year:string;
    title:string;
    madeAt:string;
    tech:string;
    link:string; 
}
export default function ArchFormat({year,title,madeAt,tech,link}:ArchieveProps){
    return(
        <div className="flex flex-row gap-4">
            <div>{year}</div>
            <div>{title}</div>
            <div>{madeAt}</div>
            <div>{tech}</div>
            <div>{link}</div>
        </div>
    ); 
}
