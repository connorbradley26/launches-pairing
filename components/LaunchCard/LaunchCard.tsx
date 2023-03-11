
import Link from "next/link"
import ILaunch from "@/types/ILaunch"

import LaunchCardImage from "./LaunchCardImage"
import LaunchCardContext from "./LaunchCardContext"
import LaunchCardDetails from "./LaunchCardDetails"
import LaunchCardAction from "./LaunchCardAction"

export default function LaunchCard({ launch }: { launch: ILaunch }) {
  if (!launch) return (<div>Error...</div>)

  return (
    <LaunchCardContext.Provider value={{ launch }}>
      <li
        data-cy="launch-card"
        key={launch.name}
        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow">
        <LaunchCardImage />
        <LaunchCardDetails />
        <LaunchCardAction />
      </li>
    </LaunchCardContext.Provider>
  )
}
