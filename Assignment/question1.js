function printObjectProperties(object) {
  let count = 0;

  for (let key in object) {
    console.log(key + ": " + object[key]);
    count ++;
  }
  if(count==0){
    console.log("Object is empty");
  }
}

object={
 name : "Abu Bokor",
 age  : 23
}
printObjectProperties(object);