

import Header from '../components/Header';
import LaunchCard from '../components/LaunchCard';
import LaunchContainer from '../components/LaunchContainer';
import ILaunch from '../types/ILaunch';

export async function getStaticProps() {
  console.log("BASE URL: ", process.env.BASE_URL)
  const res = await fetch(`${process.env.BASE_URL}/api/launches`)
  const launches: ILaunch[] = await res.json()

  return {
      props: {
          launches,
      },
      revalidate: 60
  }
}

export default function Home({ launches }: { launches: ILaunch[]}) {
  return (
        <>
          <Header title="SpaceX Launches" subTitle="The 10 latest SpaceX launches, and some information behind it." />
          <LaunchContainer launches={launches} />
        </>
  );
}
