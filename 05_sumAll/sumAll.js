const sumAll = function (num1, num2) {
    let sum = 0
    if (num1 >= 0 && num2 >= 0 && typeof num1 === "number" && typeof num2 === "number") {
        if (num1 < num2) {
            for (let i = num1; i <= num2; i++) {
                sum += i;
            }
        }

        else if (num1 > num2) {
            for (let i = num2; i <= num1; i++) {
                sum += i;
            }
        }

        return sum;
    }

    else {
        return "ERROR"
    }
};

console.log(sumAll(4, 1));

// Do not edit below this line
module.exports = sumAll;
