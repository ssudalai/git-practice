
//odd numbers in an array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printOddNumbers = arr => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

console.log("Odd numbers in the array:");
printOddNumbers(array);





//title caps
const stringArray = ["hello world", "goodbye moon", "welcome back"];

const convertToTitleCase = arr => {
    return arr.map(str => {
        return str.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    });
};

const titleCaseArray = convertToTitleCase(stringArray);

console.log("Title case array:", titleCaseArray);




//Sum of all numbers in an array


const Brr = [1, 2, 3, 4, 5];

const sum = Brr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum of all numbers in the array:", sum);


