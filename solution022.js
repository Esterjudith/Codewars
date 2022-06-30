// Return the number (cReturn the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// ount) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) { 
    let vowelCount = 0
    vowelCount = str.match(/[a,e,i,o,u]/g)
    return vowelCount ? vowelCount.length : 0
  }
  