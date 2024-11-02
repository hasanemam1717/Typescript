{
    // Type alias 
    type User = {
        name: string;
        age: number
    }

    // use interface
    const man: User & User1 & { role: string } = {
        name: 'h',
        age: 211,
        skill: 'hh',
        role: ''
    }

    interface User1 {
        skill: string;
    }

    // Interface in arry

    interface Roll1 { [index: number]: number };


    const rollNumber :Roll1 = [1,2,3,4,5]



}