

import Header from '@/components/Header';
import LaunchContainer from '@/components/LaunchContainer';
import ILaunch from '@/types/ILaunch';

export async function getStaticProps() {
    try {
    const launchesResponse = await fetch(`${process.env.BASE_URL}/api/getLaunches`)
    const launches: ILaunch[] = await launchesResponse.json();
        return {
            props: {
                launches,
            },
            revalidate: 60
        }

    }
    catch (e) {
        console.error(e)
        return {
            props: {
                launches: [],
            },
        }
    }
    
}

export default function Home({ launches }: { launches: ILaunch[] }) {
    return (
        <>
            <Header title="SpaceX Launches" subTitle="The 10 latest SpaceX launches, and some information behind it." />
            <LaunchContainer launches={launches} />
        </>
    );
}
