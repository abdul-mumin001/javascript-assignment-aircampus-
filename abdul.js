//1Q. Using a loop print all odd numbers  upto and including n.Don't include zero

let n=parseInt(process.argv[2]);

for(let i=1;i<n;i++){
    if(i%2!==0){
        console.log(i)
    }
}

// 2Q. Print the sum of all even numbers in a range from a to b. (Including a,b)