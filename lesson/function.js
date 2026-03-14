function summ(a,b){
    return a+b;
}
console.log(summ(1,2));

function summAray(arr){
    let result = 0;
    for(i=0; i <= arr.length-1; i++){
        result += arr[i];
    }
    return result;
}
let array1 = [1,2,3,4,5];
console.log(summAray(array1));