{
    //basic promise
    const createPromise =():Promise<string> =>{
        return new Promise<string>((resoled,reject) =>{
            const data:string = "something"
            if(data){
                resoled(data)
            }
            else{
                reject("faild to load data")
            }
        })
    }
    // Calling create promise function
    const showData = async() =>{
        const data = await createPromise()
        console.log(data);
    }

    showData()

    const toDo = async() =>{
        const promise = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
        const data = await promise.json();
        // console.log(data);
        return data;
    }

    toDo()






}