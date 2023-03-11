import { NextApiRequest, NextApiResponse } from 'next';
import ILaunch from '@/types/ILaunch';
import { ILaunchesResponse, ILaunchResponse } from '@/types/ILaunchResponse';
import { getStandardOptionsData } from '@/lib/getStandardOptionsData';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ILaunch[]>) {

  const options = getStandardOptionsData(10);
  const response = await fetch('https://api.spacexdata.com/v5/launches/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: {
        success: {
          $in: [true, false],
        },
      },
      options
    }),
  });

  const launchesResponse: ILaunchesResponse = await response.json();

  const launchData: ILaunch[] = launchesResponse.launches.map((launch: ILaunchResponse) => {
    return {
      id: launch.id,
      imageUrl: launch.links.patch.small,
      name: launch.name,
      date: new Date(launch.date_utc),
      core: {
        serial: launch.cores[0].core.serial,
        id: launch.cores[0].core.id,
      },
      payload: {
        name: launch.payloads[0].name,
        type: launch.payloads[0].type,
        id: launch.payloads[0].id,
      },
      success: launch.success,
    };

  });

  res.status(200).json(launchData);
  return;
}
