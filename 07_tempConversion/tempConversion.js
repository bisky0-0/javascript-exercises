const ftoc = function (fehr) {
  let cil = (fehr - 32) * (5 / 9);
  if (cil - Math.floor(cil) !== 0) {
    return +Number(cil).toFixed(1);
  }
  else {
    return cil;
  }
};

const ctof = function (cil) {
  let fehr = (9 / 5 * cil) + 32
  if (fehr - Math.floor(fehr) !== 0) {
    return +Number(fehr).toFixed(1);
  }
  else {
    return fehr;
  }
};

console.log(ftoc(-1));
console.log(ctof());

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
