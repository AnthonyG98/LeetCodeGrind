let palindromeNum = "212212";

var isPalidrome = (x) => {
  let reversedNum = x.split("").reverse().join("");
  if (reversedNum === palindromeNum) {
    return true;
  }
  return false;
};
button.addEventListener("click", () => {
  isPalidrome(palindromeNum);
});
