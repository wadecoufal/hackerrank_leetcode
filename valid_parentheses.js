/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) { // ()

    const stack = []; // (
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}',
    }

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (['(', '[', '{'].includes(ch)) {
            stack.push(ch);
        } else {
            const lastOpenBrace = stack.pop(); // (
            if (pairs[lastOpenBrace] != ch) {
                console.log(pairs[lastOpenBrace] != ch);
                return false;
            }
        }
    }



    if (stack.length > 0) {
        return false;
    }

    return true;
};
