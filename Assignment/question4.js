function gradeCalculation (x) {
    if(x>=90)console.log("A");
    else if(x>=80 && x<90)console.log("B");
    else if(x>=70 && x<80)console.log("C");
    else if(x>=60 && x<70)console.log("D");
    else console.log("F");
  
}
function main (input) {
    let x=parseInt(input);
    gradeCalculation(x);

   
}

process.stdin.on('data', data => {
    main(data.toString().trim());
})
