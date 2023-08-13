function doubleNumbers(arr){
   let ans = arr.map(dbl);
   return ans;
}
function dbl(x){
  return x*2;
}
console.log(doubleNumbers([1,2,3]));