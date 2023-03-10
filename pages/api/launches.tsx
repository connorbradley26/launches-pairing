import { NextApiRequest, NextApiResponse } from "next";
import ILaunch from "../../types/ILaunch";


export default function handler(req: NextApiRequest, res: NextApiResponse<ILaunch[]>) {
    
    const launches: ILaunch[] = [
        {
            name: 'Apollo 11',
            date: new Date(),
            core: 'Core 1',
            payload: {
                id: '1',
                type: 'Satellite',
            },
            success: true,
            imageUrl:
            'https://robbreport.com/wp-content/uploads/2019/07/spacex-starship.jpg',
        },
        {
            name: 'Apollo 11',
            date: new Date(),
            core: 'Core 1',
            payload: {
                id: '1',
                type: 'Satellite',
            },
            success: true,
            imageUrl:
            'https://robbreport.com/wp-content/uploads/2019/07/spacex-starship.jpg',
        },
        {
            name: 'Apollo 11',
            date: new Date(),
            core: 'Core 1',
            payload: {
                id: '1',
                type: 'Satellite',
            },
            success: true,
            imageUrl:
            'https://robbreport.com/wp-content/uploads/2019/07/spacex-starship.jpg',
        },
        {
            name: 'Apollo 11',
            date: new Date(),
            core: 'Core 1',
            payload: {
                id: '1',
                type: 'Satellite',
            },
            success: true,
            imageUrl:
            'https://robbreport.com/wp-content/uploads/2019/07/spacex-starship.jpg',
        },
        {
            name: 'Apollo 11',
            date: new Date(),
            core: 'Core 1',
            payload: {
                id: '1',
                type: 'Satellite',
            },
            success: true,
            imageUrl:
            'https://robbreport.com/wp-content/uploads/2019/07/spacex-starship.jpg',
        },
    ]
    console.log("Launches: ", launches)
    res.status(200).json(launches)


}