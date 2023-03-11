import { NextApiRequest, NextApiResponse } from 'next';
import ILaunch from '@/types/ILaunch';
import {  ILaunchResponse } from '@/types/ILaunchResponse';
import getLaunchRequests from '@/lib/getLaunchRequest';
import convertLaunchReqToILaunch from '@/lib/convertLaunchReqToILaunch';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ILaunch[]>) {

  const launchesResponse = await getLaunchRequests(10);
  if (launchesResponse instanceof Error) {
    res.status(404).end();
    return;
  }

  const launchData = launchesResponse.launches.map((launch: ILaunchResponse) => {
    return convertLaunchReqToILaunch(launch);
  });


  res.status(200).json(launchData);
  return;
}
