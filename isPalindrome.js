let palindromeNum = "212212";

var isPalidrome = (x) => {
  let reversedNum = x.split("").reverse().join("");
  if (reversedNum === palindromeNum) {
    return console.log("true");
  }
  return console.log("false");
};

button.addEventListener("click", () => {
  isPalidrome(palindromeNum);
});
