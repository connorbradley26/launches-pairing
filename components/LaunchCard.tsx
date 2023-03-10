import Image from "next/image"
import Link from "next/link"

const launches = [
  {
    name: 'Apollo 11',
    date: new Date(),
    core: 'Core 1',
    payload: {
        id: '1',
        type: 'Satellite',
    },
    success: true,
    imageUrl:
      'https://robbreport.com/wp-content/uploads/2019/07/spacex-starship.jpg',
  }
]

export default function Example() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {launches.map((launch) => (
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
              <dd className="text-sm text-gray-500">{launch.core}</dd>
              <dd className="text-sm text-gray-500">{launch.payload.type}</dd>
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
                  href={`#`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  
                  More Details...
                </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
