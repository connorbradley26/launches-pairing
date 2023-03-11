import { NextApiRequest, NextApiResponse } from 'next';
import ILaunch from '@/types/ILaunch';
import { ILaunchesResponse } from '@/types/ILaunchResponse';
import { getStandardOptionsData } from '@/lib/getStandardOptionsData';
import getLaunchRequests from '@/lib/getLaunchRequest';
import convertLaunchReqToILaunch from '@/lib/convertLaunchReqToILaunch';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ILaunch>) {
  const { id } = req.query as { id: string };


  // Bit of a hacky way to get the data for a single launch 
  // we're using the query endpoint to get the data for a single launch rather than the GET equivalent
  // this is because the GET endpoint doesn't support the populate option, and we also want the data in an easy to use format
  // rather than having to do a bunch of data manipulation to get the useful stuff
  // we can do it here and return the data in a format that's easy to use, also makes it more robust if the API changes
  const response = await getLaunchRequests(1, id);
  if (response instanceof Error) {
    res.status(404).end();
    return;
  }
  const launchData = convertLaunchReqToILaunch(response.launches[0]);

  res.status(200).json(launchData);
}
