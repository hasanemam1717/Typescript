const moblies = {
    id:1234,
    brands:"oppo",
    battary:"5000mph",
    camara:{
        font:'13mgp',
        back:"50mp"
    }

}

// destruring of object

const {id,camara:{font}} = moblies;

// Never use type when you destructing in object 
// const {id,camara:{font:string}} = moblies;


// Array destructing 

const popular = [5000,2506456,2455962,41845,4648468]

// You can use
// const [a,b,c] =popular;

// You also use 
// const [,,c] = popular;

// You also use rest oparetor

const  [,,canada,...rest] = popular
 

