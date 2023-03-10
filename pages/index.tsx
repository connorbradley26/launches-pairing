

import Header from '../components/Header';
import LaunchCard from '../components/LaunchCard';
import LaunchContainer from '../components/LaunchContainer';
import ILaunch from '../types/ILaunch';
import { IPayload } from '../types/IPayload';

export async function getStaticProps() {
    const launchesResponse = await fetch(`${process.env.BASE_URL}/api/getLaunches`)
    const launches: ILaunch[] = await launchesResponse.json();

    // if (!launches) {
    //     // TODO: Handle error
    //     throw new Error('Failed to fetch launches')
    // }
    // for (let launch of launches) {
    //     const payloadResponse = await fetch(`${process.env.BASE_URL}/api/getPayload/${launch.payload.id}`)
    //     const payload: IPayload = await payloadResponse.json();
    //     if (!payload) {
    //         // TODO: Handle error
    //         throw new Error('Failed to fetch payload')
    //     }

    //     if (payload) {
    //         launch.payload.type = payload.type;
    //     }
    // }

    return {
        props: {
            launches,
        },
        revalidate: 1
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
