{
    // Generic with interface 
    interface Devloper<T> {
        name: string,
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        },
        smartWatch: T
    }

    type MiBand = {band: "Mi band",
        heartTract: true}

    const poorDevloper: Devloper<MiBand> = {
        name: "Hasan",
        computer: {
            brand: 'ValueTap',
            model: "Rayzen",
            releaseYear: 2021
        },
        smartWatch:{band: "Mi band",
            heartTract: true}
    }
    type Apple = {band:string;sleepTrack:boolean}
    const richDevloper: Devloper<Apple> = {
        name: "Supto",
        computer: {
            brand: 'HP',
            model: "Intel",
            releaseYear: 2025
        },
        smartWatch: { band: "Apple", sleepTrack:true,}
    }
}