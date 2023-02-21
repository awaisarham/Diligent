// Task 11

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with places after the decimal.
// Sample Input
// -4 3 -9 0 4 1
// Sample Output
// 0.500000
// 0.333333
// 0.166667


let arr=[-4, 3, -9, 0 ,4, 1];
let zero=0,positive=0,negative=0;
for(i=0; i<arr.length; i++)
{
    if(arr[i]==0)
    {
        zero++;
    }
    else if(arr[i]>0)
    {
        positive++;
    }
    else{
        negative++;
    }
}
    console.log(zero/arr.length);
    console.log(positive/arr.length);
    console.log(negative/arr.length);
