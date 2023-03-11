import ILaunch from "@/types/ILaunch";
import LaunchCard from "@/components/LaunchCard";


export default function LaunchContainer({launches} : {launches: ILaunch[]}) {
    return (
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {launches.map((launch) => (
                <LaunchCard key={launch.name} launch={launch} />
            ))}
        </ul>
    )
}