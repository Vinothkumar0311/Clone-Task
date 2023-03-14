let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 21, 33]
let primeNumber = []
arry.forEach(num => {
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return primeNumber.push(num)
})
console.log(primeNumber)