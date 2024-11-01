{
    type Student ={
        name:string;age:number;gender:string
    }

    // You can use type in this system

    const student1:Student ={
        name:"hasan",
        age:21,
        gender:"Male"
    }  
    const student2:{name:string;age:number;gender:string} ={
        name:"hasan",
        age:21,
        gender:"Male"
    } 
     const student3:{name:string;age:number;gender:string} ={
        name:"hasan",
        age:21,
        gender:"Male"
    }

    // You can also use type alias in function

    type Add = (x:number,y:string) =>string;

    const add:Add = (one,two) =>{
        const  sum = one+ two;
        return sum
    }

    add(121,"1231")
}