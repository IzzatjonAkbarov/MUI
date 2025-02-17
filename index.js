var singleNumber = function (nums) {
  let newarr = [];
  let newnum = nums.join("");
  for (let i = 0; i < newnum.length; i++) {
    if (!newarr.includes(newnum[i])) {
      newarr.push(newnum[i]);
    }
  }
  return console.log(newarr);
};
singleNumber([2, 2, 1]);
