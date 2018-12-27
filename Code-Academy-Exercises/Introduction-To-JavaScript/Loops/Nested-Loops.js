// Write your code below
let bobsFollowers = ['1', '2', '3', '4'];
let tinasFollowers = ['1', '2', '5'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

// I learned about nested loops.
