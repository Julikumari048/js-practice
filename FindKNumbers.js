let k = "7";
let arr = [5,11,1,2,3,4];

for(let i = 0; i < arr.length-1; i++){

    for(let j = i+1; j < arr.length; j++){

        if(arr[i] + arr[j] === k){

            console.log(arr[i], arr[j]);
            
        }

    }
   

}