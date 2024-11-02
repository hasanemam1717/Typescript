{
    type Vehicle ={
        bike:string;
        car:string;
        ship:string;
    }

    type Owner = "car" |"bike" |"ship"; //Manually


    //use key of operator

    type Owner2 = keyof Vehicle

    // const personX :Owner2 = ""

    const user = {
        name: 'chaity',
        age:20,
        address:'Bogura'
    }

    // user['name'] // "chaity"

    // const getPropertyValue = <X,Y extends "name"|"age"|"address"> (obj:X,key:Y) =>{
    //     return obj[key]
    // } 
     const getPropertyValue = <X,Y extends keyof X> (obj:X,key:Y) =>{
        return obj[key]
    }

    const result1 = getPropertyValue(user,'address')
}