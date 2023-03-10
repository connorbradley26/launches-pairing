

import Header from '../components/Header';
import LaunchCard from '../components/LaunchCard';
export default function Home() {
  return (
        <>
          <Header title="SpaceX Launches" subTitle="The 10 latest SpaceX launches, and some information behind it." />
          <LaunchCard />
        </>
  );
}
