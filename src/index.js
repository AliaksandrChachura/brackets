module.exports = function check(str, bracketsConfig) {
    if (str.length <= 1)
        return false;
    let openingBrackets = [];
    let closingBrackets = [];
    let sameBrackets = [];
    for (let i = 0; i < bracketsConfig.length; i ++){
        if (bracketsConfig[i][0] === bracketsConfig[i][1]){
            sameBrackets.push(bracketsConfig[i][0]);
        }
        else {
            openingBrackets.push(bracketsConfig[i][0]);
            closingBrackets.push(bracketsConfig[i][1]);
        }
    }
    let matchingOpeningBracket, ch;
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        ch = str[i];
        if (closingBrackets.indexOf(ch) > -1) {
            matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)];
            if (stack.length === 0 || (stack.pop() !== matchingOpeningBracket)) {
                return false;
            }

        }
        else if (sameBrackets.indexOf(ch) > -1){
            if (stack[stack.length-1] === ch) {
                stack.pop();
            }
            else {
                stack.push(ch);
            }
        }
        else {
            stack.push(ch);
        }
    }

    return (stack.length === 0);

};
