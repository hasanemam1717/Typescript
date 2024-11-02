{
    // const number:number[] = [5,415,5,5,5,54,5,511]

    type GenericArray = Array<number>
    // Generic speacial
    type GenericArray1 <params> = Array<params>

    // You can also write
    const number:Array<number> = [5,415,5,5,5,54,5,511]
    const number1:GenericArray1<number> = [5,415,5,5,5,54,5,511]

    // Generic type 


    // const mentors:string[] = ["Mr.x","Mr.Y","Mr.z"]
    const mentors:GenericArray1<string> = ["Mr.x","Mr.Y","Mr.z"]

    const bolArray :boolean[] = [true,false,true,false]


    // Array of object 

    const user:GenericArray1<{name:string;age:number;}> = [
        {
            name:'Hasan',
            age:21
        },
        {
            name:'Emam',
            age:25
        }
    ]
}