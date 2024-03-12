

//anonymous 
let isPalindrome = function (word) {
    return word === word.split('').reverse().join('');
}

function findPalindromes(arr) {
    return arr.filter(word => isPalindrome(word));
}


let wordsArray = ["radar", "level", "javascript", "madam", "noon"];
let palindromes = findPalindromes(wordsArray);
console.log("Palindromes in the array:", palindromes);
//iife 


(function() {
    let isPalindrome = function(word) {
        return word === word.split('').reverse().join('');
    }

    function findPalindromes(arr) {
        return arr.filter(word => isPalindrome(word));
    }

    let wordsArray = ["radar", "level", "uiuiuiuiuiuiuiuooooo", "madam", "noon"];
    let palindromes = findPalindromes(wordsArray);
    console.log("Palindromes in the array:", palindromes);
})();
