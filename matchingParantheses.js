const Stack = require('./stack');

function matchingParens(str) {
    
    const newStack = new Stack()
    
    if (!str) {
       return null; 
    } 
    
    for (let i=0; i < str.length; i++) {
        if (str[i] === '(') {
           stack.push(str[i]) 
        }
        if (str[i ]=== ')') {
            if (newStack.pop() === null)
                return false;
        }
    }
    return (newStack.top === null)
}