// let num = 20;
// let isPrimeNo = true;

// for(let i = 2; i < num; i++){
//     if(num%i == 0){
//        isPrimeNo = false;
//        break;
//     }
// }

// if(isPrimeNo){
//     console.log(`${num} is  a prime number`);
// }
// else{
//     console.log(`${num} is not a prime number`);
// }

let num = 9;
let isPrimeNo = true;

for (let i = 2; i*i <= num; i++) {
  if (num % i == 0) {
    isPrimeNo = false;
    break;
  }
}

if (isPrimeNo) {
  console.log(`${num} is a prime number`);
} else {
  console.log(`${num} is a not prime number`);
}
