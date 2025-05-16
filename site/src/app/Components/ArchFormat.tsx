
interface ArchieveProps{
    year:string;
    title:string;
    madeAt:string;
    tech:string;
    link:string; 
}
export default function ArchFormat({year,title,madeAt,tech,link}:ArchieveProps){
    return(
        <div className="flex items-left justify-between w-full">
            <div>{year}</div>
            <div>{title}</div>
            <div>{madeAt}</div>
            <div>{tech}</div>
            <div>{link}</div>
        </div>
    ); 
}
