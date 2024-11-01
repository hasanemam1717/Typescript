{
// use type union and intersection

    type FontendDev = {skill:string[];language:'HTML' & 'CSS'}
    type BackendDev = {skill:string[];language:'PHP' | 'laravel'}

    type FullstackDev = FontendDev | BackendDev;


    const devloper: FullstackDev = {
        skill: ['Allmost 4 month'],
        language:'PHP'

    }

}