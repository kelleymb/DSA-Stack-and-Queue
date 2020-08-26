const Stack = require('./stack');

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    let palindromeStack = new Stack()
    let splitString = s.split('')
    let stackLength = splitString.length
    let forwardResults = ''
    
    splitString.forEach(char => palindromeStack.push(char))
    for (let i = stackLength; i > 0; i--) {
      forwardResults += palindromeStack.pop()
    }
    console.log(s === forwardResults)
    return s === forwardResults
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));