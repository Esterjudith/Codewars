// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    const lookup = {};
  
    // let's count frequency how much time numbers occured
    for (let i = 0; i < numbers.length; i++) {
      let number = numbers[i];
      lookup[number] ? (lookup[number] += 1) : (lookup[number] = 1);
    }
  
    // and than let's find number which occured 1 time
    for (let key in lookup) {
      let number = lookup[key];
      if (number === 1) {
        return parseInt(key);
      }
    }
  }