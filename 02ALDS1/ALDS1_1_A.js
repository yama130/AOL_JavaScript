var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
var n = +input.shift();
var nums = input.shift().split(' ').map(Number);

  for (var i = 0; i < nums.length; i++) {
    var key = nums[i];
    var j = i - 1;
    while (j >= 0 && nums[j] > key) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = key;
    console.log(nums.join(' '));
  }
