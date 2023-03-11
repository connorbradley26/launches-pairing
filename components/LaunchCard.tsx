import Image from "next/image"
import Link from "next/link"
import ILaunch from "@/types/ILaunch"



export default function LaunchCard({launch}: { launch: ILaunch }) {
    if (!launch) return (<div>Loading...</div>)

  return (
   
        <li
          key={launch.name}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white  shadow"
        >
        {/* Image Section */}
        <Image width={250} height={250} className="h-64 w-64 rounded-t-lg" src={launch.imageUrl} alt={`Picture of ${launch.name}`} />
         {/* Details Section */}
         <div className="flex flex-1 flex-col p-2 ">            
            <h3 className="mt-1 text-sm font-medium text-gray-900">{launch.name}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Date</dt>
                <dd className="text-sm text-gray-500">{new Date(launch.date).toDateString()}</dd>
              <dd className="text-sm text-gray-500">{launch.core?.serial}</dd>
              <dd className="text-sm text-gray-500">{launch.payload?.type}</dd>
              <dd className="mt-3">
                {launch.success ? (
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  Success
                </span>
                ) : (
                <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                    Failed
                </span>
                )}
              </dd>
            </dl>
          </div>
          {/* Action Section */}
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <Link
                  href={`/launch/${launch.id}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >                  
                  More Details...
                </Link>
              </div>
            </div>
          </div>
        </li>
  )
}
