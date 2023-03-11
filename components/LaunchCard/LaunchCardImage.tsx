import Image from "next/image"
import { RocketLaunchIcon } from "@heroicons/react/24/outline"
import { useLaunchCardContext } from "./LaunchCardContext"


export default function LaunchCardImage() {
    const { launch } = useLaunchCardContext();
    return (
        <>
            <div className="flex relative h-64 justify-center ">
            {launch.imageUrl ? (
                    <Image 
                        className="rounded-t-lg h-64 w-64 object-contain" 
                        fill={true}
                        src={launch.imageUrl} alt={`Picture of ${launch.name}`} />
                ) : (
                    <RocketLaunchIcon className="h-64 w-64 rounded-t-lg text-gray-600" />
                )
            }
            </div>
        </>
    )
}