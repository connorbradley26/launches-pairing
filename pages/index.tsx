

import Header from '@/components/Header';
import LaunchContainer from '@/components/LaunchContainer';
import convertLaunchReqToILaunch from '@/lib/convertLaunchReqToILaunch';
import getLaunchRequests from '@/lib/getLaunchRequest';
import ILaunch from '@/types/ILaunch';
import { ILaunchResponse } from '@/types/ILaunchResponse';

export async function getStaticProps() {
    
    const launchData = await getLaunchRequests(10);
    if (launchData instanceof Error) return { notFound: true };
    const launches: ILaunch[] = launchData.launches.map((launch: ILaunchResponse) => {
        return convertLaunchReqToILaunch(launch);
    });

    return {
        props: {
            launches,
        },
        revalidate: 60
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
