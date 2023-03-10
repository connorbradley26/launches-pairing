import { NextApiRequest, NextApiResponse } from 'next';
import ILaunch from '../../../types/ILaunch';
import { ILaunchResponse } from '../../../types/ILaunchResponse';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ILaunch>) {
  const { id } = req.query as { id: string };
  const response = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const launch: ILaunchResponse = await response.json();
  const launchData: ILaunch = {
    id: launch.id,
    imageUrl: launch.links.patch.small,
    name: launch.name,
    date: new Date(launch.date_utc),
    core: launch.cores[0].core,
    payload: {
      id: launch.payloads[0].id,
      type: launch.payloads[0].type,
    },
    success: launch.success,
  };

  res.status(200).json(launchData);
}
