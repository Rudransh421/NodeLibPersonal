

let hobbies = ['criket', 'football'];
for (let hobby of hobbies) {
    console.log(hobby);
}

hobbies.push('hockey');//for adding new element 

console.log(hobbies);

hobbies.pop();//delete element 

// console.log(hobbies.map(hobby =>{
//     return('hobby:'+hobby);
// }));

console.log(hobbies.map(hobby => 'hobby:' + hobby));

let coppy = hobbies.slice();

let copy = [...hobbies];//also work on obj

console.log(coppy);
console.log(copy);

// rest FindOperators

const array = (...args) => {
    return args;
}

console.log(array(1, 2, 3, 4));