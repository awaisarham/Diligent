// Task 6
// find the area of a polygon for a given n

console.time();
let n=4;
if(n>0)
{
    console.log("Area of a polygon for n =",n,"is" , 1 + 2 * n * (n-1)); 
}
else{
    console.log("Area of a polygon for n=0 is 0.");
}
console.timeEnd();
