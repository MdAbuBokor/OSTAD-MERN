function mergeArrays(array1, array2) {
  let result = [];
  result=[...array1,...array2];
  return result;
  }
  let array1=[1,2,3];
  let array2=[4,5,6];
  console.log(mergeArrays(array1,array2));