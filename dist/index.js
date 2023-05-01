"use strict";
let sales = 123456790;
let course = "Typescript";
let is_published = true;
;
let mySize = 2;
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 2;
    }
    else {
        return 0;
    }
}
console.log(calculateTax(10000));
let employee = {
    id: 1,
    name: "Lindsay",
    retire: (date) => {
        console.log(date);
    }
};
console.log(employee.name);
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("Hola");
    }
}
greet(null);
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map