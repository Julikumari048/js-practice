let temp = 0;
for(let num = 1; num<=100; num++){

    for(let i = 2; i <= num-1; i++){
       if(num%i == 0){
        temp = temp+1;
       }
    }

       if(temp == 0){
        console.log(num);
       }
       else{
        temp = 0;
       }
    }
