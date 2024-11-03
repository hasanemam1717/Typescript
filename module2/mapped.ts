{
    // mapped 
    const arrayOfNumber:number[] = [1,2,3,4]

    // const arrayOfString:string[] = ["1","2","3","4"] //manual
    const arrayOfString:string[] = arrayOfNumber.map(number =>number.toString())
    console.log(arrayOfNumber);
    console.log(arrayOfString);

    type AreaNumber = {
        hight: number ;
        width: number;
    } 
    // type AreaString  = {
    //     hight: string ;
    //     width: string;
    // }

    // type area string 

    // type AreaString = {
    //     [key in "hight" | "width"] :string
    // } 
    

    //  use this way you can change any type of 
     
    type AreaString = {
        [key in keyof AreaNumber] :string
    }






}