import { Core, CoreDetails, Payload } from "./ILaunchResponse";

export default interface ILaunch {
    id: string;
    name: string;
    date: string;
    core: CoreDetails;
    payload: Payload;
    success: boolean;
    imageUrl: string;
}
