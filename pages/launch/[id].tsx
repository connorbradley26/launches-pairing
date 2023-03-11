import { NextPageContext } from "next";
import ILaunch from "@/types/ILaunch";


function Page({ launch }: { launch: ILaunch }) {
    
    return (
        <>
            {JSON.stringify(launch, null, 2)}
        </>
    )
}


Page.getInitialProps = async (ctx: NextPageContext) => {
    // If we're navigating here via next/link we are running this code on the client
    // If not, were running this in the browser so we don't need to use the BASE_URL env variable
    // req is only available on the server
    const url = `${ctx.req ? process.env.BASE_URL : ""}/api/getLaunch/${ctx.query.id}`
    const launchResponse = await fetch(url)
    const launch: ILaunch = await launchResponse.json();
    return { launch: launch }
}


export default Page