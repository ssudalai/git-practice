//anonymous
const removeDuplicates = function(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

const array = [1, 2, 3, 4, 2, 3, 5];
const uniqueArray = removeDuplicates(array);
console.log("Array with duplicates removed:", uniqueArray);


//iife
(function() {
    const array = [1, 2, 3, 4, 2, 3, 5];
    const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
    console.log("Array with duplicates removed:", uniqueArray);
})();

