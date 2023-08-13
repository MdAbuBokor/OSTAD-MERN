class MathUtility{
    static multiply(a,b){
        return a*b;
    }
  
}
let x=new MathUtility();
console.log(MathUtility.multiply(2,3));

//static method can only use with class not with object