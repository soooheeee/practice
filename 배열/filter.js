// const numbers = [1,2,3,4,5];

// const evenNumbers = numbers.filter( number => number % 2 === '0' );
// console.log(evenNumbers);

const people = [
    {name: '짱구', age:25},
    {name: '철수', age:30},
    {name: '유리', age:10}
    ];

const adults = people.filter( person => person.age >= 20 );
console.log(adults);