// write a function that checks if a given study (case insensitive) is a palindrome

function isPalindrome(x) {
 let lowRegStr = x.toLowercase()
 let reverseStr = lowRegStr.split('').reverse().join('')
 return reverseStr === lowRegStr
}

