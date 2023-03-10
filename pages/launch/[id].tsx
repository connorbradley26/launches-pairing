import ILaunch from "../../types/ILaunch";


Page.getInitialProps = async (ctx) => {

    const launchResponse = await fetch(`${process.env.BASE_URL}/api/getLaunch/${ctx.query.id}`)
    const launch: ILaunch = await launchResponse.json();
    return { launch: launch }
  }

export default function Page({ launch }: { launch: ILaunch }) {
    
    return (
        <>
            {JSON.stringify(launch)}
        </>
    )
}