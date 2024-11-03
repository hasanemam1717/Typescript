{
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactIngo : number;
    }
    //pick
    type ageName = Pick<Person, "name" | "age">

    //omit 

    type contact = Omit<Person,"name" | "age">

    // require

    type personRequire = Required<Person>

    //partial 

    type optional = Partial <Person>

    // read only 

    // const person1 = {
    //     name :"x",
    //     age :21,
    //     contact :4164613
    // }

    // Record 
    // type MyObj = {
    //     a:string;
    //     b:string;
    // }
     type MyObj = Record<string,string>

    const myBoj:MyObj = {
        a:"aa",
        b:"bb",
        c: "cc"
    }
}