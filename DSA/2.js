/* Given an array nums of n integers where nums[i] is in the range [1, n], 
return an array of all the integers in the range [1, n] that do not appear in nums. 


Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
*/

var findDisappearedNumbers = function (nums) {
  var len = nums.length;
  var arr = [];
  for (var i = 1; i <= len; i++) {
    if (nums.includes(i) == false) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(findDisappearedNumbers([1, 1]));
//time complexity: O(n) ; space complexity: 
