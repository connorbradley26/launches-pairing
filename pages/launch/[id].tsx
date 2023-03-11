import { NextPageContext } from "next";
import ILaunch from "@/types/ILaunch";
import Image from "next/image";


function Page({ launch }: { launch: ILaunch }) {
    
    return (
        <div className="prose mx-auto">
            <div className="relative w-full h-64 my-10">
                <Image fill className="object-contain" src={launch.imageUrl} alt={`Image of ${launch.name}`}/>
            </div>
            
            <h1>{launch.name}</h1>
            <div>
            <p>Launch Date: {new Date(launch.date).toDateString()}</p>
            <p>{launch.success ? "Success" : "Failed"}</p>
            <blockquote>{launch.id}</blockquote>
            </div>

            <h2>Payload</h2>
            
            <p>Name: {launch.payload.name}</p>
            <p>Type:{launch.payload.type}</p>
            <blockquote>{launch.payload.id}</blockquote>

            <h2>Core</h2>
            
            <p>Serial: {launch.core.serial}</p>
            <blockquote>{launch.core.id}</blockquote>
            

        </div>
    )
}


Page.getInitialProps = async (ctx: NextPageContext) => {
    // If we're navigating here via next/link we are running this code on the client
    // If not, were running this in the browser so we don't need to use the BASE_URL env variable
    // req is only available on the server
    const url = `${ctx.req ? process.env.BASE_URL : ""}/api/getLaunch/${ctx.query.id}`
    console.log(url)
    const launchResponse = await fetch(url)
    const launch: ILaunch = await launchResponse.json();
    if (!launch) return ctx.res?.writeHead(404).end();
    return { launch: launch }
}


export default Page