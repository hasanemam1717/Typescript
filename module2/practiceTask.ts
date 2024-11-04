{
    // task 1
    const task1 = (massage: string): void => {
        // return console.log(massage);
    }
    task1(`Hello , I will complete this course successfully and become a Next level Web Developer!`)
    // console.log('Hellow world');
    //task 2


    const data = (name: string, age: number, role?: "user" | "admin" | "guest") => {
        // console.log(`Name:${name}`);
        // console.log(`Age:${age}`);
        // console.log(`Role:${role}`);
    }

    data('HasanEmam', 25, "user")

    //Type alis
    type Person = {
        name: string;
        age: number;
        emil?: string;
        contact: number;
        hare: string;
        gender: "Male" | "Female"
    }

    const person1: Person = {
        name: 'Hasan Emam',
        age: 21,
        emil: "hasanimam@gmail.com",
        contact: +8801717680772,
        hare: "Full black",
        gender: "Female"

    }

    // task 4

    interface Book {
        type?: "fiction" | "non-fiction" | "islamic" | "political";
        pages: number;
        publications?: string;
    }

    interface Magazine {
        // type:"ChildHood" |"SocialAnnouncement"
        pages: number;
        title: string;
    }

    type BookOrMagazine = Book | Magazine;

    const bookOrMagaz: BookOrMagazine = {
        // type:"fiction",
        pages: 21,
        publications: 'somokalin'
    }

    type BookMagazine = Book & Magazine;

    const bookMag: BookMagazine = {
        type: "fiction",
        title: 'hafhkahfdjkhf',
        pages: 521545,
        publications: 'somokalin'

    }

    // Task 5
    const reverse = (value: string): string => {
        const valueSplit = value.split(""); // Split the string into an array of characters
        const valueReverse = valueSplit.reverse(); // Reverse the array of characters

        // console.log("split:", valueSplit); // Log the split array
        // console.log("reversed:", valueReverse); // Log the reversed array

        return valueReverse.join(""); // Join the reversed array back into a string and return it
    };

    // Example usage
    const reversedString = reverse("Hellow");
    // console.log("Reversed String:", reversedString); // Output: "wolleH"

    //Task 6

    const restOparetorUses = (...nums: number[]): number => {
        return nums.reduce((acc, curr) => acc + curr, 0);

    }
//    console.log( restOparetorUses(1,2));
//Task 7

type User = {name:string;email:string}
type Admin ={ adminLevel:string;}
type AdminUser = User & Admin;
const discribeAdminUser = (user:AdminUser):object=>{

}


}




