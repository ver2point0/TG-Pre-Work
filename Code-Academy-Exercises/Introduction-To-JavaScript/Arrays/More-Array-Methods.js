const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

groceryList.unshift('popcorn');

console.log(groceryList.slice(1, 4));

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);



// I learned about some non-mutating methods.
