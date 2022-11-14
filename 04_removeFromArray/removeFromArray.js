const removeFromArray = function (array, ...deleteElement) {
    for (let i = 0; i < deleteElement.length; i++) {
        if (array.includes(deleteElement[i])) {
            array.splice(array.indexOf(deleteElement[i]), 1);
        }
    }
    return array;
};

const randomArray = [1, 4];
console.log(removeFromArray(randomArray, 2, 3, 4));

// Do not edit below this line
module.exports = removeFromArray;
