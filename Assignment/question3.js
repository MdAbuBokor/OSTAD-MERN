
function showMultiplicationTable (x) {
    for(let i=1;i<=10;i++){
        console.log(i+" x "+x+" = "+(x*i));
    }
}
function main (input) {
    let x=parseInt(input);
    showMultiplicationTable(x);
   
}

process.stdin.on('data', data => {
    main(data.toString().trim());
})


