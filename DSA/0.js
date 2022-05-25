
/*
Given an array A of size N, print the reverse of it.

Input:
First line contains an integer denoting the test cases 'T'. T testcases follow. Each testcase contains two lines of input. First line contains N the size of the array A. The second line contains the elements of the array.

Output:
For each testcase, in a new line, print the array in reverse order.

Constraints:
1 <= T <= 100
1 <= N <=100
0 <= Ai <= 100

Example:
Input:
1
4
1 2 3 4
Output:
4 3 2 1

*/

function reverse(a ,n){
    var rArray = []
    for (var i = n-1; i>=0; i--) {
        rArray.push(a[i])
    }
    var str = rArray.join(' ');
    return str
}

var arr = [1,2,3,4];
var n = arr.length;
// console.log(arr);
console.log(reverse(arr, n));

