import ILaunch from '@/types/ILaunch';
import { ILaunchResponse } from '@/types/ILaunchResponse';

export default function convertLaunchReqToILaunch(launch: ILaunchResponse): ILaunch {
  try {
    return {
      id: launch.id,
      imageUrl: launch.links.patch.small,
      name: launch.name,
      date: launch.date_utc,
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
  } catch (error) {
    throw new Error('Error converting launch request to ILaunch');
  }
}
