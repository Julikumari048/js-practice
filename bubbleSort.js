

// for(let i = arr.length; i > 0; i--){
     // for(let j = 0; j<i-1; j++){

     let arr = [8, 6, 10, 12, 1 ];

    for(let i = 0; i<arr.length-1; i++){

   
        for(let j = 0; j<arr.length-1; j++){

        if(arr[j] > arr[j+1]){

           [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }

    }
}
console.log(arr);