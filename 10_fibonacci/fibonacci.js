const fibonacci = function (index) {
    if (index >= 0) {
        let num = 0;
        let array = [0, 1];
        for (let i = 2; i <= index; i++) {
            num = array[i - 1] + array[i - 2];
            array.push(num);
        }
        return array[index];
    }
    else {
        return "OOPS"
    }
};
console.log(fibonacci("5"))

// Do not edit below this line
module.exports = fibonacci;
