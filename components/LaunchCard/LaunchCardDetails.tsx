import { useLaunchCardContext } from "./LaunchCardContext";


export default function LaunchCardDetails() {
    const { launch } = useLaunchCardContext();

    return (
        <div className="flex flex-1 flex-col p-2 ">
        <h3 data-cy="launch-card-name" className="mt-1 text-sm font-medium text-gray-900">{launch.name}</h3>
        <dl className="mt-1 flex h-full flex-col justify-end">
          <dd data-cy="launch-card-date" className="text-sm text-gray-500">{new Date(launch.date).toDateString()}</dd>
          <dd className="text-sm text-gray-500">
            <b className="mr-1">Core</b>
            <div data-cy="launch-card-core">{launch.core.serial}</div>
          </dd>
          <dd className="text-sm text-gray-500">
            <b className="mr-1">Type</b>
            <div data-cy="launch-card-payload">{launch.payload?.type}</div>
          </dd>
          <dd className="mt-3" data-cy="launch-card-success">
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