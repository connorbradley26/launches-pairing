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

export default interface ILaunch {
    name: string;
    date: Date;
    core: string;
    payload: {
        id: string;
        type: string;
    };
    success: boolean;
    imageUrl: string;
}
