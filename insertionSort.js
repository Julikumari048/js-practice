let arr = [8,2,4,1,3];

for(let i = 1; i<arr.length; i++){

    let currentVal = arr[i];
    let j = i-1;

    while(j>=0 && arr[j]>currentVal){
        arr[j+1] = arr[j];
        j--;
    }

    arr[j+1] = currentVal;
}

console.log(arr);