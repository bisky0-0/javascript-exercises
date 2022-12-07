const palindromes = function (str) {
    let arrStr = Array.from(str);
    const specialChars = ` /.[]{};:'",!@#$%^&*()_+=-<>?`;
    const specialCharsArray = specialChars.split('');
    let specialCharsArrayLength = specialCharsArray.length;
    for (let i = 0; i < specialCharsArrayLength; i++) {
        if (arrStr.includes(specialCharsArray[i])) {
            while (arrStr.indexOf(specialCharsArray[i]) != -1) {
                arrStr.splice(arrStr.indexOf(specialCharsArray[i]), 1)
            }
        }
    }
    if (arrStr.join("").toLocaleLowerCase() === arrStr.reverse().join("").toLowerCase()) {
        return true
    }
    return false;
}
console.log(palindromes("hello!.,<"))
// Do not edit below this line
module.exports = palindromes;
