// let sales: number = 123_456_790;
// let course: string = "Typescript";
// let is_published: boolean = true;

let sales = 123_456_790;
let course = "Typescript";
let is_published = true;


//ENUMS
// const small = 1;
// const medium = 2;
// const large = 3;


//use const before enum the comipler will generate more optimized code
const enum Size {Small = 1, Medium, Large};
let mySize: Size = Size.Medium;
// console.log(mySize)

//FUNCTIONS
function calculateTax(income: number, taxYear = 2022): number{
    if (taxYear < 2022){
        return income * 2;
    } else {
        return 0;
    }
}

console.log(calculateTax(10_000))


//OBJECTS

let employee: Employee = {
    id: 1,
    name: "Lindsay",
    retire: (date: Date) => {
        console.log(date);
    }
};


type Employee = {
    readonly id: number, //readonly prevents us from modifying property 
    name?: string // ? makes optional when we initialize 
    retire: (date: Date) => void //parameter is date with default Date type. we don't want to return any value so we have it as void.     
}

console.log(employee.name)


//UNION TYPES:
function kgToLbs(weight: number | string): number {
    //Narrowing
    if (typeof weight === 'number'){
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}

console.log(kgToLbs(10));
console.log(kgToLbs('10kg'))

//INTERSECTION TYPES:

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}


//LITERAL TYPES
type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Metric = 'cm' | 'inch'


//NULLABLE TYPES
function greet(name: string | null | undefined) {
    if (name) {
        console.log(name.toUpperCase());
    } else {
        console.log("Hola")
    }
}

greet(null); // compiler stops us from using null - we can change in tsconfig.json line 81
greet(undefined)


//OPTIONAL CHAINING
type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()};
}

let customer = getCustomer(1);
// if(customer !== null && customer !== undefined) {

// USE OPTIONAL PROPERTY ACCCESS OPERATOR INSTEAD: 
console.log(customer?.birthday) // now only executes if customer is not null or undefined
console.log(customer?.birthday?.getFullYear()) // now only executes if customer is not null or undefined and their birthday is not null or undefined 




//Optional element access operator - helpful with arrays
customers?.[0] //if customer is not null or undefined retrieve first element in array

//Optional call operator - 
let log: any = (message: string) => console.log(message)
let log2: any = null
log2?.("a") // add optional call operator. piece of code will only get executed if log is referencing an actual function. 

