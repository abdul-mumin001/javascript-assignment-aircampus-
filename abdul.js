//1Q. Using a loop print all odd numbers  upto and including n.Don't include zero

// let n=parseInt(process.argv[2]);

// for(let i=1;i<=n;i++){
//     if(i%2!==0){
//         console.log(i)
//     }
// }

// 2Q. Print the sum of all even numbers in a range from a to b. (Including a,b)

// let a=parseInt(process.argv[2]);
// let b=parseInt(process.argv[3]);
// let sum=0;
// for(i=a;i<=b;i++){
//     if(i%2==0){
//         sum+=i;  
       
//     }
    
// }console.log(sum)

//3Q. Write a program to read the first and last digit of a number

// let num=parseInt(process.argv[2]);
// function firsDigit(num){
//     while(num>=10)
//     num=Math.floor(num/10);
//     return num;
// }
// function lastDigit(num){
//     num=Math.floor(num%10)
//     return num;
// }
// console.log(firsDigit(num)+" "+lastDigit(num));


//4Q.Check whether the given number is armstrong or not

const num=parseInt(process.argv[2]);
const n=num.length;
let sum=0;
let x= num;
while(x>0){
    let rem=x%10;
    sum+=rem**n;
    x=parseInt(x/10)
}
if(sum==num){
    console.log("is an armstrong")
}else{
    console.log("is not an armstrong")
}
