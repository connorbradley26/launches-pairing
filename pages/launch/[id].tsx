import ILaunch from "@/types/ILaunch";
import Image from "next/image";
import getLaunchRequests from "@/lib/getLaunchRequest";
import convertLaunchReqToILaunch from "@/lib/convertLaunchReqToILaunch";
import { ILaunchResponse } from "@/types/ILaunchResponse";


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


export async function getStaticProps({ params }: { params: { id: string } }) {

    const launchResponse = await getLaunchRequests(1, params.id);
    if (launchResponse instanceof Error) return { notFound: true };
    const launch: ILaunch = convertLaunchReqToILaunch(launchResponse.launches[0]);
        

    return {
        props: { 
            launch: launch 
        },
        revalidate: 60
    }
}

export async function getStaticPaths() {
    const launchesResponse = await getLaunchRequests(10);

    if (launchesResponse instanceof Error) return { notFound: true };
    const launches: ILaunchResponse[] = launchesResponse.launches;
    const paths = launches.map(launch => ({ params: { id: launch.id } }))
    console.log("paths", paths)
    return { paths, fallback: 'blocking' }
}


export default Page