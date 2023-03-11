import { NextApiRequest, NextApiResponse } from 'next';
import ILaunch from '@/types/ILaunch';
import { ILaunchesResponse } from '@/types/ILaunchResponse';
import { getStandardOptionsData } from '@/lib/getStandardOptionsData';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ILaunch>) {
  const { id } = req.query as { id: string };

  const options = getStandardOptionsData(1);

  // Bit of a hacky way to get the data for a single launch 
  // we're using the query endpoint to get the data for a single launch rather than the GET equivalent
  // this is because the GET endpoint doesn't support the populate option, and we also want the data in an easy to use format
  // rather than having to do a bunch of data manipulation to get the useful stuff
  // we can do it here and return the data in a format that's easy to use, also makes it more robust if the API changes
  const response = await fetch(`https://api.spacexdata.com/v5/launches/query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: {
        _id: id,
        success: {
          $in: [ true , false ]
        }
      },
      options
    }),
  });

  const launchesResponse: ILaunchesResponse = await response.json();
  const launchData = launchesResponse.launches[0];

  const launch: ILaunch = {
    id: launchData.id,
    imageUrl: launchData.links.patch.small,
    name: launchData.name,
    date: new Date(launchData.date_utc),
    core: launchData.cores[0].core,
    payload: launchData.payloads[0],
    success: launchData.success
  };

  res.status(200).json(launch);
}
