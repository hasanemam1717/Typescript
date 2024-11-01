// Normal function
// Arrow function 

const add = (num1:number,num2:number) =>{
    const sum = num1+num2;
    return sum;
}

add(12,52)

const reduce = (x:number,y:number =10):number =>x+y;
// reduce('hui',2)
reduce(25,2)