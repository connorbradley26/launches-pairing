import { useLaunchCardContext } from "./LaunchCardContext";


export default function LaunchCardDetails() {
    const { launch } = useLaunchCardContext();

    return (
        <div className="flex flex-1 flex-col p-2 ">
        <h3 className="mt-1 text-sm font-medium text-gray-900">{launch.name}</h3>
        <dl className="mt-1 flex h-full flex-col justify-end">
          <dd className="text-sm text-gray-500">{new Date(launch.date).toDateString()}</dd>
          <dd className="text-sm text-gray-500">
            <b className="mr-1">Core</b>
            {launch.core.serial}
          </dd>
          <dd className="text-sm text-gray-500">
            <b className="mr-1">Type</b>
            {launch.payload?.type}
          </dd>
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
    )
}