//TWO SUM
var numbers = [2, 7, 11, 15];
var targetNum = 9;
var button = document.getElementById("button");

const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    console.log(complement);

    if (map.has(complement)) {
      console.log([map.get(complement), i]);
    }

    console.log(map.set(nums[i], i));
  }
};
button.addEventListener("click", () => {
  twoSum(numbers, targetNum);
});
