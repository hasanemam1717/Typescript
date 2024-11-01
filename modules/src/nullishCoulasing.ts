{
    const age:number = 25;
    if(age >= 18){
        // console.log("Adult")
    }
    else{
        // console.log("Child");
    }

    const isAdult = age<= 18 ? 'Sabalok' : 'Nabalok' ;
    // console.log({isAdult});

    // nullish cualishcing operator

    const isAdd ='';
    const result = isAdd && 'Condition mama'
    const result1 = isAdd ? 'Condition mama': 'Mitha hoiche mama'
    console.log({result},{result1});
}