let B = [1, 2, 3, 4, 5, 99, 7, 8, 9];

let isPrime = function (M) {
    if (M < 2) {
        return `${M} is not a prime number`; 
    }

    for (let i = 2; i * i <= M; i++) { 
        if (M % i === 0) {
            return `${M} is not a prime number`; 
        }
    }
    return `${M} is a prime number`; 
};


B.forEach((number) => {
    console.log(isPrime(number));
});
