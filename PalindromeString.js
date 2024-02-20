let str = "madam";
let len = str.length;
for(let i = 0; i < len/2; i++){
    if(str[i] == str[len-1-i]){
        console.log("Palindrome String");
        break;
        
    }else{
        console.log("Not Palindrome String");
        break;
    }
}