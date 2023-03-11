import ILaunch from '@/types/ILaunch';
import { ILaunchesResponse, ILaunchResponse } from '@/types/ILaunchResponse';
import convertLaunchReqToILaunch from './convertLaunchReqToILaunch';
import { getStandardOptionsData } from './getStandardOptionsData';
import { getStandardQueryData } from './getStandardQueryData';

export default async function getLaunchRequests(limit: number = 10, id?: string): Promise<ILaunchesResponse | Error > {

  const options = getStandardOptionsData(limit); 
  const query = getStandardQueryData(id)

  const response = await fetch('https://api.spacexdata.com/v5/launches/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      options,
    }),
  });

  const launchesResponse: ILaunchesResponse = await response.json();
  if (!launchesResponse.launches) {
    return new Error('No data returned from API');
  }


  return launchesResponse;
}
