{
    const createArray =  (param:string) :string[] =>{
        return [param]
    }  
    const res1 = createArray('Bangladesh')

    const createArrayWithGeneric = <T> (param:T) =>{
        return [param]
    }
    
    type User = {name:string;age:number}
    const res2 = createArrayWithGeneric <string>('Bangladesh')
    const resWithObject = createArrayWithGeneric <User>({name:'Hasan',age:21})
}