import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useLaunchCardContext } from "./LaunchCardContext";


export default function LaunchCardAction() {
    const { launch } = useLaunchCardContext();

    return (
        <div>
            <div className="-mt-px flex divide-x divide-gray-200 hover:bg-gray-100">
                <div className="flex flex-1">
                    <Link
                        data-cy="launch-card-more-details"
                        href={`/launch/${launch.id}`}
                        className="relative inline-flex flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                        More Details <ChevronRightIcon className="-ml-2 h-5 w-5 text-gray-400" />
                    </Link>
                </div>
            </div>
        </div>
    )

}