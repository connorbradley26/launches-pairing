// {
//     name: 'Apollo 11',
//     date: new Date(),
//     core: 'Core 1',
//     payload: {
//         id: '1',
//         type: 'Satellite',
//     },
//     success: true,
//     imageUrl:
//     'https://robbreport.com/wp-content/uploads/2019/07/spacex-starship.jpg',
// },

import { IPayload } from "./IPayload";

export default interface ILaunch {
    id: string;
    name: string;
    date: Date;
    core: string;
    payload: IPayload;
    success: boolean;
    imageUrl: string;
}
