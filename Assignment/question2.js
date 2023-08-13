function findMaxNumber(ar){
  if(ar.length==0){
    return null;
  }
 
  let max=ar[0];
  for(let i=1;i<ar.length;i++){
    if(ar[i]>max){
      max=ar[i];
    }
  }
  return max;
}
let ar=[43,34,34,22,444,2];
console.log(findMaxNumber(ar));