// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
/* Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
*/

var missingNumber = function (nums) {
  var len = nums.length;
  for (var i = 0; i <= len; i++) {
    if (nums.includes(i) == false) {
      return i;
    }
  }
};
console.log(missingNumber([3, 0, 1]));

//time complexity: O(n) ; space complexity: 
