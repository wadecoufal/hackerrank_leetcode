/**
 * @param {string} digits
 * @return {string[]}
 */
const numVals = {
    "2": ["a","b","c"],
    "3": ["d","e","f"],
    "4": ["g","h","i"],
    "5": ["j","k","l"],
    "6": ["m","n","o"],
    "7": ["p","q","r","s"],
    "8": ["t","u","v"],
    "9": ["w","x","y","z"],
}

var letterCombinations = function(digits) {
    if (digits.length === 1) {
        return numVals[digits];
    } else if (digits.length === 0) {
        return [];
    }

    const prevCombos = letterCombinations(digits.slice(0, digits.length - 1));
    const lastDigit = digits[digits.length-1];

    const results = [];
    prevCombos.forEach( combo => {
        numVals[lastDigit].forEach( letter => {
            results.push(combo + [letter]);
        })
    })

    return results
};
