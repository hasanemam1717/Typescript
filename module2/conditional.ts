{
    //conditional types
    type x = null ;
    type y = undefined;

    type a1 = x extends null ? true : false; //conditional types
    type a2 = x extends null ? true : y extends undefined ? undefined: any; //nested conditional types


}