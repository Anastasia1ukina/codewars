// function isValid(s) {
//     let par = {
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     };

//     // console.log(par[s.charAt(0)])
//     for (let i = 0; i < s.length; i++) {
//         if (s.charAt(i + 1) && s.charAt(i + 1) === par[s.charAt(i)]) {
//             s = s.replace(s.charAt(i) + s.charAt(i + 1), '');
//             i = i - 2;
//         }
//     }
//     if (s.length) {
//         return false;
//     } else {
//         return true;
//     }
// };

function isValid(s) {
    let stack = []; // create an empty stack to store opening brackets
    for (let c of s) { // loop through each character in the string
        if (c === '(' || c === '{' || c === '[') { // if the character is an opening bracket
            stack.push(c); // push it onto the stack
        } else { // if the character is a closing bracket
            if (!stack.length || // if the stack is empty or 
                (c === ')' && stack[stack.length - 1] !== '(') || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
                (c === '}' && stack[stack.length - 1] !== '{') ||
                (c === ']' && stack[stack.length - 1] !== '[')) {
                return false; // the string is not valid, so return false
            }
            stack.pop(); // otherwise, pop the opening bracket from the stack
        }
    }
    return !stack.length; // if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
    // so the string is valid, otherwise, there are unmatched opening brackets, so return false
};

isValid('()]{}')