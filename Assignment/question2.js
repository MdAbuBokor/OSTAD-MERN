let finalArr=[];
function evenFilter (arr) {
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0)finalArr.push(arr[i]);

    }
}

let initialArr=[12, 34, 45, 23, 6, 78, 54, 90];
evenFilter(initialArr);
console.log(finalArr);



