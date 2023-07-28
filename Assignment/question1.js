
function discountCalculation (x) {
    if(x<50)return 0;
    else if (x>=50 && x<100)return (5*x)/100;
    else if(x>=100 && x<200)return (10*x)/100;
    else return (15*x)/100;
}
function main (input) {
    let x=parseInt(input);
    let discount = discountCalculation(x);
    let finalAmount = x - discount;
    console.log("Total Amount :"+x);
    console.log("\n Discount :"+discount);
    console.log("\n Final Amount :"+finalAmount);
   
}

process.stdin.on('data', data => {
    main(data.toString().trim());
})


