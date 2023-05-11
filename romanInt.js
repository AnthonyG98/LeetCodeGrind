let intConvert = [];
let addedInts;

var addIntegers = function (ints) {
  let newSum = 0;
  for (let i = 0; i < ints.length; i++) {
    newSum += ints[i];
  }
  console.log(newSum);
};
var romanToInt = function (s) {
  for (i = 0; i < s.length; i++) {
    let newResultArray = [];
    newResultArray.push(s[i]);

    switch (s[i]) {
      case "I":
        intConvert.push(1);
        break;
      case "V":
        intConvert.push(5);
        break;
      case "X":
        intConvert.push(10);
        break;
      case "L":
        intConvert.push(50);
        break;
      case "C":
        intConvert.push(100);
        break;
      case "D":
        intConvert.push(500);
        break;
      case "M":
        intConvert.push(1000);
        break;
    }
    addIntegers(intConvert);
  }
};
button.addEventListener("click", () => {
  romanToInt("MMVI");
});
 